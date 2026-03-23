import { Observable } from 'rxjs';

export class NetworkTemporalSource {
  getStream(): Observable<any> {
    return new Observable((subscriber) => {
      const intervalId = setInterval(async () => {
        try {
          const response = await fetch(
            'http://goldtop.hopto.org:8080/data/products.json',
          );

          if (!response.ok) {
            throw new Error(`Network error: ${response.status}`);
          }

          const data = await response.json();

          subscriber.next({
            timestamp: new Date().toISOString(),
            source: 'remote-json',
            payload: data,
          });
        } catch (error) {
          subscriber.error(error);
        }
      }, 5000);

      return () => clearInterval(intervalId);
    });
  }
}

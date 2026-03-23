import { Controller, Sse } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { StreamGeneratedService } from './stream-generated.service';

@Controller()
export class StreamGeneratedController {
  constructor(private readonly streamService: StreamGeneratedService) {}

  @Sse('stream')
  stream() {
    return interval(2000).pipe(
      map((count) => ({
        data: {
          sequence: count + 1,
          message: `You are event ${count + 1}`,
          timestamp: new Date().toISOString(),
          status: 'processing',
        },
      })),
    );
  }
}

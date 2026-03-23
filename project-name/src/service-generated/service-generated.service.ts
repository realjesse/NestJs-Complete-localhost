import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceGeneratedService {
  getData() {
    return { data: 'Service Generated, Woo Hoo!' };
  }
}

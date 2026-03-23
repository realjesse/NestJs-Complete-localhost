import { Controller, Get } from '@nestjs/common';
import { ServiceGeneratedService } from './service-generated.service';

@Controller('service-generated')
export class ServiceGeneratedController {
  constructor(
    private readonly serviceGeneratedService: ServiceGeneratedService,
  ) {}

  @Get()
  findAll() {
    return this.serviceGeneratedService.getData();
  }
}

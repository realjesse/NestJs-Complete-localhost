import { Controller, Get } from '@nestjs/common';

@Controller('demo')
export class DemoController {
  @Get()
  findAll() {
    return { data: 'demo works' };
  }
}

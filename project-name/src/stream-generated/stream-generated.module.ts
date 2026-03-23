import { Module } from '@nestjs/common';
import { StreamGeneratedController } from './stream-generated.controller';
import { StreamGeneratedService } from './stream-generated.service';

@Module({
  controllers: [StreamGeneratedController],
  providers: [StreamGeneratedService]
})
export class StreamGeneratedModule {}

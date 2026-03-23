import { Module } from '@nestjs/common';
import { FileGeneratedController } from './file-generated.controller';
import { FileGeneratedService } from './file-generated.service';

@Module({
  controllers: [FileGeneratedController],
  providers: [FileGeneratedService]
})
export class FileGeneratedModule {}

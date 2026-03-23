import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { ServiceGeneratedController } from './service-generated/service-generated.controller';
import { ServiceGeneratedService } from './service-generated/service-generated.service';
import { FileGeneratedModule } from './file-generated/file-generated.module';
import { StreamGeneratedModule } from './stream-generated/stream-generated.module';
import { StreamGeneratedController } from './stream-generated/stream-generated.controller';
import { StreamGeneratedService } from './stream-generated/stream-generated.service';

@Module({
  imports: [DemoModule, FileGeneratedModule, StreamGeneratedModule],
  controllers: [
    AppController,
    ServiceGeneratedController,
    StreamGeneratedController,
  ],
  providers: [AppService, ServiceGeneratedService, StreamGeneratedService],
})
export class AppModule {}

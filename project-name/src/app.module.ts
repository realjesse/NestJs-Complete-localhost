import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { ServiceGeneratedController } from './service-generated/service-generated.controller';
import { ServiceGeneratedService } from './service-generated/service-generated.service';
import { FileGeneratedModule } from './file-generated/file-generated.module';

@Module({
  imports: [DemoModule, FileGeneratedModule],
  controllers: [AppController, ServiceGeneratedController],
  providers: [AppService, ServiceGeneratedService],
})
export class AppModule {}

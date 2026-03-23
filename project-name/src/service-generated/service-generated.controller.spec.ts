import { Test, TestingModule } from '@nestjs/testing';
import { ServiceGeneratedController } from './service-generated.controller';

describe('ServiceGeneratedController', () => {
  let controller: ServiceGeneratedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceGeneratedController],
    }).compile();

    controller = module.get<ServiceGeneratedController>(ServiceGeneratedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

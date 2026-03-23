import { Test, TestingModule } from '@nestjs/testing';
import { StreamGeneratedController } from './stream-generated.controller';

describe('StreamGeneratedController', () => {
  let controller: StreamGeneratedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreamGeneratedController],
    }).compile();

    controller = module.get<StreamGeneratedController>(StreamGeneratedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

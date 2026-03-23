import { Test, TestingModule } from '@nestjs/testing';
import { FileGeneratedController } from './file-generated.controller';

describe('FileGeneratedController', () => {
  let controller: FileGeneratedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileGeneratedController],
    }).compile();

    controller = module.get<FileGeneratedController>(FileGeneratedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FileGeneratedService } from './file-generated.service';

describe('FileGeneratedService', () => {
  let service: FileGeneratedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileGeneratedService],
    }).compile();

    service = module.get<FileGeneratedService>(FileGeneratedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

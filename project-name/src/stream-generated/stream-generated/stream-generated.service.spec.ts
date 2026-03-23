import { Test, TestingModule } from '@nestjs/testing';
import { StreamGeneratedService } from './stream-generated.service';

describe('StreamGeneratedService', () => {
  let service: StreamGeneratedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreamGeneratedService],
    }).compile();

    service = module.get<StreamGeneratedService>(StreamGeneratedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

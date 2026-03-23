import { Test, TestingModule } from '@nestjs/testing';
import { ServiceGeneratedService } from './service-generated.service';

describe('ServiceGeneratedService', () => {
  let service: ServiceGeneratedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceGeneratedService],
    }).compile();

    service = module.get<ServiceGeneratedService>(ServiceGeneratedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

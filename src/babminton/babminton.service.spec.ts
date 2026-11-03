import { Test, TestingModule } from '@nestjs/testing';
import { BabmintonService } from './babminton.service.js';

describe('BabmintonService', () => {
  let service: BabmintonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BabmintonService],
    }).compile();

    service = module.get<BabmintonService>(BabmintonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BabmintonController } from './babminton.controller.js';
import { BabmintonService } from './babminton.service.js';

describe('BabmintonController', () => {
  let controller: BabmintonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BabmintonController],
      providers: [BabmintonService],
    }).compile();

    controller = module.get<BabmintonController>(BabmintonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { BabmintonService } from './babminton.service.js';
import { BabmintonController } from './babminton.controller.js';

@Module({
  controllers: [BabmintonController],
  providers: [BabmintonService],
})
export class BabmintonModule {}

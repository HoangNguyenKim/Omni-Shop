import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthModule } from './health/health.module.js';
import { BabmintonModule } from './babminton/babminton.module.js';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [HealthModule, BabmintonModule],
  controllers: [AppController],
  providers: [AppService, {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }],
})
export class AppModule {}
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BabmintonService } from './babminton.service.js';
import { CreateBabmintonDto } from './dto/create-babminton.dto.js';
import { UpdateBabmintonDto } from './dto/update-babminton.dto.js';
@Controller('babminton')
export class BabmintonController {
  constructor(private readonly babmintonService: BabmintonService) {}

  @Post()
  create(@Body() createBabmintonDto: CreateBabmintonDto) {
    return this.babmintonService.create(createBabmintonDto);
  }

  @Get()
  findAll() {
    return this.babmintonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.babmintonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBabmintonDto: UpdateBabmintonDto) {
    return this.babmintonService.update(+id, updateBabmintonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.babmintonService.remove(+id);
  }
}

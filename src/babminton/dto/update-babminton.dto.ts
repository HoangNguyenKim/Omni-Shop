import { PartialType } from '@nestjs/mapped-types';
import { CreateBabmintonDto } from './create-babminton.dto.js';

export class UpdateBabmintonDto extends PartialType(CreateBabmintonDto) {}

import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// const transformNumber = ({ value }: { value: unknown }) =>
//   typeof value === 'string' && value.trim() !== '' ? Number(value) : value;

export class CreateBabmintonDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    price: number;


    @IsNotEmpty()
    stock: number;
}

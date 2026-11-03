import { Injectable } from '@nestjs/common';
import { CreateBabmintonDto } from './dto/create-babminton.dto.js';
import { UpdateBabmintonDto } from './dto/update-babminton.dto.js';

@Injectable()
export class BabmintonService {
  create(createBabmintonDto: CreateBabmintonDto) {
    products.push(createBabmintonDto);
    return `This action adds a new babminton with id ${createBabmintonDto.id}`;
  }

  findAll() {
    return products;
  }

  findOne(id: number) {
    return products.find((product) => product.id === id);
  }

  update(id: number, updateBabmintonDto: UpdateBabmintonDto) {
    return `This action updates a #${id} babminton`;
  }

  remove(id: number) {
    return `This action removes a #${id} babminton`;
  }
}
const products = [
  {
    id: 1,
    name: 'Yonex Astrox 100ZZ',
    price: 4500000,
    stock: 10,
  },
  {
    id: 2,
    name: 'Yonex Nanoflare 1000Z',
    price: 4200000,
    stock: 5,
  },
  {
    id: 3,
    name: 'Victor Thruster F Ultra',
    price: 3800000,
    stock: 8,
  },
];

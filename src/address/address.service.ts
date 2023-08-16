import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/createAdress.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRespository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    createAddressDTO: CreateAddressDto,
    userId: number,
  ): Promise<AddressEntity> {
    return this.addressRespository.save({
      ...createAddressDTO,
      userId,
    });
  }
}

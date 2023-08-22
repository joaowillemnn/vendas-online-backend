import {
  Get,
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/createAdress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Roles } from 'src/decorators/roles.docrator';
import { UserType } from 'src/user/enum/user-type.enum';
import { UserId } from '../decorators/user-id.decorator';
import { ReturnAdressDto } from './dto/returnAdress.dto';

@Roles(UserType.User, UserType.Admin)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDTO: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<AddressEntity> {
    console.log('userID?', userId);
    return this.addressService.createAddress(createAddressDTO, userId);
  }

  @Get()
  async fundAddressByUserId(
    @UserId() userId: number,
  ): Promise<ReturnAdressDto[]> {
    return (await this.addressService.findAddressByUserId(userId)).map(
      (address) => new ReturnAdressDto(address),
    );
  }
}

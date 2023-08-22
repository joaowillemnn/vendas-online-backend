import { cityMock } from '../../city/__mocks__/city.mock';
import { CreateAddressDto } from '../dto/createAdress.dto';
import { addressMock } from './address.mock';

export const createAddressMock: CreateAddressDto = {
  cep: addressMock.cep,
  cityId: cityMock.id,
  complement: addressMock.complement,
  numberAddress: addressMock.numberAddress,
};

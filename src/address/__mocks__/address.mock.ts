import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '8448484',
  cityId: cityMock.id,
  complement: 'teste de compple',
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: userEntityMock.id,
  numberAddress: 200,
  id: 19,
};

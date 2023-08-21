import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  createdAt: new Date(),
  name: 'CityName',
  stateId: stateMock.id,
  updatedAt: new Date(),
  id: 2131231,
};

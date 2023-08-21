import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '070189894',
  createdAt: new Date(),
  email: 'teste@teste.com.br',
  id: 77897,
  name: 'MockName',
  password: 'password',
  phone: '45646466',
  typeUser: UserType.User,
  updatedAt: new Date(),
};

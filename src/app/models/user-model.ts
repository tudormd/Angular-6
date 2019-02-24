import { BaseModel } from './base-model';
import { GroupModel } from './group-model';

export class UserModel extends BaseModel {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  lastLoginAt?: Date;
  groups?: GroupModel[];
  data?: UserModel[]| UserModel;
}
 
import { BaseModel } from './base-model';
import { UserModel } from './user-model';

export class GroupModel extends BaseModel {
    name?: string;
    methods?: string;
    users?: UserModel[] | number[];
    data?: GroupModel[];
}

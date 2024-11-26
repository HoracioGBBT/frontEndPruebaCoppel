
import { Injectable } from "@angular/core";
import { Mapper } from "../interfaces/maper.interface";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})


export class UserMapper implements Mapper<User, any> {
    public toModel(value: any): User {
   

        const user = new User(
            value.idUser,
            value.fullname,
            value.username,
            value.password,
            
        );
  
        return user;
    }

    public toEntity(model: User): any {
        return {
            idUser: model.idUser,
            fullname: model.fullname,
            username: model.username,
            password: model.password,
        }
    }

    public toModelList(values: any): User[] {
        const users: User[] = [];
        if (values){
            values.map((value: any) => {
                users.push(this.toModel(value));
            });
        }
    
        return users;
    }

    public toEntityList(users: User[]): any[] {
        const userEntity: any[] = [];
        users.map((users: User) => {
            userEntity.push(this.toEntity(users));
        });
        return userEntity;
    }
    
}
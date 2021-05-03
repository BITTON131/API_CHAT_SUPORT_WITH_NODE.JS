import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService {
    async create(email: string) {
        const userRepository = getCustomRepository(UsersRepository);
        //VERIFFICAR SE USUARIO EXISTE

       const userExists = await userRepository.findOne({
         email,
       });

       
        //SE EXISTIR, RETORNAR USER
       if(userExists) {
           return userExists;
       }
       const user = userRepository.create({
           email,
       });

       await userRepository.save(user);
        
       //SE NÃO EXISTIR, SALVAR NO DB
        return user;
    }


}




export { UsersService  }
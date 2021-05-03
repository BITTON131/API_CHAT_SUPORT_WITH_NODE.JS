import { getCustomRepository } from "typeorm";
import { SettingsReposity } from "../repositories/SettingsRepository";



interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService { 

    async create({chat, username} : ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsReposity);

        //Select * from settings where username = "username" limit 1;
        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if(userAlreadyExists) {
            throw new Error("Este usuário já existe!");
        }

        const settings = settingsRepository.create({
            chat,
            username
        });
    
        await settingsRepository.save(settings);
        return settings;
    } 
}


export { SettingsService }
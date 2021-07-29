import { Request, Response } from "express";
import { getCustomRepository } from "typeorm"
import { SettingsService } from "../services/SettingsService";
class SettingsController {

    async create(request: Request, response: Response) {
        const {chat, username} = request.body;
    const settingsService = new SettingsService();

   try {
     const setting = await settingsService.create({chat, username });
  
     return response.json(setting);
   }catch(er) {
       return response.status(400).json({
           message: er.message,
       });
   }
    }
}

export { SettingsController }
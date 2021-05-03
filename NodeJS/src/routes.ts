import { Router } from "express";
import { MessagesControllers } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UserController } from "./controllers/UserController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UserController();
const messagesController = new MessagesControllers();


routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);


export { routes };
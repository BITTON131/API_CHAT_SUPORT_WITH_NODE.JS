import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

///rjihguidfgudihfieouhf
@EntityRepository(Message)
class MessagesRepository  extends Repository<Message>{

}

export { MessagesRepository };
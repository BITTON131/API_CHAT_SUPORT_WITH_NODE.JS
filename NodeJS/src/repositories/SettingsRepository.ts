import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";


@EntityRepository(Setting)
class SettingsReposity extends Repository<Setting> {

}

export { SettingsReposity }
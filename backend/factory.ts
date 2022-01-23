import { characterRepository } from "./repositories/characterRepository";

export const factory = {
    getCharacterRepository: () => {
        return characterRepository;
    }
};
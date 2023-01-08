import {inject, injectable} from "tsyringe"
import { ICategoryRepository } from "../repositories/ICategoryRepository";

@injectable()
class CreateCategoryService{
    constructor(
        @inject("CaregoriesRepository")
        private categoryRepository : ICategoryRepository
    ){}
    
    
    execute = (name, description) => {
        const categoryAlreadyExists = this.categoryRepository.findByName(name)

        if (categoryAlreadyExists){
            throw new Error ("category already exists");
        }
    
        this.categoryRepository.create({name, description})
    }
}

export {CreateCategoryService};
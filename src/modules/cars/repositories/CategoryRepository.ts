import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    constructor(){
        this.categories = []
    }

    findByName = (name: string) : Category => {
        return this.categories.find(x => x.name === name)
    }

    create = ({name, description} : ICreateCategoryDTO): void => {
        const category = new Category(name, description);
    
        this.categories.push(category)
    }

    list = (): Category[] => {
        return this.categories;
    }
}

export {CategoryRepository}
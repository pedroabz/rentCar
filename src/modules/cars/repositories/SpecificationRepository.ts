import { Specification } from "../model/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository 
{
    private specifications: Specification[];

    constructor(){
        this.specifications = []
    }
    findByName(name: string): Specification {
        return this.specifications.find(x => x.name === name)
    }

    list(): Specification[] {
        return this.specifications;
    }
    create({ name, description }: ICreateSpecificationDTO) {
        const category = new Specification(name, description);   
        this.specifications.push(category)        
    }
}

export {SpecificationRepository}
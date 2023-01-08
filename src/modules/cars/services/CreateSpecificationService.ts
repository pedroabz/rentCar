import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

class CreateSpecificationService{
    private specificationRepository : ISpecificationRepository;

    constructor(specificationRepository){
        this.specificationRepository = specificationRepository;
    }
    
    execute = (name, description) => {
        const specificationAlreadyExists = this.specificationRepository.findByName(name)

        if (specificationAlreadyExists){
            throw new Error ("category already exists");
        }
    
        this.specificationRepository.create({name, description})
    }
}

export {CreateSpecificationService}
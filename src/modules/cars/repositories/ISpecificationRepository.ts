import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO{
    name: string,
    description: string
}

export interface ISpecificationRepository {
    findByName(name: string): Specification;
    list(): Specification[];
    create({name, description}: ICreateSpecificationDTO);
}
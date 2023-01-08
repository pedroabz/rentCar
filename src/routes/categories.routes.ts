import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();
const createCategoryService = new CreateCategoryService(categoryRepository);


categoriesRoutes.post("/", (request, response) =>{
    const {name, description } = request.body

    createCategoryService.execute(name, description)

    return response.status(201).send()
})

categoriesRoutes.get("/", (_, response) =>{
    const categories = categoryRepository.list()

    return response.status(200).json(categories)
})

export {categoriesRoutes}
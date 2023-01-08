import {v4 as uuidV4} from "uuid"

class Specification{
    name: string;
    description: string;
    created_at: Date;
    id: string;

    constructor(name, description){
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
            this.name = name;
            this.description = description;
        }
    }
}

export {Specification}
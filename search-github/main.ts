import {Service} from "./service";

export class Main
{
    public service: any;

    constructor(service: Service){
        this.service = service;
    }

    finProject(keyword: string){
        this.service.getRepo(keyword).then(
            result => {
                console.log(result);
            }
        )
    }
}

let main = new Main(new Service);
main.finProject('laravel')
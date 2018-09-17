export class Quoteclass {
    constructor( public id:number, public title:string, public author:string){
         
    }
}
export class Goal {
    public showDescription:boolean;
    constructor(public id:number, public name:string,public description:string){
        this.showDescription=false

    }
}
export class Quote {
    public showDescription:boolean
    constructor( public id:number, public title:string, public author:string){
         this.showDescription=false;
    }
}

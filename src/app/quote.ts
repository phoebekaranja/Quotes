export class Quote {
    public showDescription:boolean
    constructor( public id:number, public title:string, public author:string ,public description:string){
         this.showDescription=false;
    }
}

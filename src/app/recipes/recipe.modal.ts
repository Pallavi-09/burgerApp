import { Ingredient } from '../shared/ingredient.modal';

export class Recipe{
    public name : string;
    public description: string;
    public imagePath: string;
    public ingredient: Ingredient[];
    public rating : number;
    public price : number

    constructor(name: string, des:string, imagePath:string, ingredient:Ingredient[], rating:number, price:number){
        this.name = name;
        this.description = des;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
        this.rating = rating;
        this.price = price;
    }
}
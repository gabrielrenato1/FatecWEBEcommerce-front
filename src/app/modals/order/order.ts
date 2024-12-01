import { Item } from "../item/item";

export class Order {

    public codigo:number = 0;
    public cliente_id:number = 0;
    public total:number = 0;
    public item:Array<Item> = [];

    public setProducts(shoppingCartProducts:any){

        for (let index = 0; index < shoppingCartProducts.length; index++) {
            this.item.push(shoppingCartProducts[index]);
        }
        
    }

}

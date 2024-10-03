import { Product } from "../product/product";

export class Order {

    public id:number = 0;
    public user_id:number = 0;
    public products:Array<Product> = [];

    public setProducts(shoppingCartProducts:any){

        for (let index = 0; index < shoppingCartProducts.length; index++) {
            this.products.push(Object.assign(new Product(), shoppingCartProducts[index]));
        }
        
    }

}

export class Product {

    public id:number = 0;
    public name:string = "";
    public description:string = "";
    public image:string = "";
    public price:number = 0.0;
    public discount:number = 0.0;
    public quantity:number = 0;

    public addShoppingCart(){

        var shoppingCart = localStorage.getItem("shoppingCart")??"[]";
        var arrProducts = JSON.parse(shoppingCart);
        var productQuantity = this.quantity > 0 ? this.quantity : 1;

        for (let index = 0; index <= arrProducts.length; index++) {
            
            if(index == (arrProducts.length) || arrProducts.length == 0){

            this.quantity = productQuantity;
            arrProducts.push(this);
            index = arrProducts.length;

            } else if( arrProducts[index].id == this.id){

            arrProducts[index].quantity += productQuantity;
            index = arrProducts.length;

            }

        }

        localStorage.setItem("shoppingCart", JSON.stringify(arrProducts));

    }

}

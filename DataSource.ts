import { Product } from "./Product";

export class SimpleDataSource{
    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Smsung S5","Phone",1000),
            new Product(2,"Smsung S6","Phone",2000),
            new Product(3,"Smsung S7","Phone",3000),
            new Product(4,"Smsung S8","Phone",4000),
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}

let p = new SimpleDataSource();


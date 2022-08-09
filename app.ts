import { Product } from "./Product";
import {ProductService} from "./ProductService";

let _productService = new ProductService();
let result;

result = _productService.getById(5);
let p = new Product();
p.name = "Iphone 6";
p.price = 4000;
p.category = "Phone";

//_productService.saveProduct(p);
_productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);
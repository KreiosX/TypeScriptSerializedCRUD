"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Smsung S5", "Phone", 1000), new Product_1.Product(2, "Smsung S6", "Phone", 2000), new Product_1.Product(3, "Smsung S7", "Phone", 3000), new Product_1.Product(4, "Smsung S8", "Phone", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
var p = new SimpleDataSource();

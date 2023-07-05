class Product {
  constructor(id, name, cost) {
    this._id = id;
    this._name = name;
    this._cost = cost;
  }

  getName() {
    return this._name;
  }

  getCost() {
    return this._cost;
  }

  getId() {
    return this._id;
  }
}

class ShoppingCar {
  static instance = undefined;

  constructor() {
    this._products = [];
  }

  static getInstance() {
    if (!ShoppingCar.instance) {
      ShoppingCar.instance = new ShoppingCar();
    }

    return ShoppingCar.instance;
  }

  add(product) {
    this._products.push(product);
    console.log("producto agregado:", this._products);
  }

  deleteById(id) {
    this._products = this._products.filter((product) => product.getId() !== id);
    console.log("Producto eliminado:", this._products);
  }
}

const car1 = ShoppingCar.getInstance();
const car2 = ShoppingCar.getInstance();
const lamp = new Product(1, "lamp", 10.0);
const pencil = new Product(2, "pencil", 2.0);
car1.add(lamp);
car2.add(pencil);
car2.deleteById(2);
car1.deleteById(1);

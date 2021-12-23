class Car {
  
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

	getPrice() {
    return this.price
  }
  
  changePrice(newPrice){
    this.price = newPrice
    this.lens = newPrice
  }

}

const audi = new Car({
  price: 10000
});

console.log(audi.getPrice());
audi.changePrice(2000);
console.log(audi.getPrice());
console.log(audi);

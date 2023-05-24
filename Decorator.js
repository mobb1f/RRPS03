class Coffee {
    cost() {
      return 5;
    }
  }
  
  class Sugar {
    constructor(coffee) {
      this.coffee = coffee;
    }
    
    cost() {
      return this.coffee.cost() + 1;
    }
  }
  
  class Cream {
    constructor(coffee) {
      this.coffee = coffee;
    }
    
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  
  const coffee = new Coffee();
  const coffeeWithSugar = new Sugar(coffee);
  const coffeeWithSugarAndCream = new Cream(coffeeWithSugar);
  
  console.log(coffeeWithSugarAndCream.cost()); // 8
  
class Strategy {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    execute(...args) {
      return this.strategy(...args);
    }
  }
  
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  
  const addStrategy = new Strategy(add);
  const subtractStrategy = new Strategy(subtract);
  
  console.log(addStrategy.execute(2, 1)); // 3
  console.log(subtractStrategy.execute(2, 1)); // 1
  
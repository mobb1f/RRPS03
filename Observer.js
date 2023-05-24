class Observer {
    constructor() {
      this.observers = [];
    }
    
    subscribe(fn) {
      this.observers.push(fn);
    }
  
    unsubscribe(fnToRemove) {
      this.observers = this.observers.filter(fn => fn !== fnToRemove);
    }
  
    notify(data) {
      this.observers.forEach(fn => fn(data));
    }
  }
  
  const obs = new Observer();
  const logData1 = data => console.log('Subscriber 1:', data);
  const logData2 = data => console.log('Subscriber 2:', data);
  
  obs.subscribe(logData1);
  obs.subscribe(logData2);
  obs.notify('Hello!'); // Subscriber 1: Hello! Subscriber 2: Hello!
  
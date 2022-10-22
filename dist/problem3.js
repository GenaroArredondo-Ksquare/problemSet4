"use strict";
class Pizza {
    constructor(size, jamon, pepe, pina, exChesse) {
        this.size = size;
        this.jamon = jamon;
        this.pepe = pepe;
        this.pina = pina;
        this.exChesse = exChesse;
    }
    getCost() {
        let price = 0;
        if (this.size == 'small') {
            price = 10 + (2 * (this.jamon + this.pepe + this.pina));
            if (this.exChesse == true) {
                price = price + 2;
            }
        }
        if (this.size == 'medium') {
            price = 12 + (2 * (this.jamon + this.pepe + this.pina));
            if (this.exChesse == true) {
                price = price + 4;
            }
        }
        if (this.size == 'large') {
            price = 14 + (3 * (this.jamon + this.pepe + this.pina));
            if (this.exChesse == true) {
                price = price + 6;
            }
        }
        if (this.size == 'XL') {
            price = 18 + (4 * (this.jamon + this.pepe + this.pina));
            if (this.exChesse == true) {
                price = price + 6;
            }
        }
        return price;
    }
    orderSummary() {
        let chState = '';
        let totalIng = (this.jamon + this.pepe + this.pina);
        if (this.size == 'small')
            this.exChesse
                ? chState = 'Yes'
                : chState = 'No';
        return `
    
      ====== YOUR ORDER ======= 
    
      |Size: ${this.size}
    
      |Ingredients: ${totalIng}
    
       Ham: ${this.jamon}
    
       Peperoni: ${this.pepe}
    
       Pineapple: ${this.pina}
    
      |Extra Chesses: ${chState} 
    
      |Price: $${this.getCost()}
    
      ========================== 
    
      `;
    }
}
class SizeFactory {
    createPizza(size, jamon, pepe, pina, exChesse) {
        return new Pizza(size, jamon, pepe, pina, exChesse);
    }
}
class PizzaFactory {
    constructor() {
        this.pizza = new SizeFactory();
    }
    getPizza() {
        return this.pizza;
    }
}
const pizza = new PizzaFactory();
const order1 = pizza.getPizza().createPizza('small', 1, 1, 1, true);
const order2 = pizza.getPizza().createPizza('medium', 1, 2, 3, false);
const order3 = pizza.getPizza().createPizza('XL', 0, 0, 0, false);
console.log(order1.orderSummary());
console.log(order2.orderSummary());
console.log(order3.orderSummary());

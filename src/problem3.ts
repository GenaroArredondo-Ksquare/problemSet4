class Pizza{

     private size: 'small' | 'medium' | 'large' | 'XL';
    
     private jamon: number;
    
     private pepe: number;
    
     private pina: number;
    
     private exChesse:boolean;
    
    
    
    constructor(size:'small' | 'medium' | 'large' | 'XL', jamon:number, pepe:number, pina:number, exChesse:boolean){
    
     this.size = size;
    
     this.jamon = jamon;
    
     this.pepe = pepe;
    
     this.pina = pina;
    
     this.exChesse = exChesse;
    
     }
    
    
    
     getCost() {
    
      let price: number = 0;
    
      if (this.size == 'small') {
    
       price = 10 + (2 * (this.jamon + this.pepe + this.pina))
    
       if (this.exChesse == true) {
    
        price = price + 2
    
       }
    
      }
    
      if (this.size == 'medium') {
    
       price = 12 + (2 * (this.jamon + this.pepe + this.pina))
    
       if (this.exChesse == true) {
    
        price = price + 4
    
       }
    
      }
    
      if (this.size == 'large') {
    
       price = 14 + (3 * (this.jamon + this.pepe + this.pina))
    
       if (this.exChesse == true) {
        
        price = price + 6
    
       }
    
      }
    
      if (this.size == 'XL') {
    
       price = 18 + (4 * (this.jamon + this.pepe + this.pina))
    
       if (this.exChesse == true) {
    
        price = price + 6
    
       }
    
      }
    
      return price;
    
     }
    
     
    
     orderSummary(): string{
    
      let chState:string = '';
    
      let totalIng: number = (this.jamon+this.pepe+this.pina);
    
      if(this.size == 'small')
    
      this.exChesse
    
       ? chState = 'Yes'
    
       : chState = 'No'
    
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
    
      `
    
     }
    
    }
    
    
    
    class SizeFactory{
    
     createPizza(size: 'small' | 'medium' | 'large' | 'XL',jamon:number, pepe:number, pina:number,exChesse:boolean){
    
      return new Pizza(size,jamon, pepe, pina,exChesse)
    
     }
    
    }
    
    
    
    class PizzaFactory {
    
     pizza: SizeFactory;
    
     constructor(){
    
      this.pizza = new SizeFactory()
    
     }
    
    
    
     getPizza(){
    
      return this.pizza;
    
     }
    
    }
    
    
    
    
    const pizza = new PizzaFactory();
    
    const order1 = pizza.getPizza().createPizza('small',1,1,1,true)
    
    const order2 = pizza.getPizza().createPizza('medium',1,2,3,false)
    
    const order3 = pizza.getPizza().createPizza('XL',0,0,0,false)
    
    console.log(order1.orderSummary())
    
    console.log(order2.orderSummary())
    
    console.log(order3.orderSummary())
    
    
    
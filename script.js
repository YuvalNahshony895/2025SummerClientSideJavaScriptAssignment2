class Smoothie{
    constructor(name, size, main, fruit){
        this.name = name;
        this.size = size;
        this.main = main;
        this.fruit = fruit;
    }

    

}
class smoothieOrder extends Smoothie {
    constructor(name, size, main, fruit){
        super(name, size, main, fruit);
    }
    description(){
        return `${this.name} ordered a ${this.size} ${this.fruit} smoothie with ${this.main}`;
    };
}

document.getElementById("smoothieForm").addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const main = document.getElementById("main").value;
    const fruit = document.getElementById("fruit").value;

    const order = new smoothieOrder(name, size, main, fruit);
    document.getElementById("result").textContent = order.description();
});

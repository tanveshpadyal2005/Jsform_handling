

class counter {

    constructor() {
        this.start = 0
    }

    startcount() {
        return this.start++;
    }

    endcount() {
        return this.start--;
    }
}

class without_instance {

    static add(a, b) {
        console.log(a + b);
    }
    static sub(a, b) {
        console.log(a - b);
    }
}



without_instance.add(12, 56)
without_instance.sub(12, 56)

const display = document.getElementById("number");

let cadd = new counter();
let num;
// console.log(cadd.start)
function add() {

    cadd.startcount();
    display.innerText = cadd.start;

}

function sub() {

    num = cadd.endcount();
    display.innerHTML = cadd.start;


}


//inheritence

class animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return console.log(this.name + " barks..");
    }
}

class dog extends animal {
    constructor(name, breed) {
        super(name),
            this.breed = breed
    }
    allinfo() {
        console.log("name:" + this.name + " breed name: " + this.breed);
    }
}

const dogs = new dog("buddy", "american");

dogs.speak();
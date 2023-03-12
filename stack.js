class Stack{
    #maxSize = 0;
    #container = [];

    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }

    push(element){
        if(this.#maxSize === this.#container.length){
            console.log("Data Full!")
        }else{
            this.#container.push(element)
        }
    }

    pop(){
        this.#container.pop()
    }

    get(){
        console.log(this.#container)
    }
}

let nStack = new Stack()
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.push('Enzo')
nStack.pop()
nStack.push('Enzo')
nStack.get()



let arrStudents = []

function PushData(str){
    arrStudents.push(str)
}

function PopData(){
    arrStudents.pop()
}

PushData('Egi1')
PushData('Egi2')
PushData('Egi3')
PushData('Egi4')
PushData('Egi5')
PushData('Egi6')
PopData()
PopData()
console.log(arrStudents)
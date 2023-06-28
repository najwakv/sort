class Queue {
    constructor(){
        this.items = []
    }

    enQueue(element){
        this.items.push(element)
    }

    deQueue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()

queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.deQueue()
queue.print()
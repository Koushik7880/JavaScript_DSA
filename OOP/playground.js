    class Node {
    constructor(value, next = null){
        this.value = value,
        this.next = next
    }
    }
    
    class LinkedList{
        constructor(value){
            let node = new Node(value)
            this.head = node
            this.tail = node
        }
    }
    
    let list = new LinkedList(100)
    console.log(list)
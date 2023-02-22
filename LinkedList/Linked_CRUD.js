
////////////////////////////////////////////// Append /////////////////////////////////////////////

// class Node {
//     constructor(value, next = null){
//         this.value = value,
//         this.next = next
//     }
//     }

// class LinkedList{
//     constructor(value){
//         let node = new Node(value)
//         this.head = node,
//         this.tail = node 
//     }
//     append(value){
//         let node = new Node(value)
//           this.tail.next = node
//           this.tail = node
//     }
// }

// let list = new LinkedList(100)
// list.append(200)
// console.log(list);

/////////////////////////////////////////// Prepand //////////////////////////////////////

// class Node {
//     constructor(value, next = null){
//         this.value = value,
//         this.next = next
//     }
//     }

// class LinkedList{
//     constructor(value){
//         let node = new Node(value)
//         this.head = node,
//         this.tail = node 
//     }

//     append(value){
//                 let node = new Node(value)
//                   this.tail.next = node
//                   this.tail = node
//             }
    
//     prepend(value){
//         // 1. create new node
//         let node = new Node(value)
//         // 2. new node next will be head
//         node.next = this.head
//         // 3. update head 
//         this.head = node
//     }
// }

// let list = new LinkedList(10)
// list.append(20)
// list.append(30)
// list.prepend(5)

// console.log(list);


////////////////////////////////////////// Append & Prepand /////////////////////////////////////////

class Node {
    constructor(value, next = null){
        this.value = value,
        this.next = next
    }
}

class LinkedList {
    constructor(value){
        let node = new Node(value)
        this.head = node,
        this.tail = node
    }

    append(value){
        let node = new Node(value)
        this.tail.next = node
        this.tail = node
    }

    prepend(value){
        // 1. create new node
        let node = new Node(value)
        // 2. new node next will be head
        node.next = this.head
        // 3. update head
        this.head = node

    }
}

let list = new LinkedList(10)

list.append(20)
list.append(30)
list.prepend(5)
list.prepend(11)

console.log(list);
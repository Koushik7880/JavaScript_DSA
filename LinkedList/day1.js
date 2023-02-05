// class Node {
//     constructor(value, next = null){
//         this.value = value,
//         this.next = next
//     }
//     }
//     let node = new Node(100)
//     console.log(node);

//     class LinkedList{
//         constructor(value){
//             let node = new Node(value)
//             console.log(node);
//         }
//     }
    
    // let list = new LinkedList(100)
    ///////////////////////////////////////////////////////////////////////////////////////

    // class Node {
    //     constructor(value, next = null){
    //         this.value = value,
    //         this.next = next
    //     }
    //     }
        // class LinkedList{
        //     constructor(value){
        //         let node = new Node(value)
        //         this.head = node
        //         this.tail = node
        //     }
        // }
        
        // let list = new LinkedList(100)
        // console.log(list)

        ///////////////////////////////////////////////////////////////////////////////////////

        class Node {
            constructor(value, next = null){
                this.value = value,
                this.next = next
            }
            }

        class LinkedList{
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
        }
        let list = new LinkedList(100)
        list.append(200)
// list.append(300)
// list.append(400)
// list.append(500)
// list.append(600)
        console.log(list);


        ///////////////////////////////////////////////////////////////////////////////////////
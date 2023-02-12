// class Node {
//     constructor(data, next=null){
//         this.data=data;
//         this.next=next;
//     }
// }


// class LinkList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     push(data) {
//         this.head = new Node(data,this.head)   
//     }
// }

// const n1 = new LinkList()

// n1.push(1);
// n1.push(2);
// n1.push(3);
// n1.push(4);
// n1.push(5);
//  console.log(n1.head.next)

// const removeNthFromEnd = function(head, n){
//     let dummyHead = new Node(-Infinity);
//     dummyHead.next = head 
//     let fast = head, slow = head
//     for (let i = 0; i < n; i++) fast = fast.head.next
//     if (!fast) return head.head.next
//     while (fast.head.next) fast = fast.head.next, slow = slow.head.next
//     slow.head.next = slow.head.next.next
//     return head

// }

// removeNthFromEnd(n1,2);
var head;

class Node {
    constructor(val) { 
        this.data = val;
        this.next = null;
    }
}
function push(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head
    head = new_node;
}

        push(7);
        push(1);
        push(3);
        push(2);

// const removeNthFromEnd = function(head, n ){

//     let fast = head, slow = head
//     for (let i = 0; i < n; i++) fast = fast.next
//     if (!fast) return head
//     while (fast.next) fast = fast.next, slow = slow.next
//     slow.next = slow.next.next
//     return head

// }

// const result = removeNthFromEnd(head,2)
// console.log(result);


const removeNthFromMiddle = function(head){

    let fast = head, slow = head;
    if(!fast.next) return head.next;
    let prev;
    while(fast && fast.next){
        prev = slow;
        fast= fast.next.next;
        slow= slow.next;
    }
    prev.next=prev.next.next;
    return head
}

// const rs = removeNthFromMiddle(head);
// console.log(rs);


const swapping = function(head){
    const newNode = new Node(0);
    newNode.next = head;
    let prev = newNode;
    let cur = head;

    while( cur && cur.next ){
        let temp = cur.next.next;
        cur.next = cur.next.next;
        prev.next = cur.next;

        prev=cur;
    }

    return newNode.next
}

const rs = swapping(head);
console.log(rs);
// const result1 = removeNthFromEnd(head,2)
// console.log(result1)
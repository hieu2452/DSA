class Node {
    constructor(val){
        this.data=val;
        this.next=null;   
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(data){
        const new_node = new Node(data);
        new_node.next = this.head;
        this.head = new_node;
        this.size++;
    }

    insertAt(data,index){
        if(index < 0 && index>this.size){
            return;
        }
        if(index > 0 && index>this.size){
            return;
        }
        const node = new Node(data);
        let cur, prev;
        cur=this.head;
        let count=0;
        while(count<index){
            prev = cur;
            cur= cur.next;
            count++
        }

        node.next = cur;
        prev.next = node;
        this.size++;
    }

    removeAt(index){
        if(index < 0 && index>this.size){
            return;
        }
        if(index > 0 && index>this.size){
            return;
        }

       
        let cur , prev;
        cur = this.head;
        let count = 0;

        if(index === 0){
            this.head = this.next;
        }else{
            
            while(count < index){
                prev = cur;
                cur = cur.next;
                count++
            }
            prev.next = cur.next;
            
        }


        this.size--;

    }

    clearList(){
        this.head = null;
        this.size = 0;
    }

    printList(){
        let cur = this.head;

        while(cur){
            console.log(cur);
            cur=cur.next
        }
    }
}


const l = new LinkList();


// l.clearList();
l.push(4);
l.push(3);
l.push(2);
l.push(1);
l.push(0);
// l.removeAt(0);
l.printList();
console.log(l.size);
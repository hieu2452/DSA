class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;  
    }
}


const n1 = new Node(10);

class LinkList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        let node = new Node(data);
        let cur ;
        if(!this.head){
            this.head = node;
        }else{
            cur = this.head;

            while(cur.next){
                cur = cur.next;
            }

            cur.next = node
        }

        this.size++;
    }

    insertAt(data,index){
        if(index > 0 && index > this.size){
            return;        
        }
        //if first index
        if(index === 0){
            this.head= new Node(data,this.head);
            return
        }

        const node = new Node(data);
        let cur, prev;
        
        //set current to first
        cur = this.head;
        let count = 0;

        while (count<index){
            prev = cur //node befor the index
            count++;
            cur = cur.next; // node after
        }

        node.next = cur;
        prev.next = node;
        this.size++; 
    }

    getAt(index){
        let cur = this.head;
        let count = 0;
        while (cur){
            if(count == index){
                console.log(cur.data);
            }
            count++;
            cur= cur.next;
        }
        return;
    }

    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }
        let cur = this.head;
        let prev;
        let count = 0;
        
        //remove fisrt
        if(index===0){
            this.head = cur.next;
        }else {
            while(count < index){
                count++;
                prev=cur;
                cur=cur.next;

            }

            prev.next = cur.next;
        }
        this.size--;
    }

    printListData(){
        let cur = this.head;

        while(cur){
            console.log(cur.data);
            cur=cur.next; 
        }
    }
}


const l = new LinkList();

l.insertFirst(100);
l.insertFirst(110);
l.insertFirst(120);


l.printListData();
l.getAt(1);

//hi

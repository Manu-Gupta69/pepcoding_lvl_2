// substraction of two linklist 

// if(l1 == null ||  l2 == null) return l1 !== null ? l1 : l2
    
// function reverse(head){
//     let length = 0;
//     let prev = null;
//     let next = null;
//     let current = head;
    
//     while(current!== null){
//         next = current.next;
//       current.next = prev;
//         prev = current;
//         current = next;
//         length +=1;
//     }
    
//     return [prev , length];
// }

// let head1 = l1;
// let head2 = l2;

// let [revlist1 , length1]  = reverse(head1);
// let [revlist2 , length2] = reverse(head2);
// let curr1 , curr2;    
//  if(length1 > length2){
//      curr1 =  revlist1;
//      curr2 = revlist2;
//  }else{
//      curr1 = revlist2;
//      curr2 = revlist1;
//  }

// let borrow = 0;
// //console.log(curr1 , curr2)
// let dummy = new Node(-1);
// let dumpointer =  dummy;
// //console.log(curr1 , curr2)
// while(curr1 !== null ){
//     let val1 = curr1.data;
//     let val2 = curr2 !== null ? curr2.data :  0;
//     let diff = val1 - val2 + borrow;
//     if(diff < 0){
//         diff += 10;
//         borrow = -1;
//     }else{
//         borrow = 0;
//     }
//    // console.log( diff , borrow)
//     dumpointer.next = new Node(diff);
//     dumpointer = dumpointer.next;   
//    curr1 = curr1.next;
//     if(curr2 !== null) curr2 = curr2.next;
// }
//   // console.log(dummy)
// let [realans , idklength] = reverse(dummy.next);
//    let tail = realans;
//    let prev = tail;
//    while(tail !== null){
//       if(tail.data !== 0){
//           return tail;
//       }
//    }

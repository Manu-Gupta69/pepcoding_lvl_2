// count subarray that sum equals to zero

// let sum = 0;
// map = {};
// map[0] = 1;

// for(let i=0 ; i<Array.length; i++){
//     sum += arr[i];
//     if(map.hasOwnProperty(sum)){
//         ans += map[sum];
//         map[sum] +=1;
//     }else{
//         map[sum]= 1;
//     }
// }


// Length of Largest Subarray with Contiguous Elements

// for(let i=0  ; i <Array.length-1 ;i++){
//     let map ={};
//     let max = arr[i];
//     let min = arr[i];
//     map[arr[i]] = 1;
//     for(let j=i+1 ; j<Array.length ;j++){
//         if(map.hasOwnProperty(arr[j])) break;
//         map[arr[j]] = 1;
//         max  = Math.max(max , arr[j])
//         min  = Math.min(min , arr[j])

//         if(i-j == max - min){
//             let len = i -j +1;
//             maxlen = Math.max(maxlen , len);
//         }
//     }
// }


//count substring without repeating characters

// let map = {};
// let i=-1;
// let j = -1;

// while(true){
//     //flag = false;
//     //flag2 = false;

//     while(i<s.length){
//     i+=1;
//     if(map.hasOwnProperty(s[i])){
//         map[s[i]] +=1;
//     }else{
//         map[s[i]]= 1;
//     }

//     if(maps[s[i]] > 1){    
//         break;
//     }
//     ans += i -j;
//     }
//     //release
//     while(j<i){
//     j+=1;
//     if(map[s[j]] == 1) delete map[s[j]];
//     map[s[j]] -= 1;

//     if(map.hasOwnProperty(s[j]) && map[s[j]] == 1) {
//         ans += i-j;
//          break;
//     }
//     }

//     if(!flag && flag2) break;
// }



// Longest substring with k distinct characters


// let map = {};
// let i=-1;
// let j = -1;

// while(true){
//     //flag = false;
//     //flag2 = false;

//     while(i<s.length){
//     i+=1;
//     if(map.hasOwnProperty(s[i])){
//         map[s[i]] +=1;
//     }else{
//         map[s[i]]= 1;
//      size += 1;
//     }

//     if(size == k){    
//         len = i -j;
//     }else if(size<k){
//         continue;
//     }else break;
//     }
//     //release
//     while(j<i){
//     j+=1;
//     if(map[s[j]] == 1) {
//      delete map[s[j]];
//      size -=1;
//         }
//     else map[s[j]] -= 1;

//     if(size==k) {
//      finding max len math.max bhi lagega
//         len = i-j;
//         break;
//     }else if(size > k) continue;
//     if(!flag && flag2) break;
// }


// Longest substring with at most k distinct characters

// same as above


// equal no of 0's 1's and 2's

let number = [1,1,2,0,1,0,1,2,1,2,2,0,1];
let map = {}
let count0 = 0;
let count2 = 0;
let count1 = 0;
let key = `${count0}#${count1}`
map[key] = 0;
let ans =0;
for(let i=0 ; i<number.length; i++){
    //accuqire

    if(number[i] == 1) count1+=1;
    if(number[i] == 0) count0+=1;
    if(number[i] == 2) count2+=1;
    key = `${count1-count0}#${count2-count1}`
    if(map.hasOwnProperty(key)){
        ans += map[key];
        map[key] +=1;
    }else{
        map[key] = 1;
    }
}
console.log(map)
console.log(ans);


// Smallest subarray with highest frequency element |

// let indexmap =  {};
// let freqmap = {};

// for(let i=0 ; i<arr.length; i++){
//     if(freqmap[arr[i]]> 0){
//         freqmap[arr[i]] +=1;
//     }else{
//         freqmap[arr[i]] = 1;
//         indexmap[arr[i]] = i;
//     }

//     if(freqmap[arr[i]] > currentmaxfreq){
//         curretmaxfreq = freqmap[arr[i]];
//         startidx  =  indexmap[arr[i]];
//         len = i -  indexmap[arr[i]] + 1;
//     }
//     else if(freqmap[arr[i]]  == currentmaxfreq){
//         let callength = i  - indexmap[arr[i]] +  1;

//         if(callength > len ){
//             curretmaxfreq = freqmap[arr[i]];
//             startidx  =  indexmap[arr[i]];
//             len = i -  indexmap[arr[i]] + 1;
//         }
//     }

// }


// trick sorting cost
// let map = {};
// let max = 0;
// for(let [index , value] of arr){
//     if(map[arr[index-1]]){
//         map[arr[index]]+= map[arr[index-1]] + 1;
//         max = Math.max(max , map[arr[index]]);
//     }
// }
// return arr.length - max;
class Pair{
    constructor(val ,index){
        this.val = val;
        this.index = index;
    }
}
let arr = [6,4,2,14,8,10,12,16];
let newarr = [];
for(let i =0 ; i<arr.length; i++){
  newarr[i] = new Pair(arr[i] , i)
}

newarr.sort((a,b) => a.val - b.val);
let visitedarr = new Array(arr.length).fill(false);
let length = 0;
let ans = 0;
for(let i=0 ;i<arr.length ;i++){
    let j =  i;
  if(newarr[j].index == i || visitedarr[j]){
      continue;
  }
  length = 0;
  while(!visitedarr[j]){
       visitedarr[j] = true;
       j = newarr[j].index;
         length +=1;
  }
  ans += length-1;
}
console.log(ans);

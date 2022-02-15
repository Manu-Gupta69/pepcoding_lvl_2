 
   
   let s = '2*(5+5 * 2)/3+(6/2+8)'
   class Pair{
       constructor(stack ,sign){
           this.stack =  stack;
           this.sign = sign;
       }
   }
    
    let str = s.split('').filter(item => item !== ' ').map(item => {
        return item >= '0' && item <= '9' ? parseInt(item) : item;
    })
    let sign = '+';
    let sum = 0;
    let  stack = [];
    let stackpairarr = []
    //console.log(str)
    for(let i=0 ; i<str.length ;i++){
        if(str[i] >=  0 && str[i] <=9){
            let val = 0
            while(i<str.length && str[i] >=0 && str[i]<=9){
                //number creation
                val = val*10 + str[i];
                i+=1;
            }
            i-=1;
            if(sign == '+'){
                stack.push(val)
              }
            else if(sign == '-'){
                stack.push(-val);
            }
            else if(sign == '*'){
                let top = stack.pop();
                stack.push(top*val);
            }
             else if(sign == '/'){
                let top = stack.pop();
               top >= 0 ? stack.push(Math.floor(top/val)) : stack.push(Math.ceil(top/val)); 
            }


          } else if(str[i]  == '('){
              let stackpair  =  new Pair(stack ,  sign);
              stack = [];
              sign = '+'
              stackpairarr.push(stackpair);
          }
          else if(str[i] == ')'){
              let val = 0;
              while(stack.length){
                  val += stack.pop();
              }
              let againpair = stackpairarr.pop();
              stack = againpair.stack;
              sign = againpair.sign;

              if(sign == '+'){
                stack.push(val)
              }
            else if(sign == '-'){
                stack.push(-val);
            }
            else if(sign == '*'){
                let top = stack.pop();
                stack.push(top*val);
            }
             else if(sign == '/'){
                let top = stack.pop();
               top >= 0 ? stack.push(Math.floor(top/val)) : stack.push(Math.ceil(top/val)); 
            }

          }
        
        else if(typeof(str[i]) == 'string'){
            sign = str[i];
        }
        

    }
    //console.log(stack)
       while(stack.length){
           sum += stack.pop();
       }
    console.log(sum);
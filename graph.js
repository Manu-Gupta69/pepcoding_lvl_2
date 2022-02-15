let grid = [[3 ,3, 3, 3, 0, 0, 3, 0],
    [1, 3 ,3 ,3, 3, 3 ,3, 0],
    [3, 3, 0, 3, 0 ,3, 3 ,3],
    [3 ,3, 3, 0, 0, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 3, 3, 0, 3, 3],
    [0, 3, 0, 3, 3, 3, 3, 0],
    [3, 3, 3, 0, 3, 3, 3, 2]
    ]
 


function dfs(row , col , grid){
    if(row <0 || col <0 || row >= grid.length || col >= grid.length  || grid[row][col] == 0 || grid[row][col] == '@'){
        return false;
    }
        if(grid[row][col] == 2){
            display();
            return ;
        }

  
    grid[row][col] = '@';

     let top =  dfs(row+1 , col, grid)
     if(top) return true;
      
  let bottom =  dfs(row-1 , col, grid);
  if(bottom) return true;
 
  
    let right = dfs(row , col+1, grid);
    if(right) return true;
    
   
    let left = dfs(row , col-1, grid);
    if(left) return true;
    
    grid[row][col] = 3
    return false;
    
}

   display();
   console.log('---------------')
for(let row  =0 ; row < grid.length; row++){
    for(let col =0 ; col < grid.length; col++){
        if(grid[row][col] == 1){
           let ans = dfs(row , col , grid);
           if(!ans) display()
        }
    }
}
console.log('nothing')

function display(){
    for(let row of grid){
        console.log(...row)
    }
}
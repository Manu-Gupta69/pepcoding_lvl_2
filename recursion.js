let boxes = [0,0,0,0];
let totalcount  =  3;
function permutaions(boxes ,  count){
    if(count >= totalcount){
        console.log(boxes);
        return;
    }

    for(let i=0; i<boxes.length ;i++){
        if(boxes[i] == 0){
            boxes[i] = count;
            permutaions(boxes , count+1);
            boxes[i] = 0;
        }
    }

}

permutaions(boxes, 1);



// cross word puzzle

// public static void solution(char[][] arr, String[] words, int vidx){
//     if(vidx == words.length){
//         print(arr);
//         return;
//     }
//     for (int i = 0; i < 10; i++) {
//         for (int j = 0; j < 10; j++) {
//             String word = words[vidx];
//             if(arr[i][j] == '-' || arr[i][j] == word.charAt(0)){
//                 if(canPlaceVertical(arr,word,i,j) == true){
//                     boolean[] visited = new boolean[word.length()];
//                     placeVertical(arr,word,i,j,visited);
//                     //call
//                     solution(arr,words,vidx + 1);
//                     unplaceVertical(arr,word,i,j,visited);
//                 }

//                 if(canPlaceHorizontal(arr,word,i,j) == true){
//                     boolean[] visited = new boolean[word.length()];
//                     placeHorizontal(arr,word,i,j,visited);
//                     //call
//                     solution(arr,words,vidx + 1);
//                     unplaceHorizontal(arr,word,i,j,visited);
//                 }
//             }
//         }
//     }
// }

// public static boolean canPlaceVertical(char[][] arr, String word, int r, int c){
//     int i = 0 ;
//     for(; i < word.length(); i++){
//         if(r + i >= arr.length){
//             return false;
//         }
//         if(arr[r + i][c] == '-' || arr[r + i][c] == word.charAt(i)){
//             continue;
//         }else{
//             return false;
//         }
//     }
    
//     if(r + i == arr.length || arr[r + i][c] == '+') {
//         return true;
//     }else {
//         return false;
//     }
// }

// public static boolean canPlaceHorizontal(char[][] arr, String word, int r, int c){
//     int i = 0;
//     for(; i < word.length(); i++){
//         if(c + i >= arr.length){
//             return false;
//         }
//         if(arr[r][c + i] == '-' || arr[r][c + i] == word.charAt(i)){
//             continue;
//         }else{
//             return false;
//         }
//     }
//     if(c + i == arr.length || arr[r][c + i] == '+') {
//         return true;
//     }else {
//         return false;
//     }
// }

// public static void placeVertical(char[][] arr, String word, int r, int c,boolean[] visited){
//     for(int i = 0 ; i < word.length(); i++){
//         if(arr[r + i][c] == '-'){
//             visited[i] = true;
//         }
//         arr[r + i][c] = word.charAt(i);
//     }
// }

// public static void unplaceVertical(char[][] arr, String word, int r, int c, boolean[] visited){
//     for(int i = 0 ; i < word.length(); i++){
//         if(visited[i] == true){
//             arr[r + i][c] = '-';	
//         }
//     }
// }

// public static void placeHorizontal(char[][] arr, String word, int r, int c,boolean[] visited){
//     for(int i = 0 ; i < word.length(); i++){
//         if (arr[r][c + i] == '-') {
//             visited[i] = true;
//         }
//         arr[r][c + i] = word.charAt(i);
//     }
// }

// public static void unplaceHorizontal(char[][] arr, String word, int r, int c, boolean[] visited){
//     for(int i = 0 ; i < word.length(); i++){
//         if(visited[i] == true){
//             arr[r][c + i] = '-';	
//         }
//     }
// }

// public static void print(char[][] arr){
//     for(int i = 0 ; i < arr.length; i++){
//         for(int j = 0 ; j < arr.length; j++){
//             System.out.print(arr[i][j] +  "");
//         }
//         System.out.println();
//     }
    
// }
// }
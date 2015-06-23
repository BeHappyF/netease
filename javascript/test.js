function toBinary(n){
 //Be Ready for Large Numbers. Happy Coding ^_^
 var arr =[];
 var judge = false;
 if(n<0) {
   n = -n;
   judge =true;
 }
 while(n>0) {
    if(n%2) {
     arr.unshift(1);   
    }else{
     arr.unshift(0);
    }
    n = Math.floor(n/2);
   }
 if(judge) {
     for(var j=arr.length-1;j<32;j++) {
       var[j]=0;
     }
   for(var i=0;i<32;i++){
     if(var[i]==1)
       var[i] =0;
     else   var [i] =1;
   }
   if
}
   return arr.join("");
}
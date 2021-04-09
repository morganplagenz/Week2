//each loop has a different variable..I chose that to help you read the code

//question number 6a
var a=0;

while(a<=100){
    if(a % 2 == 0)
        console.log(a);
        a++;
}

//question number 6b...took awhile and a lot of internet crashes, but I got it!

var b=100;

while(b>0 && b<=100){
    console.log(b);
    b -= 3;
}


//question number 6c

var i=2;

for(let i=1; i < 100; i = i +2){
    console.log(i);
}


//question number 6d
console.log("question 6d");

var d=0;

for(let d=0; d<=100; d++){
    if(d % 3 == 0 && d % 5 == 0){ //this expression needs to be on top to locate all numbers divisible by 3 and 5 right away
        console.log("HelloWorld");
    } else if(d % 3 == 0){
        console.log("Hello");
    } else if (d % 5 == 0){
        console.log("World");
    } else {
        console.log(d);
    }
}
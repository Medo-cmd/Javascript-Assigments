//Number.1  find a greater of 2 numbers

let x = 5 ;
let y = 3 ;


if(x > y ){
    document.getElementById('num').innerHTML =(x+ ' is the greater Nummber');
}else if(y > x ){
    document.getElementById('num').innerHTML = (y+ ' is the greater Nummber ') ;
}else{
    document.getElementById('num').innerHTML = ( ' no greater Nummber ') ;
} 

//..............the End..............................................

// Number 2   find if the given num is a positive or Nigative

let w = 5 ;

if(w > 0 ){
    document.getElementById('num1').innerHTML =(w+ ' is a Positve Nummber');
}else if(w==0){
    document.getElementById('num1').innerHTML =( 'Zero ');
}
else{
    document.getElementById('num1').innerHTML = (w+ ' is a Nigative Nummber');
} 
 
//................the end ..................................


/* Number 3  Even or odd Nummber we can know if the result of dividing on the nummber is 0 ex:10/2=5
and we dont have extra nummber only 5*/
let d = 30 ;

if ( d % 2 == 0){
    document.getElementById('num2').innerHTML =(d+ ' is a Even Nummber');
}else{
        document.getElementById('num2').innerHTML =(d+ ' is a odd Nummber');
}


//.................the End ..............................

// Number 4 find the greater of three Numbers 

let a = 10 ;
let b = 3 ;
let c = 5 ;


if(a > b && a > c ){
    document.getElementById('num3').innerHTML =(a+ ' is the greater Nummber');
}else if(b > c && b > a ){
    document.getElementById('num3').innerHTML = (b+ ' is the greater Nummber ') ;
}else if(c > b && c > a ){
    document.getElementById('num3').innerHTML = (c+ ' is the greater Nummber ') ;
}else{
    document.getElementById('num3').innerHTML = ( ' no greater Nummber ') ;
} 

//....................the end ...............................

// Number 5 multiple of 3 ,5 & bothe 


let n = 30;

if ( n % 5 ==0 && n % 3 == 0){
    document.getElementById('num4').innerHTML =(' FIZZ BUZZ');
}else if (n % 3 == 0)
{
    document.getElementById('num4').innerHTML =( 'FIZZ');
}else if (n % 5 == 0)
{
    document.getElementById('num4').innerHTML =('BUZZ');
}else{
    document.getElementById('num4').innerHTML =(n+ ' is not multiple Nummber of the Both 3 or 5');  
}

//.............the End ...............................


 // Number 6  Marks in the Range 10 to 100
let Mark = 10 ;

if(Mark >= 80){
    document.getElementById('mark').innerHTML = ' Excellent  ' ;
}else if(Mark >= 60){
    document.getElementById('mark').innerHTML = ' Well done ' ;
}
else if(Mark >= 40){
    document.getElementById('mark').innerHTML = ' Needs Improvment ' ;
}
else  {
    document.getElementById('mark').innerHTML = ' try some thing else ' ;
}

//................the end .......................................













                                //    CHAPTER # 38 - 42
//                        TASK # 1



// var a = 4;
// var b = 3;

// console.log(a ** b);
// console.log(math.pow(a,b));


//                 TASK # 2

// var i = prompt("Enter the year")
// function Leap (i){
//   if ( (i%100 === 0) ? (i%400 === 0) : (i%4 === 0) );
//   alert("This Year is a Leap Year");
   
// }
// console.log(Leap(i))


//                 TASK # 3


// function triangle (a,b,c){

//     s = (a+b+c)*1/2;

// return s;
// }

// function area(a,b,c) {
//     A = (triangle(a,b,c)*(triangle(a,b,c)-a)*(triangle(a,b,c)-b)*(triangle(a,b,c)-c))
//     document.write(" s is " + " " + triangle(a,b,c) + "<br>")
//     document.write("area of triangle is " + " " + A)

// }

// area(8,4,6)







//                   TASK # 4


// function markrec () {

    
//  var Eng = +prompt("enter marks in english");
//  var urdu = +prompt("enter marks in urdu");
//  var math = +prompt("enter marks in math");

//   var total = Eng+urdu+math
//   document.write("your total marks are " + " " + total + "<br>")

//   return total;
// }


// function average(){
//     avg = markrec()/300;
//     document.write("average is " + " " + avg + "<br>")
//     return avg;
// }



// function percentage (){
//     percent = average()*100;
//     document.write("your percentage is " + " " + percent)
//     return percent;
// }

                    // TASK 5
// var string = "mbzk";

// var a = string.indexOf("z");

// alert(a)


// TASK # 6

// function vowel(){
// var sentence = "the quick brown jumps over the lazy dog";
// var string = ["a" , "e" , "i" , "o" , "u"]

// i=0;
// while(i<sentence.length){
//     if(sentence[i] = string){
//         remove = sentence.replace(/[aeiou]/g,'_');
//     }
//     alert()
//     i++
// }

// }
// vowel("all vowels are removed");




//                     TASK # 8

// var distance = +prompt("enter yor distnace in  kilometer")
// document.write("Your distance in Kilometers is " + " " + distance + "<br>" + "============================" + "<br>")

// function meter(){
//     var  b = distance*1000;
//     document.write("Your distnace in meter is " + " " + b + "<br>")

// }

// meter()


// function feet(){
//     var  c = distance*3820.84;
//     document.write("Your distnace in feet is " + " " + c + "<br>")
// }

// feet()


// function inches(){
//     var  d = distance*39370.1;
//     document.write("Your distnace in inches is " + " " + d + "<br>")

// }

// inches()

// function cm(){
//     var  e = distance*100000;
//     document.write("Your distnace in centimeters is " + " " + e + "<br>")

// }

// cm()

                    // TASK # 09

// var amount = +prompt("enter amount in hundreds")
// document.write("Your amount in Hundreds is " + " " + amount + "<br>" + "========================" + "<br>") 

// function curr10(){
//  var a = amount/10
//  remainder = amount % 100;   
//  document.write("Your amount in tens is " + " " + remainder + "<br>") 

// }

// curr10()

// function curr50 (){
//     var b = remainder/50;
//     remainder1 = remainder % 50;   

//     document.write("Your amount in Fifties is " + " " + remainder1 + "<br>") 

// }+-

// curr50()

            //    TASK # 10

// var salary = +prompt("Enter Your Salary")
// document.write("Your salary is" + " " + salary + "<br>")

// var WorkingHours = +prompt("Enter your working hours") 
// document.write("Your working hours are" + " " + WorkingHours + "<br>")
// function overtime(){
//     if(WorkingHours>40){
       
//         AddHours = WorkingHours - 40 ;

//         document.write("Your additional working hours is" + " " + AddHours + "<br>");
 
//         bonus = AddHours*12;

//         document.write("Your bonus is" + " " + bonus + "<br>");

//         newsalary = bonus + salary;

//         document.write("Your total salary with bonus is" + " " + newsalary)
        
//     }
    
// else{
//     document.write("You weren't work for additional hours" + "<br>")
// }

// }

// overtime()



// function Vowels() {
//     sentence ="the quick brown fox jumps over the lazy dog"
//      var array = ["a", "i", "e", "o", "u"]
//      i = 0
//      while (i < sentence.length) {
//          if (sentence[i] = array) {
//              remove = sentence.replace(/[aeiou]/g, '_');
 
//          }
         
//          i++
//      }
//      alert(remove)
//  }
//  Vowels()







// CHAPTER # 43 - 48

// TASK # 1



// function al(){
//     alert("This is alert");
// }


// TASK # 2

// function mob1(){
//     alert("This is nokia")
// }
// function mob2(){
//     alert("This is samsung")
// }
// function mob3(){
//     alert("This is redmi")
// }
// function mob4(){
//     alert("This is vivo")
// }



// TASK # 4

// function SetNewImage(){
// document.getElementById("img1").src = "mob2.jpg";   
// }


// function SetOldmage(){
//     document.getElementById("img1").src = "mob1.jpg";    


// }





//                    TASK 5

// var counter = 0

// function countInc() {
//     counter++
//     var screenVar = document.getElementById('screen');
//     screenVar.value = counter;
//     // console.log(counter)
// }

// function countDec() {
//     counter--
//     // console.log(counter)
//     if (counter < 0) {
//         counter = 0
//     }
//     var screenVar = document.getElementById('screen');
//     screenVar.value = counter;
// }



          //  ==============================================================
                          //  CHAPTER 49 TO 52


                          // TASK 1
// function formal(){
// var name = document.getElementById("name") 
// var DOB = document.getElementById("DOB") 
// var age = document.getElementById("age") 
//  console.log(name.value)
//  console.log(DOB.value)
//  console.log(age.value)

//  document.write("your name is" + " " + name.value + "<br>")
//  document.write("your DOB is" + " " + DOB.value + "<br>")
//  document.write("your age is" + " " + age.value + "<br>")
// }



                //  TASK 2

// function readmore() {

//     var seemore = document.getElementById("para")
//     seemore.innerHTML = "   price = 30000 </br>    processor = hexacore </br> RAM = 64GB </br> ROM = 16GB </br>   Camera = 40px </br></span> " 

//     return seemore;
// }


// var list = document.getElementById("list")

// function StDetail(){
// var detail = document.getElementById("inp")
 

// // creating li

// var li = document.createElement("li")
// var liText = document.createTextNode(inp.value)
// li.appendChild(liText)






// // creating delete button


// var Delbtn = document.createElement("button")
// var DelbtnText  = document.createTextNode("DELETE")
// Delbtn.setAttribute("onclick","del(this)")
// Delbtn.appendChild(DelbtnText)


// li.appendChild(Delbtn)

// // creating edit button

// var EditBtn = document.createElement("button")
// var EditBtnText = document.createTextNode("EDIT")
// EditBtn.appendChild(EditBtnText)
// EditBtn.setAttribute("onclick","EditDetail(this)")

// li.appendChild(EditBtn)

// list.appendChild(li)

// inp.value = ""


// }
 

// function del(e){
// e.parentNode.remove()
// }


// function DelAll(){
//     list.innerHTML = ""
// }

// function EditDetail (e){

//   var value = prompt("edit your detail",e.parentNode.firstChild.nodeValue)
    
//   e.parentNode.firstChild.nodeValue = value;

// }


 
 // Assign 58-67.1


// var parent = document.getElementById('mainContent')
// console.log(parent.childNodes)

// var render = document.getElementsByClassName("render");

// for (var a = 0; a < render.length; a++) {
//     console.log(render[a].innerHTML)
// }

// function InputValues() {
//     document.getElementById('first-name').value = 'Muhammad';
//     document.getElementById('last-name').value = 'Ahmed';
//     document.getElementById('email').value = 'this@this.com';

// }



//   =======================================================================
                       

                              // CHAPTER # 58 TO 67


var a = document.getElementById('form-content').nodeType;
console.log(a)

var x = document.getElementById('lastName').nodeType;
var y = document.getElementById('lastName').childNodes
var z = document.getElementById('lastName').childNodes.nodeValue = 'Updated'
console.log(x)
console.log(y)
console.log(z)

var z = document.getElementById('main-content')
var a = z.firstChild
var b = z.lastChild
console.log(a)
console.log(b)

var n = document.getElementById('lastName');
var a = n.nextSibling
var b = n.previousSibling;
console.log(b)

var j = document.getElementById('email');
var a = j.nodeType
var b = j.parentNode
console.log(a)
console.log(b)




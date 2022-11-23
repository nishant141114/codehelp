// Importing library and initilizing variables
var hm =  new Map();
const fs =  require("fs");
var unique_id = 0;
var data ="import java.util.*;" + "\n" + "public class Main{" + "\n" + 
"public static void main(String[] args){"  +"\n" 
+ "Scanner sc = new(System.in);" + "\n";


// if array check box is unselected then call  declare  function
// otherwise call array_declaration

/*
// selection sort
unique_id++;
loops(unique_id,"i",0,"n",1,1);
unique_id++;
declare(unique_id,"index",  "int");
unique_id++;
assign(unique_id,"index",  "i");
unique_id++;
loops(unique_id,"i","i+1","n",1,1);
unique_id++;
let k = unique_id;
unique_id++;
condition(k,unique_id,"arr[j]<arr[index]");
unique_id++;
assign(unique_id,"index",  "j");
unique_id++;
declare(unique_id,"smallerNumber",  "int");
unique_id++;
assign(unique_id,  "smallerNumber",  "arr[index]");
unique_id++;
assign(unique_id,  "arr[index]",  "arr[i]");
unique_id++;
assign(unique_id,  "arr[i]",  "smallerNumber");
unique_id++;
/*




/*
// bubble sort
unique_id++;
declare(unique_id, "temp", "int");
unique_id++;
declare(unique_id,  "n",  "int");
unique_id++;
loops(unique_id,"i",0,"n",1,1);
unique_id++;
loops(unique_id,"j",1,"n-i",1,1);
unique_id++;
var t = unique_id;
unique_id++;
condition(t,unique_id,"arr[j-1]>arr[j]");
unique_id++;
assign(unique_id,"temp", "arr[j-1]");
unique_id++;
assign(unique_id,"arr[j-1]", "arr[j]");
unique_id++;
assign(unique_id,"arr[j]", "temp");
unique_id++;
*/



// // insertion sort
// unique_id++;
// declare(unique_id,  "n",  "int");
// unique_id++;
// assign(unique_id,"n", "arr.length");
// unique_id++;
// loops(unique_id,"i",1,"n",1,1);
// unique_id++;
// declare(unique_id,  "key",  "int");
// unique_id++;
// assign(unique_id,"key", "arr[i]");
// unique_id++;
// loops(unique_id,"j","i-1"," 0 && arr[j]>key",-1,1);
// unique_id++;
// assign(unique_id,"arr[j+1]",  "arr[j]");
// unique_id++;
// assign(unique_id,"arr[j+1]",  "key");
// unique_id++;


// //Linear search
// unique_id++;
// array_declare(unique_id,"arr",5,"int");
// unique_id++;
// assign(unique_id,"arr[i]", 10);
// unique_id++;
// assign(unique_id, "arr[i]", 60);
// unique_id++;
// assign(unique_id, "arr[i]", -15);
// unique_id++;
// assign(unique_id, "arr[i]", 13);
// unique_id++;
// assign(unique_id, "arr[i]", 16);

// unique_id++;
// loops(unique_id,"i", 0,"arr.length",  1,1);
//  unique_id++;
//  var k =  unique_id;
// unique_id++;
// condition(k, unique_id,"arr[i] == key");
// unique_id++;
// output(unique_id,"i");
// unique_id++;
// output(unique_id,"-1");













// // bubble sort
// var arr = [1,2,[3,[4,[5,7,8,9]]]]


// //selection sort
// var arr = [[1,2,3,[4,[5,7]],8,9,10,11]];



// // insertion sort
// var arr  =  [1,2,[3,4,5,[6,7],8]]


// // Linear search
// var arr = [1,2,3,4,5,6,[7,[8,10]],11];


var t = getData(arr);
data =  data + t  + "}";
fs.writeFileSync("java_code.txt", data);
//console.log(hm);
// [-1,,1,-1]

//console.log("hello");



function declareJava(id,  variable_name, dtype){
    var content =  dtype + " " + variable_name + " ; ";
   // hm_type.set(id);
    hm.set(id,content);
}

// assignment function
function assignJava(id, variable_name, expression){
    var content =   variable_name + " = " + expression + ";";
    hm.set(id,content);
}

// output function
function outputJava(id, exp){
 hm.set(id, "System.out.println( " + exp + " );" );
}

//input
function inputJava(id, variable_name, data_type){
    var d = "";

    if(data_type == "int"){
        d =   variable_name + " = " + "sc.nextInt();";
      
         }
         else if(data_type == "String"){
          d =   variable_name + " = " + "sc.nextLine();";
      
         }
         else if(data_type == "char"){
          d =  variable_name + " = " + "sc.next().charAt(0);";
         }
         else if(data_type == "double"){
          d =  variable_name + " = " + "sc.nextDouble();";
         }
         else if(data_type == "long"){
          d =  variable_name + " = " + "sc.nextLong();";
          
         }
         
         else if(data_type == "boolean"){
          d =  variable_name + " = " + "sc.nextBoolean();";
          
         }
        
         
         hm.set(id,d);
}

function array_declareJava(unique_id, array_name, size, dtype){
    var  d =  dtype + "[] " + array_name +  " = " + "new " + dtype + "[" + size + "]"  ;
   hm.set(unique_id,d);
}


//loops
function loopsJava(id, i, start, end, direction,  step_by){
    let content = "";
    if(direction<0){
         content =  "for(int "  +  i + " = " + start +"; "  + i  + ">=" + end + "; " +  i + " = " +  i + "-" +  step_by + "){" 
    }
    else{
        content =  "for(int"  + " " + i + " = " + start +"; "  + i  + "<=" + end + "; " +  i + " = " +  i + "+" + step_by + "){"
    }
    hm.set(id, content);
}

function conditionJava(id_if, id_else, exp){
  var data_if =   "if( " + exp + " ){" + "\n";
  var data_else =   "else{" + "\n";
  hm.set(id_if,data_if);   
  hm.set(id_else,data_else);
}





///  
function getData(sequence){
    var d =  "";
  
    for(let i = 0;  i<sequence.length; i++){
        var cont = sequence[i];
        if(Array.isArray(cont) == true){
            let dd = getData(cont);
           d = d +   dd; 
           //console.log("hi");
        }
        else{
           d = d + hm.get(cont)  + "\n";
        }
    }
    d =  d + "}" + "\n";
    return d;
} 


// Importing library and initilizing variables
var hm =  new Map();
const fs =  require("fs");
var unique_id = 0;
var data ="#include <iostream>" + "\n"  +   "using namespace std;"+  "\n" + "int main(){" + "\n";


// if #include array check box is unselected then call  declare  function
// otherwise call array_declaration
/// allowed data types in c++  1) int 2) float 3) double 4) char 5) bool 6) long

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



/*
// insertion sort
unique_id++;
declare(unique_id,  "n",  "int");
unique_id++;
assign(unique_id,"n", "arr.length");
unique_id++;
loops(unique_id,"i",1,"n",1,1);
unique_id++;
declare(unique_id,  "key",  "int");
unique_id++;
assign(unique_id,"key", "arr[i]");
unique_id++;
loops(unique_id,"j","i-1"," 0 && arr[j]>key",-1,1);
unique_id++;
assign(unique_id,"arr[j+1]",  "arr[j]");
unique_id++;
assign(unique_id,"arr[j+1]",  "key");
unique_id++;

*/
// // Linear search
// unique_id++;
// array_declare(unique_id,"arr",5,"int");
// unique_id++;
// assign(unique_id,"arr[0]", 10);
// unique_id++;
// assign(unique_id, "arr[1]", 60);
// unique_id++;
// assign(unique_id, "arr[2]", -15);
// unique_id++;
// assign(unique_id, "arr[3]", 13);
// unique_id++;
// assign(unique_id, "arr[4]", 16);
// unique_id++;
// loops(unique_id,"i", 0,"sizeof(arr)",  1,1);
//  unique_id++;
//  let k  =  unique_id;
// unique_id++;
// condition(k, unique_id,"arr[i] == key");
// unique_id++;
// output(unique_id,"i");
// unique_id++;
// output(unique_id,"-1"); 


// unique_id++;
// loops(unique_id,"i", 0,"10",  1,1);
// unique_id++;
// loops(unique_id,"j", 0,"10",  1,1);
// unique_id++;
// loops(unique_id,"k", 0,"10",  1,1);
// var arr =  [[1,[2,3]]]


// // linear search
// var arr = [1,2,3,4,5,6,[7,[8,10]],11];
//console.log(hm);





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







// bubble sort
var arr = [1,2,[3,[4,[5,7,8,9]]]]

/*
//selection sort
var arr = [[1,2,3,[4,[5,7]],8,9,10,11]];
*/

/*
// insertion sort
var arr  =  [1,2,[3,4,5,[6,7],8]]
*/

var t = getData(arr);
data =  data + t  ;
fs.writeFileSync("c_code.txt", data);



// declare variable function
function declare(id,    variable_name, dtype){
    var content =  dtype + " " + variable_name + " ; ";
    hm.set(id,content);
}

// assignment function
function assign(id, variable_name, expression){
    var content =   variable_name + " = " + expression + ";";
    hm.set(id,content);
}

// output function
function output(id, exp){
 hm.set(id, "cout <<" + exp + " ;" );
}

//taking input from user
function input(id, variable_name){
    var d = "cin >> " + variable_name;
         hm.set(id,d);
}

// 
function array_declare(unique_id, array_name, size, dtype){
    var  d =  dtype  + " " +  array_name +  "[" + size + "]" + ";"  ;
   hm.set(unique_id,d);
}


//loops
function loops(id, i, start, end, direction,  step_by){
    let content = "";
    if(direction<0){
         content =  "for(int "  +  i + " = " + start +"; "  + i  + ">=" + end + "; " +  i + " = " +  i + "-" +  step_by + "){" 
    }
    else{
        content =  "for(int"  + " " + i + " = " + start +"; "  + i  + "<=" + end + "; " +  i + " = " +  i + "+" + step_by + "){"
    }
    hm.set(id, content);
}

function condition(id_if, id_else, exp){
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
           d = d +   getData(cont);
        }
        else{
           d = d + hm.get(cont)  + "\n";
        }
    }
    d =  d + "}" + "\n";
    return d;
} 


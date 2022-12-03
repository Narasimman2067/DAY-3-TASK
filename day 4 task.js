//1.)how to compare two JSON have the same poperties without order?
//a.var obj 1 ={name:"person 1","age:5"};
//b. var obj 2 ={"age:5",name:"person"};
var obj1 ={
    "name":"person 1",
    "age" : 5,
};
var obj2={
    "age" : 5,
    "name":"person 2"
};
if(JSON.stringify(obj1)===JSON.stringify(obj2))
{
console.log("true");
}
else
{
console.log("false");
}

//OUTPUT
//false

//2.)use the same restcountries api url 'https://restcountries.com/v3.1/all' and  print all the names,
//regions,sub-region and population.

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload=function()
{
    var data =request.response;
    var result = JSON.parse(data);
    var res=result.map((ele)=> `(${ele.name.common},${ele.region},${ele.subregion},${ele.population})`);
    console.log(res);
}
//OUTPUT
//250[...]


//3.use the rest counties API URL->'https://restcountries.com/v3.1/all'and display all the countries 
//flags in the console.
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload=function()
{
    var data =request.response;
    var result = JSON.parse(data);
    var res=result.map((ele)=> `(${ele.name.common},${ele.region},
        ${ele.flags.png},${ele.flags.svg})`);
    console.log(res);
}

//OUTPUT :
//250[...]


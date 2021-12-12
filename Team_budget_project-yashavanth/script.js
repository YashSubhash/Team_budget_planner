var aa={}

function addDetails()
{
const b1 = document.getElementById("show")
b1.disabled = false
const b2 = document.getElementById("show1")
b2.disabled = false
var t=parseInt(prompt("Enter the number of product you want to Add"))
for(let i=0;i<t;i++)
{
var a=prompt("Enter your product name")
var b=parseFloat(prompt("enter your product price",10))
b=Number(b)
while (Number.isNaN(b)){
    alert("plase enter the numbers")
    b=parseInt(prompt("Enter your product price"))
}
aa[a]=b


}

//document.write(aa)
console.log(aa)
}


 function checkDetails()
 {
    var sum=0
    
     for(var key in aa)
     {
         sum += aa[key]
     }
     console.log(sum)
  
    
     document.getElementById("disp").innerHTML +=sum;
    
     const c = document.getElementById("show")
        c.disabled = true
    }

function display()
    {
        for(let i in aa){
            document.getElementById("name").innerHTML += i+" ";
            // document.getElementById("name").innerHTML += " ";
            document.getElementById("price").innerHTML += aa[i]+" ";
        }
        const b = document.getElementById("show1")
        b.disabled = true
       
    }
      
    
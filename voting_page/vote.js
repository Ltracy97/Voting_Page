var c1 = 0;
var c2 = 0;
var vic;
function op1()
{
    c1++;
window.alert(c1);
}

function op2()
{
c2++;
window.alert(c2);
}

function result()
{   
    if(c1>c2)
    {
         vic="option1 has won";

    }

    if(c1<c2)
    {
        vic="option2 has won"
    }

    if(c1 === c2)
    {
        vic="tie vote"
    }
    window.alert("option1: "+c1+"\n"+"option2: "+c2+"\n"+"\n"+vic);
}
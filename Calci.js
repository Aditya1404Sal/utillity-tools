document.getElementById("goBack").addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5500/index.html";
});

let value = "0";

document.getElementById("one").addEventListener("click",function(){
    value += "1";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("two").addEventListener("click",function(){
    value += "2";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("three").addEventListener("click",function(){
    value += "3";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("four").addEventListener("click",function(){
    value += "4";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("five").addEventListener("click",function(){
    value += "5";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("six").addEventListener("click",function(){
    value += "6";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("seven").addEventListener("click",function(){
    value += "7";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("eight").addEventListener("click",function(){
    value += "8";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("nine").addEventListener("click",function(){
    value += "9";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("zero").addEventListener("click",function(){
    value += "0";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("plus").addEventListener("click",function(){
    value += "+";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("minus").addEventListener("click",function(){
    value += "-";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("prod").addEventListener("click",function(){
    value += "*";
    document.getElementById("display").innerHTML = value;
});

document.getElementById("divide").addEventListener("click",function(){
    value += "/";
    document.getElementById("display").innerHTML = value;
});


document.getElementById("equals").addEventListener("click",function(){
    let result = math.evaluate(value);
    value = result.toString();
    document.getElementById("display").innerHTML = value;
});

document.getElementById("clearDis").addEventListener("click",function(){
    value = "0";
    document.getElementById("display").innerHTML = value;
});




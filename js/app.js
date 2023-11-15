function even_odd(){
    let num = document.getElementById('grade').value;

    let result;

    if(num%2===0){
        result="The number is even";
    }
    else{
        result="The number is odd";
    }

    document.getElementById('result').innerText = ` ${result} `;
}
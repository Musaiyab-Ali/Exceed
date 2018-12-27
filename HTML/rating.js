let total = Number(0);
let count = 1;

function showAverage(){
    let inputted = document.getElementById('uRating').value;

    if (inputted < 0 || inputted > 5){
        document.getElementById('show').innerHTML = "Invalid Input";
    }
    else{
        total += Number(inputted);
        let average = total / count;

        document.getElementById("show").innerHTML = "Average: " + average.toFixed(2);
        document.getElementById('total').innerHTML = "Total: " + total;
        document.getElementById('count').innerHTML = "Count: " + String(count);

        count += 1;
    }
}

function reset(){
    total = 0;
    count = 1;
}

let total = Number(0);
let count = 0;

var map1 = new Map([ ["str1", 0],["str2", 0],["str3", 0],["str4", 0]["str5", 0]]);

let ctx = document.getElementById('myChart');

function addFive(){
    total += 5;
    count += 1;
    map1["str5"] += 1;
    document.getElementById("test").innerHTML = average();
}

function addFour(){
    total += 4;
    count += 1;
    map1["str4"] += 1;
    document.getElementById('test').innerHTML = average();
}

function addThree(){
    total += 3;
    count += 1;
    map1["str3"] += 1;
    document.getElementById("test").innerHTML = average();
}

function addTwo(){
    total += 2;
    count += 1;
    map1["str2"] += 1;
    document.getElementById("test").innerHTML = average();
}

function addOne(){
    total += 1;
    count += 1;
    map1["str1"] += 1;
    document.getElementById("test").innerHTML = average();
}

function average(){
    let average = total / count;
    document.getElementById('average').innerHTML = "Average: " + average;
}



data = {
    datasets: [{
        data: [2,3,5,2,3]
    }],
    labels: [
        'Red',
        'Orange',
        'Green',
        'Blue',
        'Yellow'
    ]
};

let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

console.log(map1);
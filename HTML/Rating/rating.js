let total = Number(0);
let count = 0;

let map1 = {
    "str5" : 20,
    "str4" : 24,
    "str3" : 33,
    "str2" : 13,
    "str1" : 32,
};

function addFive(){
    total += 5;
    count += 1;
    map1["str5"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    chart.update();
}

function addFour(){
    total += 4;
    count += 1;
    map1["str4"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    chart.update();
}

function addThree(){
    total += 3;
    count += 1;
    map1["str3"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    chart.update();
}

function addTwo(){
    total += 2;
    count += 1;
    map1["str2"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    chart.update();
}

function addOne(){
    total += 1;
    count += 1;
    map1["str1"] += 1;
    document.getElementById('average').innerHTML = "Average: " + average();
    chart.update();
}

function average(){
    let average = total / count;
    return average.toFixed(2);
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

console.log(map1['str5']);
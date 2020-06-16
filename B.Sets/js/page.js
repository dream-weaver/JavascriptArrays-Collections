// Accessing the objects
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

// Values from the form
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('hiking');
let huntingRadio = document.getElementById('hunting');

let yearlyTotal = 0;

hikingRadio.checked = true;

let hiking = { category:'Hiking' };
let running = { category:'running' };
let hunting = { category:'Hunting' };

const monthlySales = new Set();
const monthlyLabels = new Set();
const categories = new WeakSet();


function addSale() {
    
    monthlySales.add(parseInt(newAmount.value));
    monthlyLabels.add(newMonth.value);

    yearlyTotal = 0;
    monthlySalesChart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    })

    for (let amount of monthlySales){
        yearlyTotal += amount;
        yearlyLabel.innerHTML = yearlyTotal;

        monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount);
        })
    }

    monthlySalesChart.data.labels = Array.from(monthlyLabels);
    monthlySalesChart.update();

    if (hikingRadio.checked){
        categories.add(hiking);
    }else if (runningRadio.checked){
        categories.add(running);
    }else if(huntingRadio.checked){
        categories.add(hunting);
    }else{
        // do something else
    }

    console.log(categories);
}

function deleteSales(){
    //
 }

function addTotalSales(){
	
}

//Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: [],
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
        
//     }
// })
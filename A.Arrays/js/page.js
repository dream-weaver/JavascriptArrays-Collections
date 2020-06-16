// Charts 
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyTotalLabel = document.getElementById('yearlyTotal');


let monthlySales = Array.of(500, 9000, 300);
let monthlySalesLabel = Array.of('Oct','Nov','Dec');

let deptSales = Array.of(12, 9, 3);
let deptSalesLabel = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0;
function addYearlyTotal(x){
    return yearlyTotal += x;
}

monthlySales.forEach(addYearlyTotal);
yearlyTotalLabel.innerHTML = "$" + yearlyTotal;

function findOver1000(){
    let firstThousand = monthlySales.find(e => e > 1000);
    alert("Greater than thousand: " + "$" + firstThousand);
}

function resetNum(){
    monthlySales.fill(0);
    monthlySalesChart.update();
}
//Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlySalesLabel,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
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

//Bar chart
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptSalesLabel,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {    
    }
});
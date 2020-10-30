// === ALERT === //
const alertBanner = document.getElementById('alert');

// content into DOM
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p class="alert-banner-text"><strong class="alertB">ATTENTION: </strong> You have 10 new messages. Don't forget to read and reply them. Don't let your collegues waiting!</p>
        <p><strong class="alert-banner-close">X</strong></p> 
    </div> 
`
// Event handler to the close button
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')){
        alertBanner.style.display ='none'
    }
    }
);


// === CHART WIDGETS === //

// outline
const trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: '#e2e3f6',
        pointBackgroundColor: '#fff',
        borderWidth: 1,
    }]
};

// chart options
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {duration: 0},
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },

    legend: {
        display: false
    }
};

// the chart itself
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData, 
    options: trafficOptions,
});


console.log();
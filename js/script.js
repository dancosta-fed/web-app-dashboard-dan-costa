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

// ========== Traffic Canvas ========== //

// outline Traffic Canvas
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

// ========== Bar Graph ========== //

// Outline bar graph
const dailyCanvas = document.getElementById('daily-chart');
let dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477bf',
        borderWidth: 1,
    }]
};

// Chart options
let dailyOptions = {
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

// The chart itself
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData, 
    options: dailyOptions
});

// ========== Doughnut Chart ========== //

// Outline Doughnut Chart
const mobileCanvas = document.getElementById('mobile-chart');
let mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        backgroundColor: [
            '#7477bf',
            '#78CF82',
            '#51b6c8'
        ],
        borderWidth: 0,
    }]
};

// chart options
let mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};

// The chart itself
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData, 
    options: mobileOptions
});

console.log(mobileChart);
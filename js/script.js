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

// outline Traffic Canvas | WEEKLY
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ['16-32', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: '#e2e3f6',
        pointBackgroundColor: '#fff',
        borderWidth: 1,
    }]
};


// HOURLY
let trafficDataHourly = {
    labels: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    datasets: [{
        data: [100, 450, 250, 200, 600, 150, 500, 300, 250, 550, 700, 400],
        backgroundColor: '#e2e3f6',
        pointBackgroundColor: '#fff',
        borderWidth: 1,
    }]
};

// DAILY
let trafficDataDaily = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        data: [10, 40, 55, 30, 50, 20, 45, 50, 15],
        backgroundColor: '#e2e3f6',
        pointBackgroundColor: '#fff',
        borderWidth: 1,
    }]
};

// MONTHLY
let trafficDataMonthly = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        data: [50, 30, 35, 65, 80, 40, 70, 30, 25, 55, 70, 40, 50, 90],
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
    data: trafficData, trafficDataHourly, trafficDataDaily, trafficDataMonthly,  
    options: trafficOptions,
});


console.log();


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

// ========== Messaging ========== //

    //Storing the form fields
    const user = document.getElementById('userField');
    const message = document.getElementById('messageField');
    const send = document.getElementById('btn');

    //Click event listener on send
    send.addEventListener('click', () => {

        // conditional to make sure the user and message fields are not empty
        if (user.value === '' && message.value === '') {
            alert('Please, fill out user and message fields before sending');
        } else if (user.value === '') {
            alert('Please fill out the user field before sending');
        } else if(message.value === '') {
            alert('Please fill out the message field before sending');
        } else {
            alert(`Message has been succesfully sent to ${user.value}`);
        }
    });
// === ALERT === //
const alertBanner = document.getElementById('alert');

// content into DOM
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p class="alert-banner-text"><strong class="alertB">ATTENTION: </strong> You have 4 new messages. Don't forget to read and reply them. Don't let your collegues waiting!</p>
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

  // BELL NOTIFICATIONS

  const bell = document.querySelector('.bell');
  const bellNotification = document.querySelector('.notification-bell');
  const ulNotification = document.querySelector('ul');
  const itemNotification = document.getElementsByClassName('deleteNotification');
  
  ulNotification.innerHTML = `<li> 
    <p>You have 4 unread message</p>
    <p class="deleteNotification">x</p>
    </li>
    <li>
    <p>We have tried to contact you...</p>
    <p class="deleteNotification">x</p>
    </li>
    <li>
    <p>You need an upgrade</p>
    <p class="deleteNotification">x</p>
    </li>
    <li>
    <p>You have 1 new Job Offer</p>
    <p class="deleteNotification">x</p>
    </li>`


    // Hiding notifications Before
    function hideNotifications() {
        ulNotification.style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', hideNotifications());
    
    // Loading notifications if the bell is clicked
    bell.addEventListener('click', () => {
        if (ulNotification.style.display = 'none') {
            ulNotification.style.display = 'block';
        }
    });

    // deleting notifications

    for (let i = 0; i < itemNotification.length; i++) {
        itemNotification[i].addEventListener('click', (e) => {
            if (e.target.tagName === 'P') {
                e.target.parentNode.remove();
            }

            if (ulNotification.children.length < 1) {
                bellNotification.style.display = 'none';
            }

        });
    }

// === CHART WIDGETS === //

// ========== Traffic Canvas ========== //


//Function that activates the links
const activateClass = clicked => {
    const trafficLinks = document.querySelectorAll('.traffic-nav li');
    trafficLinks.forEach(trafficLink => {
      if(trafficLink === clicked) {
        trafficLink.classList.add('activate');
      } else {
        trafficLink.classList.remove('activate');
      }
    });
  };

// Chart
function activate_chart (labels, data){
   
  let trafficCanvas = document.getElementById('traffic-chart');
  let trafficData = {
      labels: labels,
      datasets: [{
      data: data,
      backgroundColor: '#8f92d6',
      borderWidth: 2,
      borderColor: '#fff',
      
      
    }]
  };

    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
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

    //Chart itself
   
    let trafficChart = new Chart (trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
}

// HOURLY
const data = [3, 7, 12, 19, 9, 1, 8, 10, 15, 12, 18]
const labels= ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

activate_chart(labels,data)

    const hourly = document.getElementById('hourly');
    hourly.addEventListener('click', e => {
        activate_chart(labels,data);
        activateClass(e.target);
    });


// DAILY
const daily = document.getElementById('daily');
daily.addEventListener('click', e => {
    const dailyLabel = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];
    const dailyData = [10, 7, 9, 23, 19, 23, 8];
    activate_chart(dailyLabel, dailyData);
    activateClass(e.target);
});

// WEEKLY
const weekly = document.getElementById('weekly');
weekly.addEventListener('click', e => {
    const weeklyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
    const weeklyLabel = ['16-32', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    activate_chart(weeklyLabel, weeklyData);
    activateClass(e.target);
});

// MONTHLY
const monthly = document.getElementById('monthly');
monthly.addEventListener('click', e => {
    const monthlyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3200];
    const monthlyLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    activate_chart(monthlyLabel, monthlyData);
    activateClass(e.target);
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

    // Autocomplete search
    // * --- using a jQuery. The source: https://jqueryui.com/autocomplete --- *// 

    $(function() {
        var membersNames = [
          "Mel Chambers",
          "Dale Byrd",
          "Mark Mcloving",
          "Dan Costa"
        ];
        $( "#userField" ).autocomplete({
          source: membersNames
        });

      } );

// ========== Messaging ========== //

//LOCAL STORAGE

  const emailNotification = document.getElementById('emailNotification');
  const profileToPublic = document.getElementById('profileToPublic');
  const timezone = document.getElementById('timezone');
  const saveBtn = document.querySelector('.saveBtn');
  const cancelBtn = document.querySelector('.cancelBtn');

// See if local storage is available to use

function testStorage() {
    const test = 'test';
       try {
         localStorage.setItem(test, test);
         localStorage.removeItem(test);
         return true;
       } catch(e) {
         return false;
     }
   }

   // Validates if the settings are set
const loadSettings = function() {
    if (emailNotification !== 'false') {
        emailNotification.checked = (emailNotification === 'true');
    }
    if (profileToPublic !== 'false') {
        profileToPublic.checked = (profileToPublic === 'true');
    }
    if (timezone !== 'false') {
        select.value = localStorage.getItem('timezone'); 
    }
};

console.log(loadSettings);

   if(testStorage() === true){ 

    // Setting the Save Button to save the users choice
        saveBtn.addEventListener('click', () => {
            // creating Items
                localStorage.setItem('emailNotification', emailNotification.checked);
                localStorage.setItem('profileToPublic', profileToPublic.checked);
                
                selectedTZone = timezone.options[timezone.selectedIndex].value;
            // creating Items    
                localStorage.setItem('timezone', selectedTZone);

                // changes alert
                alert("You're settings are successfully saved!");
        });
   
 

        // Setting the Cancel Button to go back to default
        cancelBtn.addEventListener('click', () => {
            const cancel = confirm("Click 'OK' to cancel changes!");

            if (cancel) {
                localStorage.setItem('emailNotification', emailNotification.checked = false);
                localStorage.setItem('profileToPublic', profileToPublic.checked = false);
                localStorage.setItem('timezone', timezone.selectedIndex = timezone.options[0].value);
            }
        });

}


    
const data = {
    labels: ['Oct,2023', 'Nov,2023', 'Dec,2023','Jan,2024','Feb,2024','Mar,2024'],
    datasets: [{
        label: 'Blood Pressure',
        data: [180, 160, 140, 120, 100,80], // Example data points
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Configuration options
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Blood Pressure (mmHg)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: ''
            }
        }
    }
};

// Render the chart
const ctx = document.getElementById('bloodPressureChart').getContext('2d');
const bloodPressureChart = new Chart(ctx, config);

// url='TEST.json' 
// d3.json(url).then(data => {
//     console.log(data)
// }); 

d3.json("2018AMAZON.json").then( data => {
    const tickers =data.map( record => record.ticker);
    const revenue= data.map(record=> (record.Revenue/100000));
    const sector= data.map(record=> record.Sector);
    console.log(tickers)
    console.log(revenue)
    console.log(sector)
//});


//chart.js pie
    // var Chart = require('Test.js');
    var ctx = document.getElementById('myChart').getContext('2d');
    const chart= new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: tickers,
            datasets: [
                {
                    label: tickers,
                    data: revenue,
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Revenue in 2018'
            },
            events: ['click'],
            onClick : function (item) {
                var activePoints = chart.getElementsAtEvent(item);
                console.log(activePoints);
                var tickerSelected= (activePoints.map(record => record._model.label));
                console.log(tickerSelected)   
                return window.open(`https://finance.yahoo.com/quote/${tickerSelected}?p=${tickerSelected}&.tsrc=fin-srch.com/bar`);
              //console.log(item)
                },
        },
        animation: {
            animateRotate: true,
            duration: 90000000
        }
        //labels: record.ticker

    });
    console.log(tickers)
});


// Uncomment to style it like Apple Watch
/*
if (!Highcharts.theme) {
    Highcharts.setOptions({
        chart: {
            backgroundColor: 'black'
        },
        colors: ['#F62366', '#9DFF02', '#0CCDD6'],
        title: {
            style: {
                color: 'silver'
            }
        },
        tooltip: {
            style: {
                color: 'silver'
            }
        }
    });
}
// */

/**
 * In the chart render event, add icons on top of the circular shapes
 */
(function () {
    function renderIcons() {



        // Stand icon

    }

    Highcharts.setOptions({
        colors: ['#E74C3C', '#E74C3C']
    });

    Highcharts.chart('container1', {
        chart: {
            type: 'solidgauge',
            height: '100%',
            events: {
                render: renderIcons
            }
        },
        credits: {
            enabled: false
        },

        title: {
            text: 'Activity',
            style: {
                fontSize: '24px',
                display: 'none'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '<p style="font-size:16px; color: black; font-weight: bold;">{point.y}%</p><br><span style="font-size: 10px;color: #28313C;">Overall</span><br><span style="font-size: 10px;color: #28313C;">Accuracy</span></div>',
            positioner: function () {
                return {
                    x: 80,
                    y: 80
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Stand
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                    .setOpacity(0.7)
                    .get(),
                borderWidth: 0
        }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: 'Overall Accuracy',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '112%',
                innerRadius: '88%',
                y: 32
        }]
    }]
    });

})();

//Chart2

(function () {
    function renderIcons() {



        // Stand icon

    }

    Highcharts.setOptions({
        colors: ['#F7941D', '#F7941D']
    });

    Highcharts.chart('container2', {
        chart: {
            type: 'solidgauge',
            height: '100%',
            events: {
                render: renderIcons
            }
        },

        title: {
            text: 'Activity',
            style: {
                fontSize: '24px',
                display: 'none'
            }
        },
        credits: {
            enabled: false
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            pointFormat: '<p style="font-size:16px; color: black; font-weight: bold;">{point.y}%</p><br><span style="font-size: 10px;color: #28313C;">Overall</span><br><span style="font-size: 10px;color: #28313C;">Accuracy</span></div>',
            positioner: function () {
                return {
                    x: 80,
                    y: 80
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Stand
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                    .setOpacity(0.7)
                    .get(),
                borderWidth: 0
        }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: 'Overall Accuracy',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '112%',
                innerRadius: '88%',
                y: 58
        }]
    }]
    });

})()

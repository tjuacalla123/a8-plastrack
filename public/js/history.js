
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	// get data from localStorage
	var dataset = JSON.parse(localStorage.getItem("data"));
	if (dataset != null) {
		// datasets
		var statsToday = lastXDays(dataset, 0);
		var stats7days = lastXDays(dataset, 7);
		var stats30days = lastXDays(dataset, 30);
		// plastic day by day 
		var last7line = parseProgress(stats7days[1]);
		var last30line = parseProgress(stats30days[1]);
		
		// plastic frequency
		var todayplastic = parseDict(statsToday[0]);
		var plastic7 = parseDict(stats7days[0]);
		var plastic30 = parseDict(stats30days[0]);
		
		$("#today").click(function() {
			$("#linegraph").data("chart").destroy();$("#linegraph1").data("chart").destroy();
			$("#linegraph").remove();$("#linegraph1").remove();
			$(".graphs").append("<canvas id = linegraph></canvas>");$(".graphs").append("<canvas id = linegraph1></canvas>");
			
			lineChart(todayplastic, 'bar', "#linegraph");
			lineChart([["small", "medium", "large"], pieC], 'pie', "#linegraph1");
			
			var sizetotals = statsToday[2];
			$("#small").html(sizetotals[0]);
			$("#medium").html(sizetotals[1]);
			$("#large").html(sizetotals[2]);
			$("#all").html(sizetotals[3]);
		})
		
		$("#week").click(function() {
			$("#linegraph").data("chart").destroy();$("#linegraph1").data("chart").destroy();
			$("#linegraph").remove();$("#linegraph1").remove();
			$(".graphs").append("<canvas id = linegraph></canvas>");$(".graphs").append("<canvas id = linegraph1></canvas>");
			lineChart(plastic7, 'bar', "#linegraph");
			lineChart(last7line, 'line', "#linegraph1");
			
			var sizetotals = stats7days[2];
			$("#small").html(sizetotals[0]);
			$("#medium").html(sizetotals[1]);
			$("#large").html(sizetotals[2]);
			$("#all").html(sizetotals[3]);
		})
		
		$("#month").click(function() {
			$("#linegraph").data("chart").destroy();$("#linegraph1").data("chart").destroy();
			$("#linegraph").remove();$("#linegraph1").remove();
			$(".graphs").append("<canvas id = linegraph></canvas>");$(".graphs").append("<canvas id = linegraph1></canvas>");
			
			lineChart(plastic30, 'bar', "#linegraph");
			lineChart(last30line, 'line', "#linegraph1");
			
			var sizetotals = stats30days[2];
			$("#small").html(sizetotals[0]);
			$("#medium").html(sizetotals[1]);
			$("#large").html(sizetotals[2]);
			$("#all").html(sizetotals[3]);
		})
		
		lineChart(todayplastic, 'bar', "#linegraph");
		
		var sizetotals = statsToday[2];
		$("#small").html(sizetotals[0]);
		$("#medium").html(sizetotals[1]);
		$("#large").html(sizetotals[2]);
		$("#all").html(sizetotals[3]);
		var pieC = statsToday[2].slice();
		pieC.pop();
		lineChart([["small", "medium", "large"], pieC], 'pie', "#linegraph1");
	}
	
})

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function lineChart(data, chartType, location) {
	var labels, xlab, ylab, points, textG;
	var displayed = true;
	var colors = [];
	for (var i = 0; i < data[0].length; i++) {
		var x = getRandomColor()
		colors.push(getRandomColor());
	}
	if (chartType == "bar") {
		textG = "Log Frequency of Each Plastic Type"
		labels = "Plastic Types";
		xlab = "Plastic Type";
		ylab = "Frequency"
	}
	else if (chartType == "line") {
		colors = getRandomColor();
		textG = "Total Plastics Over Time"
		xlab = "Date";
		ylab = "Total Amount of Plastics"
		labels = "Total Plastics";
	}
	else {
		textG = "Plastics by Size"
		displayed = false;	
	}
	
	
	var chart = $(location);
	var barChart = new Chart(chart, {
		type: chartType,
		data: {
			labels: data[0],
			datasets: [{
				label: labels,
				data: data[1],
				backgroundColor: colors,
				borderWidth: 1,
			}]
		},
		options: {
			title: {
				display: true,
				text: textG
			},
			responsive: true,
      maintainAspectRatio: false,
			layout: {
				padding: 0
			},
			scales: {
				yAxes: [{
					scaleLabel: {
						display: displayed,
						labelString: ylab
					},
	        ticks: {
	            min: 0,
	            stepSize: 5
	        }
	    	}],
				xAxes: [{
					scaleLabel: {
							display: displayed,
							labelString: xlab
					}
				}]
			}
		},
	});
	$(location).data("chart", barChart);
}

// totals for each plastic, totals for each date, totals for each size 
function lastXDays(dataset, days) { 
	var statsX = {};
	var totals = {};
	var sizetotals = [];
	var allData = dataset;
	var smallcount = 0;	var mediumcount = 0;	var largecount = 0;
	for (date in allData) {
		
		var dateToday = moment().format("DD/MM/YYYY");
		var lastx = moment(dateToday, "DD/MM/YYYY").subtract(days, 'days');
		if (lastx.isSameOrBefore(date)) {
			var logDate = allData[date]
			var datecount = 0;
			for (log in logDate) {
				var allLogs = logDate[log];
				for (session in allLogs) {
					var plastic = allLogs[session];
					var keyName = plastic["name"]; 
					var val = statsX[keyName];
					if (val == undefined) {
						statsX[keyName] = [plastic["count"], plastic["size"]]
					}
					else {
						statsX[keyName][0] += plastic["count"];
					}
					
					if (plastic["size"] == "small") {smallcount += plastic["count"];}
					else if (plastic["size"] == "medium") {mediumcount += plastic["count"];}
					else {largecount += plastic["count"];}
					datecount += plastic["count"];
				}
			}
			totals[date] = datecount;
		}
		else {continue;}
	}
	var totalplastics = smallcount + mediumcount + largecount;
	var sizetotals = [smallcount, mediumcount, largecount, totalplastics];
	return [statsX, totals, sizetotals];
}

function parseDict(dict) {
	var items = Object.keys(dict).map(function(key) {return [key, dict[key]];});
	items.sort(function(first, second) {return second[1][0] - first[1][0];});
	var name = items.map(function(val) {return val[0];});
	var count = items.map(function(val) {return val[1][0];});
	var size = items.map(function(val) {return val[1][1];});
	return [name, count, size];
}

function parseProgress(data) {
	var dateList = [];
	var amountList = [];
	for (date in data) {
		dateList.push(moment(date).format("MM/DD/YYYY"));
		amountList.push(data[date]);
	}
	return [dateList, amountList];
}

//average percent change from baseline
var averageData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [25.93, 40.35, 74.41, 48.95, 22.98, 13.69],
    name: 'Average percent change from baseline',
    type: 'bar',
}];
   
var average_layout = {
    title: 'Average percent change from baseline',
};
  
Plotly.newPlot('average', averageData, average_layout);

//minimum percent change from baseline
var minData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [-45, -35, -44, -40, -74, 2],
    name: 'Minimum percent change from baseline',
    type: 'bar',
}];
   
var min_layout = {
    title: 'Minimum percent change from baseline',
};
  
Plotly.newPlot('min', minData, min_layout);

//maximum percent change from baseline
var maxData = [{
    x: ['Retail and Recreation', 'Grocery and Pharmacy', 'Parks', 'Transit Stations', 'Workplaces', 'Residential'],
    y: [108, 102, 244, 341, 110, 35],
    name: 'Maximum percent change from baseline',
    type: 'bar',
}];
   
var max_layout = {
    title: 'Maximum percent change from baseline',
};
  
Plotly.newPlot('max', maxData, max_layout);
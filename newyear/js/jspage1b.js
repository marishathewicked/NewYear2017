var canvas = document.getElementById('bezier');
var context = canvas.getContext('2d');
var formula = {};

formula.getPointOnLine = function(shift,points){
    return [
        (points[1][0] - points[0][0]) * (shift / 100) + points[0][0],
        (points[1][1] - points[0][1]) * (shift / 100) + points[0][1]
    ];
};

formula.getPointOnCurve = function(shift,points){
    if(points.length == 2){
        return this.getPointOnLine(shift,points);
    }
    var pointsPP = [];
    for(var i = 1;i < points.length;i++){
        pointsPP.push(this.getPointOnLine(shift,[
            points[i - 1],
            points[i]
        ]));
    }
    return this.getPointOnCurve(shift,pointsPP);
};

var points = [
        [10,50],
        [40,-40],
        [190,180],
        [40,-60],
        [80,130],
        [10,50]
];

var shift = 0;
var step = 1;

var timer = setInterval(function(){
    context.beginPath();

    context.moveTo(points[0][0],points[0][1]);

    if(shift > 100){
        shift = 100;
    }

    for(var i = 0;i <= shift;i += step){
        var coord = formula.getPointOnCurve(i,points);
        context.lineTo(coord[0],coord[1]);
    }
    context.stroke();
    context.closePath();

    if(shift <= 100){
        shift += step;
    }
},25)

 [0; 6],
  [-2; 6], 
  [-3; 8], 
  [-4; 9], 
  [-6; 9], 
  [-7; 8],
  [-8; 7], 
  [-9; 6], 
  [-9; 4], 
  [-8; 2], 
  [-6; 0], 
  [-4; -2], 
  [-2; -4], 
  [0; -5], 
  [2; -4], 
  [4; -2],
  [6; 0], 
  [8; 2], 
  [9; 4], 
  [9; 6], 
  [7; 8], 
  [6; 9], 
  [4; 9], 
  [3; 8], 
  [2; 7], 
  [0; 6],

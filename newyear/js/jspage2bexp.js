var canvas = document.getElementById('bezier1');
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
        [1014,409],
        [111,172],
        [168,9],
        [340,102],
                 
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


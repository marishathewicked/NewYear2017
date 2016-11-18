//http://www.w3schools.com/tags/ref_canvas.asp
var canvas = document.getElementById('bezier1');
var context = canvas.getContext('2d');
var formula = {};

formula.getPoint = function(a,z){
    return [
      (z[1][0] - z[0][0]) * (a / 100) + z[0][0],
        (z[1][1] - z[0][1]) * (a / 100) + z[0][1]
    ];
};

formula.getPointOnCurve = function(a,z){
    if(z.length == 2){
        return this.getPoint(a,z);
    }
 var pointsPP = [];
    for(var i = 1;i < z.length;i++){
        pointsPP.push(this.getPoint(a,[
            z[i - 1],
            z[i]
        ]));
      
    }
    return this.getPointOnCurve(a,pointsPP);
};

var z = [    
        [1014,409],
        [111,172],
        [168,9],
        [340,102],
                 
]; 

var a = 0;
var t = 1;

var timer = setInterval(function(){
    context.beginPath();

    context.moveTo(z[0][0],z[0][1]);

    if(a > 100){
        a = 100;
    }

    for(var i = 0;i <= a;i += t){
        var coord = formula.getPointOnCurve(i,z);
        context.lineTo(coord[0],coord[1]);
    }
    
    context.stroke();
    context.strokeStyle = "red";
    context.lineWidth = 7;
    context.closePath();
    context.lineCap="round";
    
    if(a <= 100){
        a += t;
    }
},25)


  var w = canv.width = window.innerWidth,
        h = canv.height = window.innerHeight,
        ctx = canv.getContext('2d'),

    sum = w,
    colors = [i],
    dots = [i],
    dotsV = [i];

var part = 360/w;
for(var i = 0; i < w; ++i){
  colors[i] = part * i;
  dots[i] = h;
  dotsV[i] = 10;
}

function animate(){
  window.requestAnimationFrame(animate);
  
  ctx.fillStyle = 'rgba(0, 0, 0, .05)';
  ctx.fillRect(0, 0, w, h);
  
  for(var i = 0; i < sum; ++i){
    var axis = dots[i] - 1;
    dots[i] += dotsV[i] += .05;
    
    ctx.fillStyle = "#FFFAFA";
    ctx.fillRect(w/sum * i, axis, w/sum, dotsV[i] + 1);  
    
    if(dots[i] > h && Math.random() < .002){
      dots[i] = dotsV[i] = 0;
    }
  }
}

animate();

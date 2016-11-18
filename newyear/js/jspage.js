function linkClass()
    {   		
		var elem = document.getElementById("delstart");
          elem.parentNode.removeChild(elem);
          
          
 	  var elm = document.getElementById("styler_class");
 		if(elm)
 		{
 			if(elm.className == "imagemain")
 				elm.className = "imagemain2";
 			else
 				elm.className = "imagemain2";
 		}
        
      var element = document.createElement('div');
          element.innerHTML = ' ', element.id = 'newdiv';
          document.body.appendChild(element);
          


    }

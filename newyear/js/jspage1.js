function linkClass()
    {   		
		var elem = document.getElementById("delstart1");
          elem.parentNode.removeChild(elem);
          
          var elem = document.getElementById("delstart2");
          elem.parentNode.removeChild(elem);
          
          var elem = document.getElementById("delstart3");
          elem.parentNode.removeChild(elem);
          
          var elem = document.getElementById("delstart4");
          elem.parentNode.removeChild(elem);
          
          
          
 	  var elm = document.getElementById("styler_class");
 		if(elm)
 		{
 			if(elm.className == "maincont")
 				elm.className = "maincont2";
 			else
 				elm.className = "maincont2";
 		}
        
      var element = document.createElement('div');
          element.innerHTML = ' ', element.id = 'newdiv';
          document.body.appendChild(element);
          


    }

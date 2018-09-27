



function addHotel(){
    var hotel = document.getElementById("hotel").value;
    
    /*Row creation for new hotel*/
    var row = document.createElement("div");
    row.setAttribute("class","row row-hotel");
    row.setAttribute("id",hotel + "-row");
	
    /*Text creation for new hotel*/
	var hotel_text = document.createElement("span");
	hotel_text.setAttribute("id",hotel);
	hotel_text.setAttribute("style","float: left; padding-top: 4%");
	var node = document.createTextNode(hotel);
	hotel_text.appendChild(node);

	/*Delete button for new hotel*/
	var button = document.createElement("BUTTON");
	button.onclick = function() {
						var element = document.getElementById(hotel);
						element.parentNode.removeChild(element);
						var element = document.getElementById(hotel+"-btn");
						element.parentNode.removeChild(element);
						var element = document.getElementById(hotel+"-row");
						element.parentNode.removeChild(element);
					}
	button.setAttribute("class", "btn btn-default");
	button.setAttribute("id", hotel + "-btn");
	button.setAttribute("style", "color: red;")
	button.innerHTML = 'X';

	/*Column formatting for button and text*/
	var col1 = document.createElement("div");
    col1.setAttribute("class","col-md-1 col-md-offset-5");
    col1.appendChild(button);
    var col2 = document.createElement("div");
    col2.setAttribute("class","col-md-2");
    col2.appendChild(hotel_text)


    /*Linking elements*/
	var element = document.getElementById("hotel-display");
	element.appendChild(row);
	row.appendChild(col1);
	row.appendChild(col2);
	
}
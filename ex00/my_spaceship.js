function my_spaceship(str){
    strUpper = str.toUpperCase();
    
    rotation=["up", "down", "left", "up", "right", "down", "left"];
    index = 3;
    x = 0;
    y = 0;
    output = "";
    
	for(i=0;i<strUpper.length;i++){
	    while(strUpper[i]!="R"&&strUpper[i]!="L"&&strUpper[i]!="A"){
	        console.log("invalid");
	    }
	    if(strUpper[i] == "A" && index == 3){
	        y--;
	    }else if(strUpper[i] == "R"){
	        rotation[index];
	        index++;;
	    }else if(strUpper[i] == "L"){
	        rotation[index];
	        index--;
	    }else if(strUpper[i] == "A" && rotation[index] == "right"){
	        x++;
	    }else if(strUpper[i] == "A" && rotation[index] == "down"){
	        y++;
	    }else if(strUpper[i] == "A" && rotation[index] == "left"){
	        x--;
	    }else if(strUpper[i] == "A" && rotation[index] == "up"){
	        y--;
	    }
	
	}
	output = `{x: ${x}, y: ${y}, direction: '${rotation[index]}'}`;
	return output;
}
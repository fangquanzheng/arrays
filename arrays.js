var animal = ["panda","cat","sloth","pangolin","unicorn","kangaroo"]
animal.forEach(function(d){
	var list = document.createElement("li");
	var text = document.creatTextNode(d);
	list.appendChild(text);
	document.getElementById("list").appendChild(list);			
})
	

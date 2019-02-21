var integers = [11,4,41,50,
  7,19,8,18,
  2,6,43,6,
  20,43,2,23,
  12,24,31,29];

var makeTable = function() {
  for (row=0; row<integers.length+1; row++) {
    console.log(row);
    if (row == 0) {
      var tableNode = document.getElementById;

    }
    createRow();
    for (data=0; data<4; data++) {
      createData(integers[data],row);
      }
  integers.splice(0, 4);
  }

}

function createRow() {
  var rowNode = document.createElement("TR");
  rowNode.setAttribute("id", "Row"+row);
  document.getElementById('Table').appendChild(rowNode);
}
function createData(d,row) {
  var dataNode = document.createElement("TD");
  dataNode.setAttribute("id","Data");
  document.getElementById("Row"+row).appendChild(dataNode);
  var d_textNode = document.createTextNode(d);
  dataNode.appendChild(d_textNode);

}

var makeList = function() {
  var animal = ["panda","cat","sloth","pangolin","unicorn","kangaroo"];
  animal.forEach(function(d){
	var list = document.createElement("li");
	var text = document.createTextNode(d);
	list.appendChild(text);
	document.getElementById("list").appendChild(list);
})}

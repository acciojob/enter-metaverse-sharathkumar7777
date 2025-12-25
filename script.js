//your JS code here. If required.
const status1 = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListner("click" , function(){
	status1.innerHTML = "<h1>Entered Metaverse</h1>";
});
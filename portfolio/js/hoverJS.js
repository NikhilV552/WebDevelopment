var directory=['Binary','quickSort','dataEntry','calculator','timetable']
		var idNames=['bst4',"quick","data1","calc1","timetable1"];
		var time=500;
function imageOut(num){
	var idName="image"+num;
	var index=parseInt(num);
	var element=document.getElementById(idName);
	$(element).fadeTo(time,0.000,function(){
		element.src="images/"+directory[index-1]+"/"+idNames[index-1]+"2"+".jpg";
		$(element).fadeTo(time,1);
		});
	console.log("oh hover");
	console.log(element);
}
function imageIn(num){
	var idName="image"+num;
	var index=parseInt(num);
	var element=document.getElementById(idName);
	$(element).fadeTo(time,0.000,function(){
		element.src="images/"+directory[index-1]+"/"+idNames[index-1]+"1"+".jpg";
		$(element).fadeTo(time,1);
		});
	console.log("oh hover");
	console.log(element);
}
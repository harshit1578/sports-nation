var inp=document.getElementsByTagName('input');
var pointer=document.getElementsByTagName('label');
var boss=document.getElementById('boss'); 
var parent=document.getElementsByTagName('p');

function forFocus(point, x){
	var p=document.getElementsByTagName('label');
	p[x].style.color="#0A50BC";
	point.setAttribute("placeholder","");
}
function forBlur(point, x){
	var p=document.getElementsByTagName('label');
	p[x].style.color="#232323";
	point.setAttribute("placeholder","");
	if(inp[x].value!=""){
	parent[x].style.visibility="hidden";
	}
}
value="select";
function setValue(){
	value = document.getElementById('gender').value;
}
function finalCheck(){
	var chk=value;
			if(chk == "select")
			{
				pointer[5].style.color="red";
				parent[5].style.visibility="visible";
			}
	for (var i = 0; i < 6; i++)
	{
		var val= inp[i].value;	
		if (i==0)
		{
			if(val=="" || val.match(/\d/) || val.match(/\W/) )
			{
				pointer[i].style.color="red";
				inp[i].style.borderBottom="1px solid red";
				parent[i].style.visibility="visible";
			}
		}
		if (i==1)
		{
			if(val=="" || val.match(/\d/) || val.match(/\W/) )
			{
				pointer[i].style.color="red";
				inp[i].style.borderBottom="1px solid red";
				parent[i].style.visibility="visible";
			}
		}
		if (i==2)
		{
			let patt=/^\w+[@]+\w+[.]+[a-z]{2,3}$/
			if(val=="" || !(val.match(patt)) )
			{
				pointer[i].style.color="red";
				inp[i].style.borderBottom="1px solid red";
				parent[i].style.visibility="visible";
			}
		}
		if(i==3)
		{
			if( !(val.match(/[a-z]/)) || !(val.match(/[A-Z]/)) || !(val.match(/[0-9]/)) || !(val.match(/\W/)) || val.length < 8 || val.length > 16 )
			{
				pointer[i].style.color="red";
				inp[i].style.borderBottom="1px solid red";
				parent[i].style.visibility="visible";
			}
		}
		if(i==4)
		{
			var real=inp[i-1].value;
			if (val!=real || val=="")
			{
				pointer[i].style.color="red";
				inp[i].style.borderBottom="1px solid red";
				parent[i].style.visibility="visible";
			}
		}
		if(i==5)
		{
			var num=parseInt(val);
			{
				if( !(val.match(/\d{10}/) ) && val!="" )
				{
				pointer[6].style.color="red";
				inp[i].style.borderBottom="1px solid red";
				parent[6].style.visibility="visible";
				}
			}
		}

	}
}
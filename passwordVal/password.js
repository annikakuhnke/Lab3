function invalidPass()
{
	var first= document.getElementById("first input").value;
	var second= document.getElementById("second input").value;
	if(first != second)
	{
		alert("The passwords you have enter do not match");
	}
	else if(first.length < 8)
	{
		alert("The password you have entered is not 8 characters");
	}
	else
	{
		alert("Thank you for providing good input");
	}
}

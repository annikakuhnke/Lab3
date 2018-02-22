let slideAt=1;

function incrementSlides(n)
{
	slideAt=slideAt+n;
	showSlides(slideAt);
}

function showSlides(n)
{
	let image=document.getElementById("theImage");
	if (n<1) //making sure it wraps around for previous of the first image
	{
		slideAt=5;
	}
	if (n>5) //making sure it wraps around for the next after the last image
	{
		slideAt=1;
	}
	if (slideAt==1)
	{
		image.src="img_a.jpg";
	}
	if (slideAt==2)
	{
		image.src="img_b.jpg";
	}
	if (slideAt==3)
	{
		image.src="img_c.jpg";
	}
	if (slideAt==4)
	{
		image.src="img_d.jpg";
	}
	if (slideAt==5)
	{
		image.src="img_e.jpg";
	}
}

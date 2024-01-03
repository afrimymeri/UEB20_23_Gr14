var width=500;
		var difference=2;
		var interveralID =0;
		//document.getElementById("img1").style.width=width;

		function increase()
		{
			clearInterval(interveralID);
			interveralID=setInterval(expand,10);
		}
		function decrease()
		{
			clearInterval(interveralID);
			interveralID=setInterval(shrink,10);
		}
		function expand()
		{
			if(width<500)
			{
				width = width+difference;
				document.getElementById("foto1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}
		function shrink()
		{
			if(width>100)
			{
				width = width-difference;
				document.getElementById("foto1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}


    console.log("A O KA BON QIKY MUT");



    document.addEventListener("DOMContentLoaded", function () {
      var fadeInButton = document.getElementById("buttonFadein");
  
      // Trigger the fade-in effect by adding a class after a short delay
      setTimeout(function () {
          fadeInButton.classList.add("fade-in");
      }, 100); // You can adjust the delay as needed
  });
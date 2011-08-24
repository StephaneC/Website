function displayMainContent(which){
	$('section').css("display","none");
	//$('.active').removeClass("active");
	switch (which)
	{
	case 1:
		$('#Home').css("display","block");
		$(".menu").find(".active").removeClass("active");
		$('#menuhome').addClass("active");
		break;
	case 2:
		$('#Devmobile').css("display","block");
		$(".menu").find(".active").removeClass("active");
		$('#menudevmobile').addClass('active');
		break;
	case 8://menu moi
		$('#Moi').css("display","block");
		$(".menu").find(".active").removeClass("active");
		$('#menumoi').addClass('active');
		break;
	case 3:
		$('#Contact').css("display","block");
		$(".menu").find(".active").removeClass("active");
		$('#menucontact').addClass("active");
		break;
	case 4://troovon
		$('#troovon').css("display","block");		
		break;
	case 5://comnotes
		$('#comnotes').css("display","block");
		break;
	case 6://taskmgr
		$('#taskmgr').css("display","block");
		break;
	case 7://rakdroid
		$('#rakdroid').css("display","block");
		break;
	}
}
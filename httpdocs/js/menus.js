var ddmenuitem = 0;

function displayMainContent(which){
	var req = new XMLHttpRequest(); 
	switch (which)
	{
	case 1: req.open("GET", "../pages/home.html", false); 
		req.send(null); 
		break;
	case 21: req.open("GET", "pages/formations/tb.html", false);
		req.send(null); 
		break;
	case 22: req.open("GET", "pages/formations/iut.html", false);
		req.send(null); 
		break;
	case 31: req.open("GET", "pages/pro/alu.html", false);
		req.send(null); 
		break;
	case 32: req.open("GET", "pages/pro/thales.html", false);
		req.send(null); 
		break;
	case 33: req.open("GET", "pages/pro/mvi.html", false);
		req.send(null); 
		break;
	case 41: req.open("GET", "pages/mobiles/Rakdroid.html", false);
		req.send(null); 
		break;
	case 42: req.open("GET", "pages/mobiles/Multitaskmgr.html", false);
		req.send(null); 
		break;
	case 43: req.open("GET", "pages/mobiles/Comnotes.html", false);
		req.send(null); 
		break;
	case 44: req.open("GET", "pages/mobiles/Troovon.html", false);
		req.send(null); 
		break;
	case 5: req.open("GET", "pages/contact.html", false);
		req.send(null); 
		break;	
	}
	var page = req.responseText;
	document.getElementById('main_content').innerHTML = page;
}
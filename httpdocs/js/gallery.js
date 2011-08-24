var gallery = function(num, id){
		var lId = '#img'+id;
		var src = $(lId).attr("src");
		var nb = src.lastIndexOf(".");
		var base = src.substring(0,nb-1);
		src = base+num+".png";
		$(lId).attr("src",src);
		lId = '.'+id;
		//manage displayed paging
		$(lId).find('li.active').removeClass("active");
		$(lId).find('li').slice(num-1,num).addClass("active");
}

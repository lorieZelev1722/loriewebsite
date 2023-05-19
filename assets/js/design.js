$(document).on('click','.link',function(event){
    event.preventDefault();
    var type=$(this).attr('data-id');
    window.location.href = routers(type);
});

var addActive=function(type){
    $(document).ready(function(){
     $('li a.active').removeClass('active');
    $("."+type).addClass('active');  
    });
}

var routers=function(type){

	if(type=="home")
	{
		return "index.html";
	}
	else if(type=="about")
	{
		return "about.html";
	}
	else if(type=="resume")
	{
		return "resume.html";
	}
	else if(type=="services")
	{
		return "services.html";
	}
	else if (type=="portfolio")
	{
		return "portfolio.html";
	}
	else{
		return "contact.html";
	}
}

var about_display=function()
{
   
    for(i in about)
    {
    	$('#'+i).append(about[i]);
    }
   
}

var progress_display=function()
{
	for(i in progression)
	{
		$('.'+i).attr('aria-valuenow',progression[i]);
		$('.'+i).append(`${progression[i]}%`);
	}
}





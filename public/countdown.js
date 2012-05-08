
//######################################################################################
// Author: ricocheting.com
// Version: v2.0
// Date: 2011-03-31
// Description: displays the amount of time until the "dateFuture" entered below.

// NOTE: the month entered must be one less than current month. ie; 0=January, 11=December
// NOTE: the hour is in 24 hour format. 0=12am, 15=3pm etc
// format: dateFuture1 = new Date(year,month-1,day,hour,min,sec)
// example: dateFuture1 = new Date(2003,03,26,14,15,00) = April 26, 2003 - 2:15:00 pm

dateFuture1 = new Date(2012,4,20,0,0,0);

// TESTING: comment out the line below to print out the "dateFuture" for testing purposes
//document.write(dateFuture +"<br />");


//###################################
//nothing beyond this point
function GetCount(ddate,iid){

	dateNow = new Date();	//grab current date
	amount = ddate.getTime() - dateNow.getTime();	//calc milliseconds between dates
	delete dateNow;

	// if time is already past
	if(amount < 0){
		document.getElementById(iid).innerHTML="Today Bitches";
	}
	// else date is still good
	else{
		weeks=0;days=0;hours=0;mins=0;secs=0;out="";

		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

		weeks=Math.floor(amount/604800);//weeks
		amount=amount%604800;

		days=Math.floor(amount/86400);//days
		amount=amount%86400;

		hours=Math.floor(amount/3600);//hours
		amount=amount%3600;

		mins=Math.floor(amount/60);//minutes
		amount=amount%60;

		secs=Math.floor(amount);//seconds

		
    if(weeks != 0){out += (weeks<=9?'0':'')+weeks +" "+((weeks==1)?"week...":"weeks...")+"";}
		if(days != 0){out += days +" "+((days==1)?"day...":"days...")+"<br>";}
		if(hours != 0){out += hours +" "+((hours==1)?"hour...":"hours...")+"";}
		out += mins +" "+((mins==1)?"min...":"mins...")+"<br>";
		out += secs +" "+((secs==1)?"sec...":"secs...")+"<br>";
		out = out.substr(0,out.length-2);
		document.getElementById(iid).innerHTML=out;

		setTimeout(function(){GetCount(ddate,iid)}, 1000);
	}
}

window.onload=function(){
	GetCount(dateFuture1, 'countbox1');
	//you can add additional countdowns here (just make sure you create dateFuture2 and countbox2 etc for each)
};


$( document ).ready( function() {
            var $body = $('body'); //Cache this for performance

            var setBodyScale = function() {
                var scaleSource = $body.width(),
                    scaleFactor = 0.35,                     
                    maxScale = 300,
                    minScale = 30; //Tweak these values to taste

                var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

                if (fontSize > maxScale) fontSize = maxScale;
                if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

                $('body').css('font-size', fontSize + '%');
            }

            $(window).resize(function(){
                setBodyScale();
            });

            //Fire it when the page first loads:
            setBodyScale();
        });

		

			   /* Locations can be edited manually by updating 'wx_locID' below.  Please also update */
			   /* the location name and link in the above div (wx_module) to reflect any changes made. */
			   var wx_locID = 'MXQR0138';

			   /* If you are editing locations manually and are adding multiple modules to one page, each */
			   /* module must have a unique div id.  Please append a unique # to the div above, as well */
			   /* as the one referenced just below.  If you use the builder to create individual modules  */
			   /* you will not need to edit these parameters. */
			   var wx_targetDiv = 'wx_module_9005';

			   /* Please do not change the configuration value [wx_config] manually - your module */
			   /* will no longer function if you do.  If at any time you wish to modify this */
			   /* configuration please use the graphical configuration tool found at */
			   /* https://registration.weather.com/ursa/wow/step2 */
			   var wx_config='SZ=300x250*WX=FHC*LNK=SSNL*UNT=F*BGI=plane*MAP=null|null*DN=countdowntocancun.heroku.com*TIER=0*PID=1314197778*MD5=e6730643dc76f9b086ff5177b7de61b6';

			   document.write('<scr'+'ipt src="'+document.location.protocol+'//wow.weather.com/weather/wow/module/'+wx_locID+'?config='+wx_config+'&proto='+document.location.protocol+'&target='+wx_targetDiv+'"></scr'+'ipt>');  
			
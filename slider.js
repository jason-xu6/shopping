window.onload=function()
{
			var oImg=document.getElementsByClassName("img");
			var oImg2=document.getElementsByClassName("img2");
			var oLeft=document.getElementById("main-left");
			var oRight=document.getElementById('main-right');
			var oDiv=document.getElementById('stop');
            var zindex=2;
            var now=0;


			for(var i=0;i<oImg.length;i++)
			{
                 oImg2[i].index=i;
                 oImg2[i].onclick=function()
                 {

                 	if (this.index==now)return;
                 	now=this.index;
                 	tab();
                 };
	           oImg2[i].onmouseover=function()
	               {
	                 startMove(this,"opacity",100);
	               };

	           oImg2[i].onmouseout=function()
	               {
	                 if (this.index!=now) 
	                   {
	                 	  startMove(this,"opacity",20);
	                   }
	               };
	        }
            
		     function tab()
			{
				oImg[now].style.zIndex=zindex++;

				for(var i=0;i<oImg2.length;i++)
				  {
					startMove(oImg2[i],"opacity",20);
				  }
					startMove(oImg2[now],"opacity",100);

					oImg[now].style.width=0;
					startMove(oImg[now],"width",610);
					}

	oLeft.onclick=function ()
	{
		now--;
		if(now==-1)
		{
			now=oImg2.length-1;
		}
		
		tab();
	};
	
	oRight.onclick=function ()
	{
		now++;
		if(now==oImg2.length)
		{
			now=0;
		}
		
		tab();
	};
				var dinshiqi=setInterval(oRight.onclick, 2000);
                 oDiv.onmouseover=function()
                 {
                 	clearInterval(dinshiqi);
                 };
                 oDiv.onmouseout=function()
                 {
                 	dinshiqi=setInterval(oRight.onclick, 2000);
                 };
				function getStyle(obj, name)
{
  if(obj.currentStyle)
  {
    return obj.currentStyle[name];
  }
  else
  {
    return getComputedStyle(obj, false)[name];
  }
}
function startMove(obj,attr,target)
{
   clearInterval(obj.timer);
   obj.timer=setInterval(function()
    {

       var cur=0;
       if (attr=="opacity") {
         cur=Math.round(parseFloat(getStyle(obj,attr))*100);
       } else {
         cur=parseInt(getStyle(obj,attr));
       }
       speed=speed>0?Math.ceil(speed):Math.floor(speed);
           var speed=(target-cur)/10;
      if(cur==target)
    {
      clearInterval(obj.timer);
    }
    else
    {
      if (attr=="opacity") {
        obj.style.filter="alpha(opacity:+(cur+speed)+)";
        obj.style.opacity=(cur+speed)/100;
      } else {
        obj.style[attr]=cur+speed+'px';
      }
    }
  }, 30);
}
};
         
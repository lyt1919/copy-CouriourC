window.addEventListener('load',function(){
    var set=document.getElementById('set');
    var setDetail=this.document.getElementById('setDetail');
    var count=0;
    set.addEventListener('mousedown',function(){
        count++;
        if(count%2!=0){
            setDetail.style.display='block';
        }else{
            setDetail.style.display='none';
        }
    })

     var setbig=this.document.getElementById('getbig');
     var setsmall=this.document.getElementById('getsmall');
     var paramNumber=1;
     //放大
     setbig.addEventListener('mousedown',function(){
        if(paramNumber<1.4){
            paramNumber+=0.1;
            document.getElementsByTagName('body')[0].style.zoom=paramNumber;
        }
     })
     //缩小
     setsmall.addEventListener('mousedown',function(){
        if(paramNumber>0.6){
            paramNumber-=0.1;
            document.getElementsByTagName('body')[0].style.zoom=paramNumber;
        }
     })

     var changeColor=this.document.getElementById('changeBackColor');
     changeColor.addEventListener('mousedown',function(){
        count++;
        if(count%2==0){
            document.body.style.backgroundColor="#383940";
            // document.getElementsByTagName('li').style.color="BEBEC6"
        }else{
            document.body.style.backgroundColor="white";
        }

     })

     var setup=this.document.getElementById('getup');
     setup.onclick=function(){
        timer=setInterval(function(){
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            var speed=Math.floor(-scrollTop/8);
            document.documentElement.scrollTop=document.body.scrollTop=scrollTop+speed;
            isTop=true;
            if(scrollTop==0){
                clearInterval(timer);
            }
        },50);
     }

     var setdown=this.document.getElementById('getdown');
     setdown.addEventListener('mousedown',function(){
        window.scrollTo(0,document.documentElement.scrollHeight);
     })

}) 
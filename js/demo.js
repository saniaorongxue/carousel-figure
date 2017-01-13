/**Created by jilon on 2017/1/12.**/
window.onload=function(){
    /*demo1*/
    (function(){
        var demo=document.getElementById('demo1');//盒子
        var ul=demo.getElementsByTagName('ul')[0];//图片显示区域
        var ulLi=ul.getElementsByTagName('li');
        var ol=demo.getElementsByTagName('ol')[0];//数字显示
        var olA=ol.getElementsByTagName('a');
        olA[0].className='active';//第一个a的默认样式

        /*每个数字对应一个图片，点击数字时显示对应的图片*/
        for(var i=0;i<olA.length;i++){//循环a的数组
            olA[i].nowShow=i;//每个a的自定义属性，值为它在数组中的索引
            olA[i].onclick=function(){//定义a的点击事件
                for(var j=0;j<ulLi.length;j++){//每张图片的层级清除
                    ulLi[j].style.zIndex=0;
                    olA[j].className='';//设置a的样式
                    this.className='active';
                }
                ulLi[this.nowShow].style.zIndex=1;//当前点击a所对应的图片显示
            }
        }
    })();

    /*demo2*/
    (function(){
        var demo=document.getElementById('demo2');//盒子
        var ul=demo.getElementsByTagName('ul')[0];//图片显示区域
        var ulLi=ul.getElementsByTagName('li');
        var ol=demo.getElementsByTagName('ol')[0];//数字显示
        var olA=ol.getElementsByTagName('a');
        olA[0].className='active';//第一个a的默认样式

        for(var i=0;i<olA.length;i++){//循环a的数组
            olA[i].nowShow=i;//每个a的自定义属性，值为它在数组中的索引
            olA[i].onclick=function(){//定义a的点击事件
                for(var j=0;j<ulLi.length;j++){//每张图片的层级清除
                    ulLi[j].style.zIndex=0;
                    ulLi[j].style.opacity=0;
                }
                var imgShow=this.nowShow;//获取当前点击的索引
                for(var i=0;i<olA.length;i++){//设置a的样式
                    olA[i].className='';
                    this.className='active';
                }
                ulLi[imgShow].style.zIndex=1;//当前点击a所对应的图片显示
                setTimeout(function(){ulLi[imgShow].style.opacity=1;},200);

            }
        }
    })();

    /*demo3*/
    (function(){
        var demo=document.getElementById('demo3');//盒子
        var ul=demo.getElementsByTagName('ul')[0];//图片显示区域
        var ulLi=ul.getElementsByTagName('li');
        var ol=demo.getElementsByTagName('ol')[0];//数字显示
        var olA=ol.getElementsByTagName('a');
        olA[0].className='active';//第一个a的默认样式

        var num=0;
        var timer=setInterval(imgMove,2000);//定时器
        function imgMove(){
            if(num==4){
                num=0;
            }else{
                num++;
            }
            for(var i=0;i<olA.length;i++){
                olA[i].className='';
                ulLi[i].style.zIndex=0;
                ulLi[i].style.opacity=0;
            }
            olA[num].className='active';
            ulLi[num].style.zIndex=1;
            setTimeout(function(){ulLi[num].style.opacity=1;},100);
        }

        /*每个数字对应一个图片，点击数字时显示对应的图片*/
        for(var i=0;i<olA.length;i++){//循环a的数组
            olA[i].nowShow=i;//每个a的自定义属性，值为它在数组中的索引
            olA[i].onclick=function(){//定义a的点击事件
                num=this.nowShow;
                for(var j=0;j<ulLi.length;j++){//每张图片的层级清除
                    ulLi[j].style.zIndex=0;
                    olA[j].className='';//设置a的样式
                    this.className='active';
                }
                ulLi[this.nowShow].style.zIndex=1;//当前点击a所对应的图片显示
            }
        }
        demo.onmouseover=function(){
            clearInterval(timer);
        };
        demo.onmouseout=function(){
            timer=setInterval(imgMove,2000);
        }

    })();


    /*demo4*/
    (function(){

    })();
};
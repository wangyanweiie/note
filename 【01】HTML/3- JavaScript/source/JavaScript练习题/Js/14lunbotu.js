//创建数组存储图片的路径
var imgarr = ["../xiaomi/lunbotu1.jpg","../xiaomi/lunbotu2.jpg","../xiaomi/lunbotu3.jpg"];

//获取元素
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var img = document.querySelector(".img");
var list = document.querySelectorAll(".circle>li");

//声明变量 i作为数组下标
var i = 0 ;
//给左右箭头绑定点击事件
right.onclick = function(){
    i++;
    if(i > imgarr.length-1)
    {
        i = 0;
    }
    //设置图片路径
    img.src = imgarr[i];
};
left.onclick = function(){
    i--;
    if(i < 0)
    {
        i = imgarr.length-1;
    }
    img.src = imgarr[i];
};

//定义函数：切换图片 + 改变圆圈的边框与背景颜色
function fn1(index){
    for(var i = 0; i < imgarr.length; i++)
    {   
        if(i == index)
        {
            img.src = imgarr[i];
            list[i].style.backgroundColor = "rgba(255,255,255,.3)";
            list[i].style.borderColor = "rgba(0,0,0,.4)";
        }
        else{
            list[i].style.backgroundColor = "rgba(0,0,0,.4)";
            list[i].style.borderColor = "rgba(255,255,255,.3)";
        }
        
    }
    
}

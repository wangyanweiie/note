//获取元素：通过类名获取到的是一个伪数组，可以操作下标
var arrbox = document.getElementsByClassName("box");
var list = document.querySelectorAll(".nav>li");
//创造函数：实现tab切换
function tab(index){
    for(var i =  0; i < arrbox.length; i++)
    {
        if(i == index)
        {
            //显示切换 + 选中背景颜色、字体颜色改变
            arrbox[i].style.display = "block";
            list[i].style.backgroundColor = "white";
            list[i].style.color = "#333";
        }
        else
        {
            arrbox[i].style.display = "none";
            list[i].style.backgroundColor = "#333";
            list[i].style.color = "white";
        }
    }

}
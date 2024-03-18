/*---------------------------------------------
定义函数：获取元素当前显示的样式
参数：
    obj:要执行的对象；
    name:要执行动画对应的样式名（"width" "left"..）
*/
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }
    else{
        return obj.currentStyle[name];
    }
}
/*---------------------------------------------
定义函数：控制元素移动
参数：
    obj：要执行的对象；
    attr：要执行动画对应的样式名（同上的name）
    target：执行动画的目标位置
    speed：移动速度
    callback:回调函数 在动画执行结束开始执行
*/
function move(obj,attr,target,speed,callback){
    //关闭上一次开启的定时器；
    clearInterval(obj.timer);
    //获取当前位置与目标位置比较
    var current =  parseInt(getStyle(obj,attr));
    if(current > target){
        speed = -speed;
    }
    //开启定时器
    //向开启定时器的对象 obj添加一个timer属性用于保存自己的标识
    obj.timer = setInterval(function(){
        //将获取到的 obj的 left值转换为 number类型
        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue + speed;
        //判断当前值与目标位置的距离
        if((speed<0 && newValue<target) || (speed>0 && newValue>target)){
            newValue = target;
        }
        //attr是变量 不能用点访问 只能用中括号且里面不加引号
        obj.style[attr] = newValue + "px";
        //当距离达到目标距离时停止移动 关闭定时器
        if(newValue == target){
            clearInterval(obj.timer);
            /*动画执行完毕：
            先判断是否有传递回调函数，有则执行回调函数
            若没有传递回调函数也不影响正常运行*/
            callback && callback();
        }
    },30);
};
/*-----------------------------------------------
定义函数：向指定的元素中添加指定的 class
    参数：obj：需要添加 class属性的元素
         cn：添加的 className的名字是一个"字符串"
*/
 function addClass(obj,cn){
    //先检查 obj中是否已经含有 cn
    if(!hasClass(obj,cn)){
        //将 class在原有类的基础上添加、要有空格隔开
        obj.className += " "+ cn;  
    }
};
//定义函数：检查一个元素中是否有指定的 class
function hasClass(obj,cn){
    /*创建正则表达式检查有没有名为 cn的class
    \b代表单词边界，cn应该是独立的单词，由于\是转义字符，故要\\表示\*/
    var reg = new RegExp("\\b"+ cn +"\\b");
    return reg.test(obj.className);
};
/*-----------------------------------------------
定义函数：删除一个元素中指定的 class*/
function removeClass(obj,cn){
   var reg = new RegExp("\\b"+ cn +"\\b");
    obj.className = obj.className.replace(reg,"");
};
/*------------------------------------------------
定义函数：切换一个元素中指定的 class
若元素中有该类则删除，若没有则添加*/
function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }
    else{
        addClass(obj,cn);
    }
};
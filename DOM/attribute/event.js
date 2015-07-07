// Chrome,FireFox,Opera,Safari,IE9.0及以上
elementObject.OnXXX=function(e){
    var eve=e; // 声明一个变量来接收 event 对象
} 

// IE8.0及其以下
elementObject.OnXXX=function(){
    var eve=window.event; // 声明一个变量来接收event对象
}

// 兼容
elementObject.OnXXX=function(e){
    var eve = e || window.event;  // 使用 || 运算取得event对象
}
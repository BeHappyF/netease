// 兼容事件监听
function addEvent (ele, event, handler) {
    if(ele.addEventListener) {
      ele.addEventListener(event, handler, false);
    } else {
      ele.attachEvent("on"+event, handler);
    }
  }
// 淡入
function fadeIn (ele) {
    var stepLength = 1/50;
    if (!parseFloat(ele.style.opacity)) {
        ele.style.opacity = 0;
    }
    function step () {
        if (parseFloat(ele.style.opacity)+stepLength < 1) {
            ele.style.opacity = parseFloat(ele.style.opacity)+stepLength;
        } else {
            ele.style.opacity = 1;
            clearInterval(setIntervalId);
        }
    }
    var setIntervalId = setInterval(step, 20);
}
// 淡出
function fadeOut (ele) {
  var stepLength = 1/50;
  if (!parseFloat(ele.style.opacity)) {
      ele.style.opacity = 1;
  }
  function step () {
      if (parseFloat(ele.style.opacity)-stepLength > 0) {
          ele.style.opacity = parseFloat(ele.style.opacity)-stepLength;
      } else {
          ele.style.opacity = 0;
          clearInterval(setIntervalId);
      }
  }
  var setIntervalId = setInterval(step, 20);
}



var ul = document.getElementById('control');
var asides = document.getElementsByTagName('aside');
var index = 0;
// 导航栏的事件监听
addEvent(
  ul,'click',function (event) {
    var target = event.target || window.srcElement;
    index = target.dataset.index;
    for(var i=0,aside;aside = asides[i];i++) {
      aside.style.display = "none";
      aside.style.opacity = 0;
    }
    // book.style.display = "none";
    // dropList.style.display = "none";
    book.classList.add('hidden');
    dropList.classList.add('hidden');
    // 去除鸟的hidden样式
    bird.classList.remove('hidden');
    bird.classList.remove('bird-leave');
    asides[index].style.display = "block";
    fadeIn(asides[index]);
    // 背景图片的修改
    var body = document.getElementsByTagName('body')[0];
    // index的值是一个字符串，所以做运算是需要转换为数字
    body.style.backgroundImage = "url(./img/"+(+index+1)+".jpg)";
    fadeIn(body);
  });
//给导航栏的父容器添加事件监听,实现导航栏的淡入淡出
addEvent(
  ul.parentNode,'mouseenter', function (event) {
    ul.classList.remove('hidden');
    fadeIn(ul);
  });
addEvent(
  ul.parentNode,'mouseleave',function (event) {
    fadeOut(ul);
    // 让淡出效果完全呈现
    setTimeout(function () {
      ul.classList.add('hidden');
    },1000);
  });
var links = document.getElementsByClassName('profile-social-links');
var book = document.getElementsByClassName('component')[0];
var bird = document.getElementsByClassName('bird')[0];
// 添加图书的出现和鸟的出现的监听事件
// 在父容器上设置事件监听
for(var i=0,link; link=links[i]; i++){
  addEvent(
    link,'click', function (event) {
      // book.style.display = "block";
      // 上下两者皆可
      book.classList.remove('hidden');
      fadeIn(book);

      // 主栏部分消失
      fadeOut(asides[index]);
      // 1s之后让其在页面不占位置
      setTimeout(function () {
        asides[index].style.display = "none";
      },2000);
      // 鸟
      bird.classList.add("bird-intro");
      bird.classList.add("bird-moving");
      // 三秒之后鸟会暂停在书上
      setTimeout(function () {
        bird.classList.remove('bird-moving');
        bird.classList.add('bird-static');
      },3000);
    });
}

var btn = document.getElementsByClassName('btn')[0];
//  添加下拉列表的事件监听
addEvent(
  btn,'click',function (event) {
    var dropList = document.getElementById('dropList');
    dropList.classList.remove('hidden');
    fadeIn(dropList);
    fadeOut(book);
  });

// 鸟的消失的事件监听
addEvent(
  book,"mouseover",function (event) {
    bird.classList.add('bird-leave');

    setTimeout(function () {
      bird.classList.add('hidden');
      bird.classList.remove('bird-intro');
      bird.classList.remove('bird-static');
      // 在这里不能就消除掉bird-leave样式,要不然就能够重复的触发事件，鸟会总是飞
    },3000);
  });


 var str = '',
      data = [
          [
              { title : '工大要闻'},
              { url : 'e/1/index.html', title : '哈工大焊接产业集团成立' },
              { url : 'e/2/index.html', title : '省委副书记、省长陆昊到哈工大机器人集团和焊接产业集团调研' },
              { url : 'e/3/index.html', title : '工信部检查组来校检查指导2015年本科招生工作' },
              { url : 'e/4/index.html', title : '283名博士生获得博士学位扬帆启航' },
              { url : 'e/15/index.html', title : '更多。。。' }
          ],
          [
              { title : '综合新闻'},
              { url : 'e/16/index.html', title : '常熟理工学院来校调研' },
              { url : 'e/17/index.html', title : '丁雪梅副校长会见瑞士客人' },
              { url : 'e/18/index.html', title : '吴灵芬任宝平受聘我校兼职教授' }
          ],
          [
              { title : '校内信息'},
              { url : 'e/19/index.html', title : '关于召开哈尔滨工业大学第八届本科生学术论坛大会暨颁奖仪式' },
              { url : 'e/20/index.html', title : '【港澳台暑期来访团】快舟学子夏季学期工科学校（八）' },
              { url : 'e/21/index.html', title : '关于开展2015年创新人才推进计划组织推荐工作的通知' },
              { url : 'e/1/index.html', title : '更多。。。' }
          ],
          [
              { title : '其他链接'},
              { url : 'slide/01/index.html', title : '校园门户' },
              { url : 'slide/02/bd02.html', title : '新闻网' },
              { url : 'slide/03/bd03.html', title : '校内信息' },
              { url : 'slide/04/index.html', title : '电邮系统' },
              { url : 'slide/05/index.html', title : '图书馆' },
              { url : 'slide/10/index.html', title : '办公系统' },
              { url : 'slide/10/index.html', title : '个人主页' },
              { url : 'slide/10/index.html', title : '校园地图' },
              { url : 'slide/13/index.html', title : '更多。。。' }
          ]
      ];
    for(var i = 0; i < data.length; i++){
        var items = data[i];
        var sub = '';
        for(var j=0; j<items.length; j++){
            var son = items[j];
            if(j == 0){
                sub += '<li><h1><a href="javascript:;" title="' + son.title + '">' + son.title + '</a></h1><dl class="sub-dl">';
            } else {
                sub += '<dd><a href="' + son.url + '" target="_blank" title="' + son.title + '">' + son.title + '</a></dd>';
            }
            if(j == items.length - 1){
                sub += '</dl></li>';
            }
        }
        str += sub;
    }
    var ol = document.getElementById('ol');
    ol.innerHTML = str;
    var h1 = ol.getElementsByTagName('h1');
    var dl = ol.getElementsByTagName('dl');
    var tmp = -1;
    var open = false;
    for(var i=0; i < h1.length; i++){
        h1[i].index = i;
        h1[i].onclick = function(){
            for(var i=0; i<h1.length; i++){
                dl[i].style.display = 'none';
            }
            if(tmp == this.index && open){
                dl[this.index].style.display = 'none';
                open = false;
            } else {
                dl[this.index].style.display = 'block';
                open = true;
            }
            tmp = this.index;
        }
    }
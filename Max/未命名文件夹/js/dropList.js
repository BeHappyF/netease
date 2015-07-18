function addEvent (node, event, handler) {
  if(node.addEventListener) {
    node.addEventListener(event,handler,false);
  } else {
    node.attachEvent('on'+event, handler);
  }
}

var ul = document.getElementById('control'),
    index1 = 0;
addEvent(
  ul,'click',function (event) {
    target = event.target || window.srcElement;
    index1 = target.dataset.index;
  });
var str = '',
    data1 = [
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
    ],
    data2 = [
    [
      {title: "学校简介"},
      {url : '#', title: '“一校三区”的办学格局'},
      {url : '#', title: '基本设施齐备'},
      {url : '#', title: '面向国家重大需求,面向国际学术前沿'},
      {url : '#', title: '航天特色,坚持自主创新'},
      {url : '#', title: '坚持个性化培养与柔性化管理相结合的人才培养方法'}
    ],
    [
      {title: "概况一览"},
      {url : '#', title: '哈尔滨工业大学基本统计数据'},
      {url : '#', title: '博士学位授权一级学科'},
      {url : '#', title: '博士、硕士学科、专业授权点'},
      {url : '#', title: '硕士学位授权一级学科'},
      {url : '#', title: '博士、硕士专业学位授权点'}
    ],
    [
      {title: "现任领导"},
      {url : '#', title: '党委书记——王树权'},
      {url : '#', title: '校长——周玉'},
      {url : '#', title: '党委常务副书记——熊四皓'},
      {url : '#', title: '副校长——邓宗全'},
      {url : '#', title: '副校长——韩杰才'},
      {url : '#', title: '副校长——任南琪'},
      {url : '#', title: '副校长——丁雪梅'}
    ]
  ],
  data3 = [
    [
      {title: "航天学院"},
      {url : '#', title: '工程力学'},
      {url : '#', title: '飞行器设计与工程'},
      {url : '#', title: '飞行器环境与生命保障工程'},
      {url : '#', title: '空间科学与技术'},
      {url : '#', title: '复合材料与工程'},
      {url : '#', title: '更多。。。'}
    ],
    [
      {title: "电子与信息工程学院"},
      {url : '#', title: '通信工程'},
      {url : '#', title: '电磁场与无线技术'},
      {url : '#', title: '电子信息工程'},
      {url : '#', title: '遥感科学与技术'},
      {url : '#', title: '信息对抗技术'}
    ],
    [
      {title: "机电工程学院"},
      {url : '#', title: '机械设计制造及其自动化'},
      {url : '#', title: '飞行器制造工程'},
      {url : '#', title: '工业工程'},
      {url : '#', title: '工业设计'},
      {url : '#', title: '广播电视编导'},
      {url : '#', title: '广告学'}
    ],
    [
      {title: "材料科学与工程学院"},
      {url : '#', title: '材料科学与工程'},
      {url : '#', title: '材料物理'},
      {url : '#', title: '材料成型及控制工程'},
      {url : '#', title: '焊接技术与工程'},
      {url : '#', title: '电子封装技术'},
      {url : '#', title: '光电信息科学与工程'}
    ]
    [
      {title: "更多学院"},
      {url : '#', title: '能源科学与工程学院'},
      {url : '#', title: '电气工程及自动化学院'},
      {url : '#', title: '理学院'},
      {url : '#', title: '经济与管理学院'},
      {url : '#', title: '人文与社会科学学院'},
      {url : '#', title: '土木工程学院'},
      {url : '#', title: '市政环境工程学院'}
    ]
  ];
  // var datas = "data"+(index1+1);
  var data;
  switch(index1) {
    case 0: data = data1; break;
    case 1: data = data2; break;
    case 2: data = data3; break; 
  }
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
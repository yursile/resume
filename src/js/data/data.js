import imgUrl1 from '../../img/01.jpeg';
import imgUrl2 from '../../img/02.jpeg';
import imgUrl3 from '../../img/03.jpeg';
import imgUrl4 from '../../img/04.jpeg';
import info from '../../img/info.png';
import running from "../../img/running.jpg";
import react from "../../img/react.jpg";
import create from "../../img/create.jpg";
import es6 from "../../img/es6.jpg";
import chromium from "../../img/chromium.jpg";

module.exports = [
  {
    title: '个人信息',
    link: "https://github.com/yursile/",
    excerpt: 
    "2015年6月毕业于重庆理工大学，2015年8月到16年12月在搜狐担任前端工程师，主要负责搜狐移动工坊品牌H5的制作，以及对媒体内容部包括新闻，体育，军事，时尚，文化等子部门提供H5以及PC专题页的技术支持。以下是我个人的简要说明",
    imageUrl: info
  },
  {
    title: '原生ES5，ES6',

    excerpt: '熟练掌握原生JavaScript，使用面向对象的思想编程，对继承，原型作用域链，js闭包，垃圾回收机制有深入理解，能使用一些设计模式来为项目解藕。熟悉ES6的用法',
    imageUrl: "../../img/es6.jpg"
  },
  {
    title: '渲染技术',

    excerpt: '熟练运用css3,canvas,svg,webgl开发移动端h5，及pc端视觉效果页面。并开发多个setup template。托管在github上，后面会有相应技术的例子',
    imageUrl: "../../img/chromium.jpg"
  },
  {
    title: '渲染优化',

    excerpt: '熟悉网页渲染原理，性能优化，css3d属性对渲染的影响，各浏览器内核，熟练配合Chrome develop tools各功能调试性能。',
    imageUrl: imgUrl4
  },
  {
    title: '前端工作流',
    link: "https://github.com/yursile/",
    excerpt: '熟悉各种前端打包工具,grunt，gulp，webpack，个人搭建了多个H5的开发脚手架，托管在个人github上，熟悉less，sass预编译。',
    imageUrl: imgUrl3
  },
  {
    title: '前端类库',

    excerpt: '熟悉react,pixi,createjs,snap,d3,threejs,krpano,jquery等类库及其衍生类库使用，研究过jquery源码。后面会有相应技术的例子',
    imageUrl: imgUrl3
  },
  {
    title: '后台',
    link: "http://baidu.com",
    excerpt: '熟悉nodejs开发npm插件，以及后台Java Web（SSH）开发。熟练使用git，linux命令，了解linux服务器运维。',
    imageUrl: imgUrl3
  },
  {
    title: '其他',
    link: "http://baidu.com",
    excerpt: '熟悉http协议，熟悉vscode，sublime，myeclipse,以及与设计配合PS，AI，FL，AN等工具开发H5，良好英文文档阅读能力，较强的学习能力，有坚韧的毅力。敢用1星插件。',
    imageUrl: imgUrl3
  },
  {
    title: 'createjs',
    link: "http://m.sohu.com/c/20252/",
    excerpt: '这是新闻中心神吐嘈的年终策划，采用createjs渲染canvas，snap操作SVG，与设计共同研究出一套制作动画H5的方案，采用AI制作SVG，FL转化为createjs代码，再操作转换后的createjs的lib',
    imageUrl: "../../img/create.jpg"
  },
  {
    title: 'pixi',
    link: "http://m.sohu.com/c/19713/",
    excerpt: '这是奥运期间采用pixi为体育部门做的3个h5小游戏，采用websocket进行双人对战，另外两个小游戏在这个链接里有外链。服务器及后台代码均独立完成',
    imageUrl: "../../img/running.jpg"
  },
  {
    title: 'threejs',
    link: "http://dongjian.sohu.com/",
    excerpt: '这是2015年新闻中心年终策划，当时毕业3个月，独立花了一个月时间研究krpano，threejs和搭建Linux服务器，当时技术比较粗糙，而且当时android端微信不支持webgl，所以写了pc,ihpone,android三端代码',
    imageUrl: imgUrl3
  },
  {
    title: 'krpano',
    link: "http://dongjian.sohu.com/zlwds/",
    excerpt: '这是新闻中心两会期间的krpano产品，除前端开发外，搭建服务器和后台数据都是一人独立完成',
    imageUrl: imgUrl3
  },
  {
    title: 'react',
    link: "http://fashion.sohu.com/s2016/fashionawards/index.shtml",
    excerpt: '这是时尚频道的时尚盛典预热专题页，采用react编写。',
    imageUrl: "../../img/react.jpg"
  },
];

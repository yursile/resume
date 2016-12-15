import "../css/index.less";
var React = require('react');
var ReactDOM = require('react-dom');
var ReactCanvas = require('react-canvas');
var Page = require('./tools/page');
var articles = window.data;



import imgUrl1 from '../img/01.jpeg';
import imgUrl2 from '../img/02.jpeg';
import imgUrl3 from '../img/03.jpeg';
import imgUrl4 from '../img/04.jpeg';
import info from '../img/info.png';
import running from "../img/running.jpg";
import react from "../img/react.jpg";
import create from "../img/create.jpg";
import es6 from "../img/es6.jpg";
import chromium from "../img/chromium.jpg";
import fps from "../img/fps.jpg";
import webpack from "../img/webpack.jpg";
import fe from "../img/fe.jpg";
import be from "../img/be.jpg";
import tools from "../img/tools.jpg";
import hz from "../img/hangzhou.png";
import dj from "../img/dongjian.jpg";
import kp from "../img/kp.jpg";



var Surface = ReactCanvas.Surface;
var ListView = ReactCanvas.ListView;

class ArrayUtil{
  static changeIndex(array, i) {
    for (let j = 0; j < i; j++) {
      array.push(array.shift());
    }
    return array;
  }
}

var App = React.createClass({
  componentWillMount: function () {
   window.initialPage = ((parseInt(window.localStorage.getItem("initialPage"))%articles.length)||0);
   if (window.history.length == parseInt(window.localStorage.getItem("history"))) {
       window.localStorage.removeItem("initialPage")  
   }
    if (!!initialPage)
      articles = ArrayUtil.changeIndex(articles,initialPage);

  },

  render: function () {
    var size = this.getSize();
    return (
      <Surface top={0} left={0} width={size.width} height={size.height}>
        <ListView
          style={this.getListViewStyle()}
          snapping={true}
          scrollingDeceleration={0.92}
          scrollingPenetrationAcceleration={0.13}
          numberOfItemsGetter={this.getNumberOfPages}
          itemHeightGetter={this.getPageHeight}
          itemGetter={this.renderPage} />
      </Surface>
    );
  },

  renderPage: function (pageIndex, scrollTop) {
    window.currentPage = window.initialPage + pageIndex;
    var size = this.getSize();
    var article = articles[pageIndex % articles.length];
    var pageScrollTop = pageIndex * this.getPageHeight() - scrollTop;
    return (
      <Page
        width={size.width}
        height={size.height}
        article={article}
        pageIndex={pageIndex}
        scrollTop={pageScrollTop}
        />
    );
  },

  getSize: function () {
    return document.getElementById('app').getBoundingClientRect();
  },

  // ListView
  // ========

  getListViewStyle: function () {
    var size = this.getSize();
    return {
      top: 0,
      left: 0,
      width: size.width,
      height: size.height
    };
  },

  getNumberOfPages: function () {
    return 1000;
  },

  getPageHeight: function () {
    return this.getSize().height;
  }

});


// window.onbeforeunload = function () {  
    
//     var n = window.event.screenX - window.screenLeft;   
//     var b = n > document.documentElement.scrollWidth-20;   
//     if (b && window.event.clientY < 0 || window.event.altKey) {
//         alert("这是一个关闭操作而非刷新");   
//         window.event.returnValue = ""; //此处放你想要操作的代码 
//     }else{
//         window.localStorage.removeItem("initialPage")  
//     }
// } 

ReactDOM.render(<App />, document.getElementById('app'));

import "../css/index.less";
var React = require('react');
var ReactDOM = require('react-dom');
var ReactCanvas = require('react-canvas');
var Page = require('./tools/page');
var articles = require('./data/data');



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

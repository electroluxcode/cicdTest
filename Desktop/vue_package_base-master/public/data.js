
//  2. 数据的获取（主线程发送消息给woker）
addEventListener("message", function (evt) {
    // evt.data
    console.log(evt.data,"接受：子组件的数据");
  });

  postMessage("发送：子组件的数据");
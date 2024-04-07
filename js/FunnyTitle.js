<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '他转身就走了 像下定了某种决心';
         clearTimeout(titleTime);
     }
     else {
         document.title = '靓仔，你终于回来了！！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
 
 
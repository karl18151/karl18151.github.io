<!--�������Ц����-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '�������ߣ�';
         clearTimeout(titleTime);
     }
     else {
         document.title = '��˧�ͻ�����' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
 
 
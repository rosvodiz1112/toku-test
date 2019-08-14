//ナビゲーション

$(function() {
  var $win = $(window),
      $cloneNav = $('#top-menu').clone().addClass('clone-nav').appendTo('body'),
      showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 800 && value <3600 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});

//スムーズスクロール    

$(function () {
          $('a[href^="#"]').click(function () {
              // スクロールの速度
              var speed = 800;
              var href = $(this).attr("href");
              var target = $(href == "#" || href == "" ? 'html' : href);
              var position = target.offset().top;
              $('body,html').animate({
                  scrollTop: position
              }, speed, 'swing');
              return false;
          });
      });

//pageTopボタン

$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

 
//ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>800){


    topBtn.fadeIn();

  }else{

    topBtn.fadeOut();

  } 
});


topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});


});
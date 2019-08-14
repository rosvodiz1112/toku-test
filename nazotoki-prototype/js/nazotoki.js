
$(function () {
  //ヒント非表示
  $('.hintSentence').hide();
  //ヒント表示⇔非表示
  $('.hintTitle').click(function() {
    $(this).next().slideToggle();
  });
  //解答ボタン1
  //「サンマノ」「さんまの」「サンマの」「秋刀魚の」「秋刀魚ノ」は正解
  $(".answerBtn.1").on("click", function() {
    var value = $(this).prev().val();
    if(value === "サンマノ"){
      $('.overlay, .modalWindow.true1').fadeIn();
    }else if(value === "さんまの"){
      $('.overlay, .modalWindow.true1').fadeIn();
    }else if(value === "サンマの"){
      $('.overlay, .modalWindow.true1').fadeIn();
    }else if(value === "秋刀魚の"){
      $('.overlay, .modalWindow.true1').fadeIn();
    }else if(value === "秋刀魚ノ"){
      $('.overlay, .modalWindow.true1').fadeIn();
    }else{
      $('.overlay, .modalWindow.false').fadeIn();
    }
  });
    
  //解答ボタン2
  //「KEN」「ＫＥＮ」「けん」「ケン」「剣」は正解
  $(".answerBtn.2").on("click", function() {
    var value = $(this).prev().val();
    if(value === "KEN"){
      $('.overlay, .modalWindow.true2').fadeIn();
    }else if(value === "ＫＥＮ"){
      $('.overlay, .modalWindow.true2').fadeIn();
    }else if(value === "けん"){
      $('.overlay, .modalWindow.true2').fadeIn();
    }else if(value === "ケン"){
      $('.overlay, .modalWindow.true2').fadeIn();
    }else if(value === "剣"){
      $('.overlay, .modalWindow.true2').fadeIn();
    }else{
      $('.overlay, .modalWindow.false').fadeIn();
    }
  });
    
  //解答ボタン3
  //「大船渡」「オオフナト」「おおふなと」「大船渡市」は正解
  $(".answerBtn.3").on("click", function() {
    var value = $(this).prev().val();
    if(value === "大船渡"){
      $('.overlay, .modalWindow.true3').fadeIn();
    }else if(value === "オオフナト"){
      $('.overlay, .modalWindow.true3').fadeIn();
    }else if(value === "おおふなと"){
      $('.overlay, .modalWindow.true3').fadeIn();
    }else if(value === "大船渡市"){
      $('.overlay, .modalWindow.true3').fadeIn();
    }else{
      $('.overlay, .modalWindow.false').fadeIn();
    }
  });
 
  //解答ボタン4
  //「トークロゴ」「とーくろご」「とーくロゴ」「TOKUロゴ」「ToKuロゴ」「ＴＯＫＵロゴ」「ＴｏＫｕロゴ」「TOKUろご」「ToKuろご」は正解
  $(".answerBtn.4").on("click", function() {
    var value = $(this).prev().val();
    if(value === "トークロゴ"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "とーくろご"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "とーくロゴ"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "TOKUロゴ"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "ToKuロゴ"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "ＴＯＫＵロゴ"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "ＴｏＫｕロゴ"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "TOKUろご"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else if(value === "ToKuろご"){
      $('.overlay, .modalWindow.true').fadeIn();
    }else{
      $('.overlay, .modalWindow.false').fadeIn();
    }
  });
 

  //解答ボタン5(中間回答ボタン1)
  //「さんまの剣おおふなと」「さんまの剣、おおふなと」「さんまの剣,おおふなと」「さんまの剣.おおふなと」は正解
  $(".answerBtn.5").on("click", function() {
    var value = $(this).prev().val();
    if(value === "さんまの剣、おおふなと"){
      $('.overlay, .modalWindow.true4').fadeIn();
    }else if(value === "さんまの剣おおふなと"){
      $('.overlay, .modalWindow.true4').fadeIn();
    }else if(value === "さんまの剣　おおふなと"){
      $('.overlay, .modalWindow.true4').fadeIn();
    }else if(value === "さんまの剣,おおふなと"){
      $('.overlay, .modalWindow.true4').fadeIn();
    }else if(value === "さんまの剣, おおふなと"){
      $('.overlay, .modalWindow.true4').fadeIn();
    }else if(value === "さんまの剣.おおふなと"){
      $('.overlay, .modalWindow.true4').fadeIn();
    }else{
      $('.overlay, .modalWindow.false').fadeIn();
    }
  });

  // モーダルウィンドウの配置場所決定
  locateCenter();
  $(window).resize(locateCenter);
  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();

    let cw = $('.modalWindow').outerWidth();
    let ch = $('.modalWindow').outerHeight();

    $('.modalWindow').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });
  }
  //モーダルウィンドウを閉じる
  $('.close').on('click', function() {
    $('.overlay, .modalWindow').fadeOut();
  });
});




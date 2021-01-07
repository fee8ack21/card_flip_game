$(document).ready(function () {

    // 執行卡牌隨機排列函式
    random();

    // 初始畫面
    $('.card').addClass('rotate');

    // 倒數計時
    setTimeout(() => {
      $('.card').removeClass('rotate');
      // 執行點擊判斷函式
      loop();
    }, 1000);

    // 卡牌隨機排列
    function random() {
      for (let i = 0; i <= $('.card').length; i++) {
        var orderNumber = Math.floor(Math.random() * 10) + 1;
        $('.card:nth-child(' + i + ')').css('order', orderNumber)
      }
    }

    // 點擊判斷
    function loop() {
      var i = 0;
      var img = [];
      var imgInfo = [];
      var imgLi = [];
      // 
      $('.card').click(function () {
        if(!$(this).hasClass('rotate')){
          $(this).addClass('rotate');
          // 
          img[i] = $(this);
          imgInfo[i] = $(this).find('.front').attr('src');
          imgLi[i] = $(this);
          i++;
          // 
          if ($('.rotate').length % 2 == 0) {
            // console.log(img);
            // console.log(imgInfo);
            // console.log(imgLi);
            if (imgInfo[0] == imgInfo[1]) {
              if ($('.rotate').length == $('.card').length) {
                setTimeout(() => {
                  location.reload();
                }, 1000);
              } else {
                $('.card').off('click');
                setTimeout(() => {
                  loop()
                }, 500);
              }
            } else {
              $('.card').off('click');
              setTimeout(() => {
                imgLi[0].removeClass('rotate');
                imgLi[1].removeClass('rotate');
                loop()
              }, 500);
            }
          }
        }
      })
      $('.card.rotate').off('click')
    }
  })

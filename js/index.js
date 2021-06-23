$(function(){
   let backtop =  $('.backtop').hide()
    new WOW({
        offset: 200,
      }).init();
      var swiper = new Swiper('#banner', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay:true,
        pagination: {
          el: '#banner>.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      var swiper1 = new Swiper('#swiper-scroll', {
        loop: true, //允许从第一张到最后一张，或者从最后一张到第一张  循环属性
        slidesPerView: 5, // 设置显示7张
        freeMode: true, // 使幻灯片滑动时不止滑动一格，且不会自动贴合
        slidesPerGroup: 1, //定义1张图片为一组
        autoplay: true, //可选选项，自动滑动
        speed: 3000, //设置过度时间
        grabCursor: true, //鼠标样式根据浏览器不同而定
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
      });
      
      $(window).scroll(function(){
          let sTop = $(window).scrollTop()
            if(sTop > 800){
                backtop.show().addClass('bounceInRight').removeClass('bounceOutRight')
            }else {
                backtop.removeClass('bounceInRight').addClass('bounceOutRight')
            }
      })
      backtop.click(function(){
        $('body,html').animate({
            scrollTop: 0
          },
          500);
      })
      
      $('#myModal').on('show.bs.modal', function (e) {
            var Targe  = e.relatedTarget
            var present = $(Targe).parent().parent()
            $('.modal-title').text(present.find('.media-heading').text())
            var data = '';
            var des = present.find('.des2').html()
            data = `${des}`
            $('.modal-body').append(data)
      })


      $('#myModal').on('hidden.bs.modal', function (e) {
         $('.modal-body,.modal-title').empty()
      })

      

      
      $('#submit_btn').on('click',function(){
          var contacts = $('#contacts').val()
          var tel = $('#tel').val()
          if(contacts == ''){
            alert('姓名不能为空')
            return
          }
          if(!checkPhone(tel)){
            return
          }

         alert('提交成功')
      })  

      function checkPhone(str) {
        var mobile = str || '';
        var tel = /^0\d{2,3}-?\d{7,8}$/;
        var phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
        if(mobile.length == 11){//手机号码
          if(phone.test(mobile)) {
            return true;
          }
        }else if(mobile.length == 13 && mobile.indexOf("-") != -1 ){//电话号码
          if(tel.test(mobile)) {
            return true;
          }
        }
        alert('请输入有效的号码！'); 
      }
    
})



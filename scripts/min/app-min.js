!function(){function s(s,e){$(s).click(function(){$("html, body").animate({scrollTop:$(e).offset().top-150},"slow")})}function e(s,e){$(s).click(function(){$(".site-container").addClass("non-click"),$(".site-container").append(a),$(".black-box").append(e),setTimeout(function(){$(".black-box").addClass("show-black")},100)})}var a="<div class='black-box'></div>",o="<div class='pop-image'><img src='assets/images/Course_Layout/CourseLayout.jpg' class='black-image' alt=''><img src='assets/images/Course_Layout/CloseButton.png' class='close' alt=''></div>",i="<div class='pop-image'><iframe class='black-image' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5966856902155!2d-89.18422024890877!3d42.47886577907686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88089c0fdcf21237%3A0xabfd506e9c7dfd9f!2s7330+Yale+Bridge+Rd%2C+Rockton%2C+IL+61072!5e0!3m2!1sen!2sus!4v1468881271147' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe><img src='assets/images/Course_Layout/CloseButton.png' class='close' alt=''></div>",l="<div class='pop-image'><img src='assets/images/Gallery/GalleryImage_1.jpg' class='black-image'><img src='assets/images/Gallery/Arrow_Left.png' id='left'><img src='assets/images/Gallery/Arrow_Right.png' id='right'><img src='assets/images/Course_Layout/CloseButton.png' class='close' alt=''></div>",t=["assets/images/Gallery/GalleryImage_1.jpg","assets/images/Gallery/GalleryImage_2.jpg","assets/images/Gallery/GalleryImage_3.jpg"],c=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);$(window).scroll(function(){var s=$(this).scrollTop(),e=$(window).height();console.log(s),console.log("window height:  "+e);var a=e-s;if(console.log("DIFF: "+a),s>60?$(".hidden-nav img").css({bottom:"-67px"}):($(".hidden-nav").removeClass("show"),$(".hidden-nav img").css({bottom:0})),s>=0){var o=-40;$("#clouds").css({top:s/2}),$(".about").css({"margin-top":o-s/4})}s>$(".info-images").offset().top-e/1.2&&$(".image").each(function(s){setTimeout(function(){$(".image").eq(s).addClass("trans-show")},200*(s+1))}),150>s&&$(".image").each(function(s){setTimeout(function(){$(".image").eq(s).removeClass("trans-show")},200*(s+1))}),s>$(".info-images").offset().top-e/1.7&&$(".info-div").addClass("slide-up"),20>s&&$(".info-div").removeClass("slide-up")}),s(".price-scroll",".pricing"),s("#scroll","#about"),s(".about-scroll","#about"),s(".contact-scroll",".contact"),$(".hidden-nav img").click(function(){$(".hidden-nav").toggleClass("show")}),$("body").on("click",".close",function(){$(".site-container").removeClass("non-click"),$(".black-box").removeClass("show-black"),setTimeout(function(){$(".pop-image").remove(),$(".black-box").remove()},500)});var n=0;$("body").on("click","#right",function(){n+=1,n>t.length-1&&(n=0),$(".black-image").fadeOut(300,function(){$(".black-image").attr("src",t[n]),$(".black-image").fadeIn(600)})}),$("body").on("click","#left",function(){n-=1,0>n&&(n=t.length-1),$(".black-image").fadeOut(300,function(){$(".black-image").attr("src",t[n]),$(".black-image").fadeIn(600)})}),e(".location",i),e(".course",o),e(".images",l)}();
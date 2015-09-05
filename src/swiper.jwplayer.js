(function (Swiper) {

  Swiper.prototype.plugins.jwplayer = function (swiper) {
    
    'use strict';

    return {
        
        onSlideChangeStart: function () {

          var jwplayer_elements = swiper.slides[swiper.previousIndex].getElementsByClassName('jwplayer');
          
          if ( jwplayer_elements.length > 0) {
            for (var i = 0; i < jwplayer_elements.length; i++){
              jwplayer(jwplayer_elements[i].id).stop();
            }
          }

        }

    };

  };
    

})(Swiper);
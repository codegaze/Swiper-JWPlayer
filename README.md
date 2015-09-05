**Swiper-JW Player** is a very small script that extends iDangero.us [Swiper](http://www.idangero.us/swiper/) to avoid setting up the configuration for stopping [JW Player](http://www.jwplayer.com/) videos between slide navigation in each Swiper instance. 

### How it works

Each time Swiper runs `onSlideChangeStart()`, this script searches for any jwplayer instance in the previous slide and stops it, without messing with the code specified in the configuration for the `onSlideChangeStart()`.

### Usage

Just include the `swiper.jwplayer.js` or `swiper.jwplayer.min.js` script file in your page after your Swiper script.

### Compatibility

JW Player 6, 7

#### Notes

In my previous experience with JW Player paid ad version(v6), the `stop()` function will not work till the end of the video ad.

#### Todo

* Check once for player instances and cache it. 
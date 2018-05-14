import '../scss/main.scss';
import './test';

/*** plugins ***/
import $ from 'jquery';
import {TweenMax, Power2, TimelineLite} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Flickity from "flickity";

/**
 * Since this script is included in the <head> we have to listen
 * for the DOMContentLoaded event.
 */

document.addEventListener("DOMContentLoaded", function(event) {

  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    prevNextButtons: true,
    pageDots: false
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity( '.main-carousel', {
    // options
  });

  $('.flickity-button').html('<svg width="12" height="8" viewBox="0 0 177 118"><path d="M117.3,47V0l58.9,58.6l-58.9,59.2V70.3H0.3V47H117.3z"></path></svg>');


  $('a').each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
    });
  });

  var header = $('.header'),
      container1 = $('#section1'),
      container2 = $('#section2'),
      tl = new TimelineLite();

  tl.to('.nav', .8, {x:0, opacity:1, ease: Expo.easeOut, force3D:true})
    .to('.nav__container', 1, {y:0, opacity:1, ease: Expo.easeOut})
    .to(header, 1, {y:0, opacity:1, ease: Expo.easeOut}, "-=.5")
    .to(container1, 1, {y:0, opacity:1, ease: Expo.easeOut}, "-=1")
    .to(container2, 1, {y:0, opacity:1, ease: Expo.easeOut}, "-=1");


  $('#lastTransactions, #billsDue').each(function(){
    $(this).on('click', function(){
      $(this).addClass('active').parent().siblings().find('a').removeClass('active');

      function fadeOutTransactions(){
        TweenMax.to('#lastTransactions__content', .5, {y:10, opacity:0, autoAlpha:0, ease: Expo.easeOut, force3D:true});
        TweenMax.to('#billsDue__content', .5, {y:0, opacity:1, autoAlpha:1, ease: Expo.easeOut, force3D:true, delay:.2});
        TweenMax.to('#questionContainer', .3, {y:-170, ease: Expo.Power0, delay:.1});
      };

      function fadeOutBills(){
        TweenMax.to('#billsDue__content', .5, {y:10, opacity:0, autoAlpha:0, ease: Expo.easeOut, force3D:true});
        TweenMax.to('#lastTransactions__content', .5, {y:0, opacity:1, autoAlpha:1, ease: Expo.easeOut, force3D:true, delay:.2});
        TweenMax.to('#questionContainer', .3, {y:0, ease: Expo.Power0, force3D:true});
      };

      if ( $(this).is('#billsDue') ) {
        fadeOutTransactions();
      } else {
        fadeOutBills();
      }

    });
  });

});

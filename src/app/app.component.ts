import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortFolio';
  constructor(){
    jQuery(function () {
      $('nav .nav_links').children().on('click',function(){
        let left = $(this).offset().left - $('nav').offset().left
        let width = $(this).css('width')
        $('.contact').removeClass('onit');
        $(this).children('a').addClass('active')
        $(this).siblings().children('a').removeClass('active')
        $('.marker').css('opacity',1).css('width',width).css('left',left)
      });
      $('.contact').on('click',function(){
        $(this).addClass('onit');
        $('nav .nav_links').children().children().removeClass('active');
        $('.marker').css('width',0).css('opacity',0);
      })
    });
  }
}

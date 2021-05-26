import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import Typed from 'typed.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortFolio';
  s;


  constructor() {
    let flag = 0;
    this.s = {
      html: 95,
      css: 72,
      js: 69,
      angular: 83,
      sql: 75,
      java: 78,
      python: 71,
      node: 23
    }

    jQuery(function () {
      if(window.scrollY > 20){
        $('.toolbar').addClass('scroll');
      }else{
        $('.toolbar').removeClass('scroll');
        gsap.from('.toolbar',{y:-30,duration:1,opacity:-2});
      }
      if(window.scrollY > 100){
        $('.toup').addClass('scrolls');
      }else{
        $('.toup').removeClass('scrolls');
      }
      $(window).on('scroll',function(){
        if(this.scrollY > 20){
          $('.toolbar').addClass('scroll');
        }else{
          $('.toolbar').removeClass('scroll');
        }
        if(window.scrollY > 100){
          $('.toup').addClass('active');
        }else{
          $('.toup').removeClass('active');
        }
      });

      gsap.registerPlugin(ScrollTrigger)

      // gsap.to('.marker',{left: $('#aboutme').offset().left - $('nav').offset().left - 20, width: $('#aboutme').css('width'), scrollTrigger:{
      //   trigger: '.about',
      //   start: 'top center',
      //   // markers: {startColor: "green", endColor: "red", fontSize: "20px"},
      //   once: false
      // }})

      // gsap.to('.marker',{left: $('#homes').offset().left - $('nav').offset().left - 20, width: $('#homes').css('width'), scrollTrigger:{
      //   trigger: '.home',
      //   start: 'top top',
      //   markers: {startColor: "green", endColor: "red", fontSize: "20px"},
      //   once: false
      // }})
      
      gsap.from('#intro',{x:-100,duration:.75,delay:1.3,opacity:0});
      gsap.from('#image',{xPercent:10,duration:.75,delay:1.8,opacity:0});
      gsap.from('.scrolldown',{y:-40,duration:.75,delay:1.8,opacity:0})

      gsap.from('.about .box',{y:30,opacity:0,scrollTrigger:{
        trigger: '.about',
        toggleActions: "play pause resume reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        // can be "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"
        start: 'top center',
        // markers: {startColor: "green", endColor: "red", fontSize: "16px"}
      }})
      gsap.to('.wim',{x: window.innerWidth-100,scrollTrigger:{
        trigger: '.about',
        start: 'top bottom',
        scrub: 5
      }})
      gsap.from('.wic',{x: window.innerWidth-100,scrollTrigger:{
        trigger: '.services',
        start: 'top bottom',
        scrub: 5
      }})
      gsap.to('.wik',{x: window.innerWidth-100,scrollTrigger:{
        trigger: '.skills',
        start: 'top bottom',
        scrub: 5
      }})
      gsap.from('.wid',{x: window.innerWidth-100,scrollTrigger:{
        trigger: '.projects',
        start: 'top bottom',
        scrub: 5
      }})
      gsap.to('.wwm',{x: window.innerWidth-100,scrollTrigger:{
        trigger: '.teams',
        start: 'top bottom',
        scrub: 5
      }})
      gsap.from('.gito',{x: window.innerWidth-100,scrollTrigger:{
        trigger: '.contactus',
        start: 'top bottom',
        scrub: 5
      }})

      gsap.from('.s1',{x:-30,y:-30,duration:.25,opacity:0,scrollTrigger:{
        trigger: '.services',
        start: 'top+=280 center',
        toggleActions: "play pause resume reverse"
      }})
      gsap.from('.s2',{x:30,y:-30,duration:.25,opacity:0,scrollTrigger:{
        trigger: '.services',
        start: 'top+=280 center',
        toggleActions: "play pause resume reverse"
      }})
      gsap.from('.s3',{x:-30,y:30,duration:.25,opacity:0,scrollTrigger:{
        trigger: '.services',
        start: 'top+=280 center',
        toggleActions: "play pause resume reverse"
      }})
      gsap.from('.s4',{x:30,y:30,duration:.25,opacity:0,scrollTrigger:{
        trigger: '.services',
        start: 'top+=280 center',
        toggleActions: "play pause resume reverse"
      }})

      gsap.from('.pro3',{x:-50,opacity:0,duration:.75,scrollTrigger:{
          trigger: '.projects',
          start: 'top+=200 center',
          toggleActions: "play pause resume reverse"
      }})
      gsap.from('.pro2',{x:50,opacity:0,duration:.75,scrollTrigger:{
        trigger: '.projects',
        start: 'top+=200 center',
        toggleActions: "play pause resume reverse"
    }})
    gsap.from('.pro1',{y:50,opacity:0,duration:.75,scrollTrigger:{
      trigger: '.projects',
      start: 'top+=200 center',
      toggleActions: "play pause resume reverse"
  }})
    gsap.from('.c1',{y:70,opacity:0,duration:.5,scrollTrigger:{
      trigger: '.teams',
      start: 'top+=200 center',
      toggleActions: "play pause resume reverse"
    }})
    gsap.from('.c2',{y:70,opacity:0,duration:.5,scrollTrigger:{
      trigger: '.teams',
      start: 'top+=200 center',
      toggleActions: "play pause resume reverse"
    }})
    gsap.from('.c3',{y:70,opacity:0,duration:.5,scrollTrigger:{
      trigger: '.teams',
      start: 'top+=200 center',
      toggleActions: "play pause resume reverse"
    }})

      gsap.to('.html',{width: "93%", scrollTrigger:{
        trigger:".visual",
        start:"top center", 
        // markers: {startColor: "green", endColor: "red", fontSize: "20px"}
      }}).duration(2)
      gsap.to('.css',{width: "72%",scrollTrigger:{
        trigger:".visual",
        start:"top center",
        // markers: {startColor: "green", endColor: "red", fontSize: "40px"}
      }}).duration(2)
      gsap.to('.js',{width: "69%",scrollTrigger:{
        trigger:".visual",
        start:"top center",
        // markers: {startColor: "green", endColor: "red", fontSize: "40px"}
      }}).duration(2)
      gsap.to('.angular',{width: "83%",scrollTrigger:{
        trigger:".visual",
        start:"top center",
        // markers: {startColor: "green", endColor: "red", fontSize: "40px"}
      }}).duration(2)
      gsap.to('.java',{width: "78%",scrollTrigger:{
        trigger:".visual",
        start:"top center",
        // markers: {startColor: "green", endColor: "red", fontSize: "40px"}
      }}).duration(2)
      gsap.to('.python',{width: "71%",scrollTrigger:{
        trigger:".visual",
        start:"top center",
        // markers: {startColor: "green", endColor: "red", fontSize: "40px"}
      }}).duration(2)
      gsap.to('.sql',{width: "75%",scrollTrigger:{
        trigger:".visual",
        start:"top center",
        // markers: {startColor: "green", endColor: "red", fontSize: "40px"}
      }}).duration(2)
      gsap.to('.node',{width: "23%",scrollTrigger:{
        trigger:".visual",
        start:"top center",
        // markers: {startColor: "green", endColor: "red", fontSize: "40px"}
      }}).duration(2)

      var typer = new Typed('#animate',{
        strings:[
          'Programmer',
          'Backend developer',
          'Fullstack developer',
          'UI/UX designer'
        ],
        typeSpeed: 80,
        loop: true,
        smartBackspace:true,
        backSpeed: 30,
        backDelay: 800,
        startDelay: 500,
      });
      $('footer h4 p').on('click',function(){
        $('html').animate({scrollTop:0});
      });
      $('.toup').on('click',function(){
        $('html').animate({scrollTop:0});
      });

      //active links
      const sections = $('section');
      const nav_links = $('.toolbar nav ul li a');
      var now = ""
      for(var i =0;i<sections.length;i++){
        const sectionTop = sections[i].offsetTop;
        const height = sections[i].clientHeight;
        if(pageYOffset >= (sectionTop-height/2)){
          now = sections[i].getAttribute('id');
        }
      }
      if(now == "cu"){
        $('nav .nav_links').children().children().removeClass('active');
        $('.contact').addClass('onit');
        $('.marker').css('width', 0).css('opacity', 0);
      }
      for(var i=0;i<nav_links.length;i++){
        let link = nav_links[i];
        if(link.classList.contains(now)){
          $('.contact').removeClass('onit');
          $(link).addClass('active').parent('li').siblings().children('a').removeClass('active');
          let left = $(link).offset().left - $('nav').offset().left - 20;
          let width = $(link).css('width');
          $('.marker').css('width', width).css('left', left).css('opacity',1);
        }
      }



      $(window).on('scroll',function(){
        let current = ''
        for(var i =0;i<sections.length;i++){
          const sectionTop = sections[i].offsetTop;
          const height = sections[i].clientHeight;
          if(pageYOffset >= (sectionTop-height/2)){
            current = sections[i].getAttribute('id');
          }
        }
        if(current == "cu"){
          $('nav .nav_links').children().children().removeClass('active');
          $('.contact').addClass('onit');
          $('.marker').css('width', 0).css('opacity', 0);
        }
        for(var i=0;i<nav_links.length;i++){
          let link = nav_links[i];
          if(link.classList.contains(current)){
            $('.contact').removeClass('onit');
            $(link).addClass('active').parent('li').siblings().children('a').removeClass('active');
            let left = $(link).offset().left - $('nav').offset().left - 20;
            let width = $(link).css('width');
            $('.marker').css('width', width).css('left', left).css('opacity',1);
          }
        }
      })

      $('nav .nav_links').children().on('click', function () {
        let left = $(this).offset().left - $('nav').offset().left - 20
        let width = $(this).css('width')
        $('.contact').removeClass('onit');
        $(this).children('a').addClass('active')
        $(this).siblings().children('a').removeClass('active')
        // $('.marker').css('opacity', 1).css('width', width).css('left', left)
      });
      $('.contact').on('click', function () {
        $(this).addClass('onit');
        // let links = $('.toolbar nav li');
        // for(var i =0;i<links.length;i++){
        //   let link = links[i]
        //   if($(link).children('a').hasClass('active'))
        //     $(link).children('a').removeClass('active')
        // }
        // $('nav ul li').siblings().children('a').removeClass('active');
        $('nav .nav_links').children().children().removeClass('active');
        $('.marker').css('width', 0).css('opacity', 0);
      }); 
      });
    }

    untouch(form) {
      let tl = gsap.timeline();
      tl
      .to(".fa-paper-plane",{x: 100, y: -43, fontSize: 30})
      // .to(".fa-paper-plane",{x: 350, y: -60})
      .to(".fa-paper-plane",{x: window.innerWidth, y: -520});
      // setTimeout(()=>{
      //   $('.sub i').css('display','none');
      // },1000);
      // $('.sub').css('width','110px');
      Object.keys(form.controls).forEach(key => {
        form.get(key).markAsUntouched();
      });
    }

    toHome(){
      document.getElementById('h').scrollIntoView();
    }

    toAboutUs(){
      document.getElementById('au').scrollIntoView();
    }

    toSkills(){
      document.getElementById('s').scrollIntoView();
    }

    toProjects(){
      document.getElementById('p').scrollIntoView();
    }

    toServices(){
      document.getElementById('se').scrollIntoView();
    }

    toContactUs(){
      document.getElementById('cu').scrollIntoView();
    }

    toTeam(){
      document.getElementById('t').scrollIntoView();
    }

  }

import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import Typed from 'typed.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FormGroup } from '@angular/forms';
import { SendService } from './send.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

export class content {
  constructor(
    public name: string,
    public email: string,
    public mobile: string = '0',
    public message: string
  ) { }
  get() {
    return this.mobile
  }
}

class project {
  constructor(
    public id: number,
    public name: string,
    public bg: string,
    public link: string,
    public details: string,
    public tech: string[],
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortFolio';
  currentYear = new Date().getFullYear()
  mobileWidth = window.screen.width <= 550;
  s = {
    html: 95,
    css: 72,
    js: 78,
    angular: 78,
    sql: 65,
    java: 76,
    spring: 58,
    react: 86
  }
  projects = [
    new project(1, 'EasyNotes', '../assets/projects/easynotes/logo.png',
      "https://easynotes-en.herokuapp.com/",
      'A notes manager, in which you can create your notes either by typing or dictating it\'s content, you can pin your important notes,create colour-coded notes and manage it anytime & anywhere',
      ['Angular', 'Sass', 'Django', 'Firebase', 'jQuery', 'Python', 'SpeechRecognition']),
    new project(2, 'AcuteVision', '../assets/projects/forweb/logo.jpeg',
      "https://github.com/kunal2899/AcuteVision",
      'A smart attendance application available for both students and teachers where student can track their attendance status in every aspect and teacher can take attendance just by one click through face recognition.',
      ['Angular', 'Sass', 'Django', 'OpenCV', 'Python', 'jQuery']),
    new project(3, 'AccSoftware', '../assets/projects/accsoft/logo.png',
      "https://github.com/kunal2899/AccSoftware",
      'An account management software where you can manage your daily expenses and source of incomes. It has various features by which you can analyse your every month expenses and manage it.',
      ['Angular', 'Sass', 'jQuery', 'Spring', 'Java', 'MySQL']),
    new project(4, 'GradAlly', '../assets/projects/gradally/logo.png',
      "https://github.com/kunal2899/GradAlly",
      'A portal designed for students where they can buy/sell used books, the aim of developing this to unite students so they can found everything need at one place.',
      ['HTML5', 'CSS3', 'JavaScript', 'Spring', 'Java', 'MySQL']),
    new project(5, 'ScorePanel', '../assets/projects/scorepanel/logo.png',
      "https://kunal2899.github.io/ScorePanel",
      'A real time score calculator application, in which you can keep track of runs/wickets/balls after each ball, this app is useful for clean-and-fair game with nearly zero chances of any cheating done in run calculation.',
      ['HTML5', 'CSS3', 'JavaScript']),
  ]

  c: content = new content('', '', '', '');

  skillsContent = `As I am a Frontend Developer so I have a solid grasp of fundamental
  frontend technologies like HTML, CSS, JavaScript and I use React and
  Angular to develop a single-page frontend application, jQuery for
  functionalities and awesome animations, and Sass for styling. Also, I
  learned Java EE, Spring Boot MVC, and Hibernate ORM and implemented
  them in my full stack projects but I don't have any professional
  experience in this. For the backend, I use MySQL Database and REST API
  for URL breakpoint connections, also learning about the NoSQL backend
  environment. Before a developer I am a Programmer at the first place I
  can program in Java, Python also learned C/C++ but nowadays not making
  use of it.`;

  socials = [
    { className: 'fab fa-facebook', link: 'https://www.facebook.com/kj.kunal.1' },
    { className: 'fab fa-twitter', link: 'https://twitter.com/kunaljain_2000' },
    { className: 'fab fa-instagram', link: 'https://www.instagram.com/kunalkj_/' },
    { className: 'fab fa-github', link: 'https://www.github.com/kunal2899' },
    { className: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/kunalkj/' },
    { className: 'fab fa-whatsapp', link: 'http://wa.me/918770555943?text=Drop%20your%20message%20here.%0A%0AName%3A%0AEmail%3A' },
  ]

  skills = [
    { name: "React & Redux", pName: "react", logoColour:"#61DBFB", className:"fab fa-react" },
    { name: "Angular", pName: "angular", logoColour:"#B52E31", className:"fab fa-angular" },
    { name: "HTML5", pName: "html", logoColour:"#e34c26", className:"fab fa-html5" },
    { name: "CSS3 & Sass", pName: "css", logoColour:"#CD6799", className:"fab fa-sass" },
    { name: "JavaScript & Node", pName: "js", logoColour:"#3C873A", className:"fab fa-node-js" },
    { name: "Java SE & EE", pName: "java", logoColour:"#5382a1", className:"fab fa-java" },
    { name: "Spring Boot", pName: "spring", logoColour:"#3C873A", className:"fas fa-leaf" },
    { name: "SQL", pName: "sql", logoColour:"rgb(117, 117, 117)", className:"fas fa-database" },
  ]

  navLinks = [
    { id: "h", eid: "home",title: "Home" },
    { id: "au", eid: "aboutme",title: "About me" },
    { id: "se", eid: "services",title: "Services" },
    { id: "s", eid: "skills",title: "Skills" },
    { id: "p", eid: "projects",title: "Projects" },
    { id: "t", eid: "team",title: "Team" },
  ]

  services = [
    {
      iconClass: 'fal fa-laptop-mobile',
      title: 'Frontend Development',
      details:
        'I develop a single-page efficient frontend application using React or Angular, Sass for styling, and jQuery for functionality and to make it more attractive, also Bootstrap to develop a responsive frontend layout.',
    },
    {
      iconClass: 'fal fa-sidebar',
      title: 'Fullstack Development',
      details:
        'I develop web applications using React and Angular as frontend, Java EE, Hibernate, REST API, SpringBoot MVC as intermediary and MySQL as backend, also learning about NoSQL backend environment.',
    },
    {
      iconClass: 'fal fa-database',
      title: 'Backend Development',
      details:
        'I do server side development, scripting and building a database according to data they need to store and REST API URL breakpoints in term to integrate backend with frontend.',
    },
    {
      iconClass: 'fal fa-palette',
      title: 'UI/UX Designing',
      details: ''
    },
  ];


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dotsSpeed: 700,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayHoverPause: true,
    autoplayMouseleaveTimeout: 1000,
    autoplayTimeout: 2000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  downloadResume = () => window.open('../assets/resume/Kunal_Jain.pdf','_blank');


  constructor(private service: SendService) {
    const t = this;
    jQuery(function () {
      let op = document.createElement('i');
      let on = document.createElement('i');
      $(op).addClass(['fas', 'fa-angle-left']);
      $('.owl-prev').append(op);
      $(on).addClass(['fas', 'fa-angle-right']);
      $('.owl-next').append(on);

      if (window.scrollY > 20) {
        $('.toolbar').addClass('scroll');
      } else {
        $('.toolbar').removeClass('scroll');
        gsap.from('.toolbar', { y: -30, duration: 1, opacity: -2 });
      }
      if (window.scrollY > 100) {
        $('.toup').addClass('scrolls');
      } else {
        $('.toup').removeClass('scrolls');
      }
      $(window).on('scroll', function () {
        if (this.scrollY > 20) {
          $('.toolbar').addClass('scroll');
        } else {
          $('.toolbar').removeClass('scroll');
        }
        if (window.scrollY > 100) {
          $('.toup').addClass('active');
        } else {
          $('.toup').removeClass('active');
        }
      });

      $(window).on('resize', ()=> {
        if(window.screen.width <= 550 && !t.mobileWidth) t.mobileWidth = true;
        else if(t.mobileWidth) t.mobileWidth = false;
      })

      gsap.registerPlugin(ScrollTrigger)

      gsap.from('.about .box', {
        y: 20, opacity: 0, scrollTrigger: {
          trigger: '.about',
          toggleActions: "play pause resume reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
          // can be "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"
          start: 'top center',
          // markers: {startColor: "green", endColor: "red", fontSize: "16px"}
        }
      })
      gsap.from('.panel', {
        y: 20, opacity: 0, duration: .55, scrollTrigger: {
          trigger: '.panel',
          toggleActions: "play pause resume reverse",
          start: 'top-=250 center'
        }
      })
      gsap.to('.wim', {
        x: window.innerWidth - 100, scrollTrigger: {
          trigger: '.about',
          start: 'top bottom',
          scrub: 3
        }
      })
      gsap.from('.wic', {
        x: window.innerWidth - 300, scrollTrigger: {
          trigger: '.services',
          start: 'top bottom',
          scrub: 3
        }
      })
      gsap.to('.wik', {
        x: window.innerWidth - 100, scrollTrigger: {
          trigger: '.skills',
          start: 'top bottom',
          scrub: 5
        }
      })
      gsap.from('.wid', {
        x: window.innerWidth - 300, scrollTrigger: {
          trigger: '.projects',
          start: 'top bottom',
          scrub: 5
        }
      })
      gsap.to('.wwm', {
        x: window.innerWidth - 100, scrollTrigger: {
          trigger: '.teams',
          start: 'top bottom',
          scrub: 5
        }
      })
      gsap.from('.gito', {
        x: window.innerWidth - 300, scrollTrigger: {
          trigger: '.contactus',
          start: 'top bottom',
          scrub: 5
        }
      })
      const serviceDefault = {
        duration: .25, opacity: 0,
        scrollTrigger: {
          trigger: '.services',
          start: 'top+=280 center',
          toggleActions: "play pause resume reverse"
        }
      }
      gsap.from('.s1', { x: -30, y: -30, ...serviceDefault})
      gsap.from('.s2', { x: 30, y: -30, ...serviceDefault })
      gsap.from('.s3', { x: -30, y: 30, ...serviceDefault })
      gsap.from('.s4', { x: 30, y: 30, ...serviceDefault })

      $('.s4 .soon').append('<i class="fal fa-timer mr-2"></i>Starting soon...').addClass('h5')

      gsap.from('.skills .smain', {
        x: -30, duration: .25, opacity: 0, scrollTrigger: {
          trigger: '.skills',
          start: 'top center',
          toggleActions: "play pause resume reverse"
        }
      })

      const contactDefault = { 
        duration: .25, opacity: 0, scrollTrigger: {
        trigger: '.contactus',
        start: 'top center',
        toggleActions: "play pause resume reverse"
      }}

      gsap.from('.contactus .l', { x: -30, ...contactDefault })
      gsap.from('.contactus .r', { x: 30, ...contactDefault })
      gsap.from('.pro1', {
        y: 50, opacity: 0, duration: .75, scrollTrigger: {
          trigger: '.projects',
          start: 'top+=200 center',
          toggleActions: "play pause resume reverse"
        }
      })
      gsap.from(['.c1', '.c2', '.c3'], {
        y: 40, opacity: 0, duration: .5, scrollTrigger: {
          trigger: '.teams',
          start: 'top+=200 center',
          toggleActions: "play pause resume reverse"
        }
      })
      const skillScrollTrigger = { scrollTrigger: {
        trigger: ".visual",
        start: "top center",
      } }

      gsap.to('.html', { width: `${t.s.html}%`, ...skillScrollTrigger }).duration(2)
      gsap.to('.css', { width: `${t.s.css}%`, ...skillScrollTrigger }).duration(2)
      gsap.to('.react', { width: `${t.s.react}%`, ...skillScrollTrigger }).duration(2)
      gsap.to('.js', { width: `${t.s.js}%`, ...skillScrollTrigger }).duration(2)
      gsap.to('.angular', { width: `${t.s.angular}%`, ...skillScrollTrigger }).duration(2)
      gsap.to('.java', { width: `${t.s.java}%`, ...skillScrollTrigger }).duration(2)
      // gsap.to('.python', { width: `${t.s.python}%`, ...skillScrollTrigger }).duration(2)
      gsap.to('.sql', { width: `${t.s.sql}%`, ...skillScrollTrigger }).duration(2)
      gsap.to('.spring', { width: `${t.s.spring}%`, ...skillScrollTrigger }).duration(2)

      var typer = new Typed('#animate', {
        strings: [
          'Software Developer',
          'Frontend Developer',
          'React Developer',
          'Angular Developer',
          'Java Developer',
          'Programmer',
          'Tech Enthusiastic'
        ],
        typeSpeed: 80,
        loop: true,
        smartBackspace: true,
        backSpeed: 30,
        backDelay: 800,
        startDelay: 500,
      });

      $('img').on('contextmenu', function () {
        return false;
      })

      $('footer h4 p').on('click', function () {
        $('html').animate({ scrollTop: 0 });
      });
      $('.toup').on('click', function () {
        $('html').animate({ scrollTop: 0 });
      });

      //active links
      const sections = $('section');
      const nav_links = $('.toolbar nav ul li a');
      const renav = $('.expand nav ul li a');
      var now = ""
      for (var i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        const height = sections[i].clientHeight;
        if (pageYOffset >= (sectionTop - height / 2)) {
          now = sections[i].getAttribute('id');
        }
      }
      for (var i = 0; i < renav.length; i++) {
        let link = renav[i];
        if ($(link).hasClass(now)) {
          $(link).addClass('active').parent('ul').children().children().removeClass('active');
        }
      }
      if (now == "cu") {
        $('nav .nav_links').children().children().removeClass('active');
        $('.contact').addClass('onit');
        $('.marker').css('width', 0).css('opacity', 0);
      }
      for (var i = 0; i < nav_links.length; i++) {
        let link = nav_links[i];
        if (link.classList.contains(now)) {
          $('.contact').removeClass('onit');
          $(link).addClass('active').parent('li').siblings().children('a').removeClass('active');
          let left = $(link).offset().left - $('nav').offset().left - 20;
          let width = $(link).css('width');
          $('.marker').css('width', width).css('left', left).css('opacity', 1);
        }
      }

      $(window).on('scroll', function () {
        let current = ''
        for (var i = 0; i < sections.length; i++) {
          const sectionTop = sections[i].offsetTop;
          const height = sections[i].clientHeight;
          if (pageYOffset >= (sectionTop - height / 2)) {
            current = sections[i].getAttribute('id');
          }
        }
        for (var i = 0; i < renav.length; i++) {
          let link = renav[i];
          if (link.classList.contains(current)) {
            $(link).addClass('active').parent('li').siblings().children('a').removeClass('active');
          }
        }
        if (current == "cu") {
          $('nav .nav_links').children().children().removeClass('active');
          $('.contact').addClass('onit');
          $('.marker').css('width', 0).css('opacity', 0);
        }
        for (var i = 0; i < nav_links.length; i++) {
          let link = nav_links[i];
          if (link.classList.contains(current)) {
            $('.contact').removeClass('onit');
            $(link).addClass('active').parent('li').siblings().children('a').removeClass('active');
            let left = $(link).offset().left - $('nav').offset().left - 20;
            let width = $(link).css('width');
            $('.marker').css('width', width).css('left', left).css('opacity', 1);
          }
        }
      })

      $('nav .nav_links').children().on('click', function () {
        $('.contact').removeClass('onit');
        $(this).children('a').addClass('active')
        $(this).siblings().children('a').removeClass('active')
      });
      $('.contact').on('click', function () {
        $(this).addClass('onit');
        $('nav .nav_links').children().children().removeClass('active');
        $('.marker').css('width', 0).css('opacity', 0);
      });
      $('.menu-btn').on('click', function () {
        if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $('.expand').css('transform', 'translateY(-100%)');
        } else {
          $(this).addClass('open');
          $('.expand').css('transform', 'translateY(0)');
        }
      });
      $('.expand nav ul li a').on('click', function () {
        $('.menu-btn').removeClass('open');
        $('.expand').css('transform', 'translateY(-100%)');
      })
    })
  }

  untouch(form) {
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsUntouched();
    });
  }
  spin = false;
  showError = false;
  send(f: FormGroup) {
    if (!f.valid) {
      f.markAllAsTouched();
    }
    else {
      gsap.to('.form-group button i.fa-paper-plane', { x: 100, y: -100, opacity: 0, duration: 1 });
      setTimeout(() => {
        this.spin = true
      }, 1000)
      $('.form-group button span').text("SENDING");
      gsap.from('.form-group button span', { y: -30, opacity: 0 });

      var record = {};
      record['name'] = this.c.name;
      record['email'] = this.c.email;
      record['mobile'] = this.c.mobile;
      record['message'] = this.c.message;

      this.service.sendMessage(record).then(
        res => {
          f.reset();
          console.log(res)
          $('.form-group button i').removeClass('fa-circle-notch').addClass('fa-check-circle').css('animation', 'none');
          $('.form-group button span').text("SENT");
          setTimeout(() => {
            $('.form-group button i').removeClass('fa-check-circle').addClass('fa-paper-plane');
            $('.form-group button span').text("SEND");
          }, 2000)
        }
      ).catch(
        error => {
          console.log(error)
          f.reset();
          this.showError = true
          setTimeout(() => {
            this.showError = false
            this.spin = false
          }, 2000)
          $('.form-group button span').text("SEND");
        });
    }
  }

  scrollIntoView(id) {
    document.getElementById(id).scrollIntoView();
  }

  ngOnInit():void{
    $(window).on('load', function () {
      $('.loader').fadeOut('slow');
      gsap.from('#intro', { x: -100, duration: .75, delay: 1.3, opacity: 0 });
      gsap.from('#image', { xPercent: 10, duration: .75, delay: 1.8, opacity: 0 });
      gsap.from('.scrolldown', { y: -40, duration: .75, delay: 1.8, opacity: 0 });
    })
  }

}

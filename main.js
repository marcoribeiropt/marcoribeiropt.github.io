

$(document).ready(function () {
	var scroll = $('.scroll-point');
	var description = $('.hero__description');
	var intro = $('.hero__intro');
	// init controller
	var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

	var slides = document.querySelectorAll("section.project, section.about");

	var tl = new TimelineMax({paused:true, reversed:true})
	var tl2 = new TimelineMax({paused:true, reversed:true})
	
	tl.to("#menu", 1, {height: "100vh", ease:Expo.easeOut});
	tl2.to('.hero__hello', 1, {opacity: 1, ease:Power2.easeInOut}).to('.scroll-point',2, {opacity:1, ease:Power2.easeInOut} );
	
	//tlbounce.to('.scroll-point__line',2/4, {y:40, ease:Power2.easeOut}).to('.scroll-point__line', 2/2, {y:0, ease:Bounce.easeOut, delay:1/4});


	$('#fullpage').fullpage({
		menu: '#menu-fullpage',
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','lastPage'],
		scrollingSpeed: 1000,
		navigation: true,
		navigationPosition: 'right',
		fitToSection: true,

		onLeave: function(index, nextindex, direction){
			var leavingSection = $(this);

			//after leaving section 2
			if(index == 1 && direction =='down'){
				$('.menu').addClass('black');
				$('.logo').addClass('black');
			}

			else if(index == 2 && direction == 'up'){
				$('.logo').removeClass('black');
				$('.menu').removeClass('black');
			}

			if(index == 4 && direction =='down'){
				$('.menu').addClass('white');
				$('.logo').addClass('white');
			}

			else if(index == 5 && direction == 'up'){
				$('.menu').removeClass('white');
				$('.logo').removeClass('white');
			}
		}
	});




	$('.menu').click(function(){
		tl.reversed() ? (tl.play(), $(this).addClass('is-active')) : (tl.reverse() , $(this).removeClass('is-active'));	
	})


	/*for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setClassToggle(slides[i], 'fade-in')
				.setPin(slides[i])
				.addTo(controller);
		}
*/
	tl2.play();


					
	$(window).scroll(function() {
		if ($(document).scrollTop() > 400) {
		    //tl2.reverse();
		    $('.back').hide();
		    $('.menu').addClass('black');
		} else {
		    //tl2.play();	
		    $('.back').show();
		    $('.menu').removeClass('black');
		}
	});

	 
});

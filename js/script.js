$(document).ready(function(){

	// Responsive Mobile Menu

	$('#mobile-nav').on('click', function(e){
		if (e.target.className === "menu-bars collapse"){
			$('.mobile-nav-ul').css('display', 'block');
			e.target.classList.remove('collapse');
			e.target.classList.add('uncollapse');
		}
		else {
			$('.mobile-nav-ul').css('display', 'none');
			e.target.classList.add('collapse');
			e.target.classList.remove('uncollapse');
		}
			
	});

	$('.my-work').hover(function(e){
		$('.my-work').not($(this)).css({
			'-webkit-filter': 'blur(5px)'
		});

	}, function(e){
		$('.my-work').not($(this)).css({
			'-webkit-filter': 'blur(0px)'
		});
	})

	// Hero text rotator

	// var pluginName = "Morphext",
	//   defaults = {
	//       animation: "bounceIn",
	//       separator: ",",
	//       speed: 5000,
	//       complete: $.noop
	//   };

	// function Plugin (element, options) {
	//   this.element = $(element);

	//   this.settings = $.extend({}, defaults, options);
	//   this._defaults = defaults;
	//   this._init();
	// }

	// Plugin.prototype = {
	//   _init: function () {
	//       var $that = this;
	//       this.phrases = [];

	//       this.element.addClass("morphext");

	//       $.each(this.element.text().split(this.settings.separator), function (key, value) {
	//           $that.phrases.push($.trim(value));
	//       });

	//       this.index = -1;
	//       this.animate();
	//       this.start();
	//   },
	//   animate: function () {
	//       this.index = ++this.index % this.phrases.length;
	//       this.element[0].innerHTML = "<span class=\"animated " + this.settings.animation + "\">" + this.phrases[this.index] + "</span>";

	//       if ($.isFunction(this.settings.complete)) {
	//           this.settings.complete.call(this);
	//       }
	//   },
	//   start: function () {
	//       var $that = this;
	//       this._interval = setInterval(function () {
	//           $that.animate();
	//       }, this.settings.speed);
	//   },
	//   stop: function () {
	//       this._interval = clearInterval(this._interval);
	//   }
	// };

	// $.fn[pluginName] = function (options) {
	//   return this.each(function() {
	//       if (!$.data(this, "plugin_" + pluginName)) {
	//           $.data(this, "plugin_" + pluginName, new Plugin(this, options));
	//       }
	//   });
	// };

	// $("#js-rotating").Morphext({
	//   // The [in] animation type. Refer to Animate.css for a list of available animations.
	//   animation: "flipInX",
	//   // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
	//   separator: ",",
	//   // The delay between the changing of each phrase in milliseconds.
	//   speed: 2000,
	//   complete: function () {
	//       // Called after the entrance animation is executed.
	//   }
	// });

  	//Testimonials rotator
  	var divs = $('.rotator-content');
  	
  	function fade() {
  		var current = $('.current');
  		var currentIndex = divs.index(current),
  			nextIndex = currentIndex + 1;
  		
  		if (nextIndex >= divs.length) {
  			nextIndex = 0;
  		}
  		
  		var next = divs.eq(nextIndex);
  		
  		next.stop().fadeIn(1500, function() {
  			$(this).addClass('current');
  		});
  		
  		current.stop().fadeOut(500, function() {
  			$(this).removeClass('current');
  			_startProgress()
  			setTimeout(fade, 8000);
  		});
  	}
  	
  	function _startProgress(){
  		$(".rotator-progress").removeAttr('style');
  		$(".rotator-progress").animate({
  			width:"100%",
  		} , 8000);
  	}
  	
  	_startProgress();
  	setTimeout(fade, 8000);

// My Work section moving background

var movementStrength = 150;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#splatter").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#splatter').css("background-position", newvalueX+"px     "+newvalueY+"px");
});


}); //Closing Document Ready Tags

// <textarea class="task" placeholder="Empty Task. Write something or delete it"></textarea>


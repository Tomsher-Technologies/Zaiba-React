$('.main-banner').owlCarousel({
    items: 1,
    margin: 0,
    nav:true,
    loop:true,
    dots:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    stagePadding: 0,
    smartSpeed: 1000
  });

  $('.collection-slider').owlCarousel({
    items: 5,
    margin: 20,
    nav:true,
    loop:true,
    dots:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    stagePadding: 0,
    smartSpeed: 1000,

    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
  });

  $('.category-slider').owlCarousel({
    items: 5,
    margin: 40,
    nav:true,
    loop:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    stagePadding: 0,
    smartSpeed: 1000,

    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
  });


  $('.trending-slider').owlCarousel({
    items: 5,
    margin: 20,
    nav:true,
    loop:true,
    dots:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    stagePadding: 0,
    smartSpeed: 1000,

    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
  });




  $(document).ready(function() {
	var $btns = $('.btn').click(function() {
	  if (this.id == 'ALLJEWELLERY') {
	    $('#filter-block > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#filter-block > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
});


$(document).ready(function(){
  $(".dropdown").hover(            
      function() {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
          $(this).toggleClass('open');        
      },
      function() {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
          $(this).toggleClass('open');       
      }
  );
});


$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: false, 
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
      .on('initialized.owl.carousel', function() {
          sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: false,
		  margin:5,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);

      if (current < 0) {
          current = count;
      }
      if (current > count) {
          current = 0;
      }

      //end block

      sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
          sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
          sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
  }

  function syncPosition2(el) {
      if (syncedSecondary) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 100, true);
      }
  }

  sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
  });
});




var quantityInput = (function () {
	var $quantityInputs = $(".zb-product-quantity-input");

	if (!$quantityInputs.length) {
		return;
	}

	var $inputs = $quantityInputs.find(".zb-product-quantity");
	var $countBtn = $quantityInputs.find(".zb-product-quantity-count");
	var quantityMin = parseInt($inputs.attr("min"));
	var quantityMax = parseInt($inputs.attr("max"));

	$inputs.change(function () {
		var $this = $(this);
		var $minusBtn = $this.siblings(".zb-product-quantity-minus");
		var $addBtn = $this.siblings(".zb-product-quantity-add");
		var quantity = parseInt($this.val());

		if (isNaN(quantity) || quantity <= quantityMin) {
			$this.val(quantityMin);
			$minusBtn.attr("disabled", true);
		} else {
			$minusBtn.attr("disabled", false);
			
			if(quantity >= quantityMax){
				$this.val(quantityMax);
				$addBtn.attr('disabled', true);
			} else {
				$this.val(quantity);
				$addBtn.attr('disabled', false);
			}
		}
	});

	$countBtn.click(function () {
		var operator = this.dataset.action;
		var $this = $(this);
		var $input = $this.siblings(".zb-product-quantity");
		var quantity = parseInt($input.val());

		if (operator == "add") {
			quantity += 1;
			if (quantity >= quantityMin + 1) {
				$this.siblings(".zb-product-quantity-minus").attr("disabled", false);
			}

			if (quantity >= quantityMax) {
				$this.attr("disabled", true);
			}
		} else {
			quantity = quantity <= quantityMin ? quantityMin : (quantity -= 1);
			
			if (quantity == quantityMin) {
				$this.attr("disabled", true);
			}

			if (quantity < quantityMax) {
				$this.siblings(".zb-product-quantity-add").attr("disabled", false);
			}
		}

		$input.val(quantity);
	});
})();


















$(".toggle-password").click(function() {
    $(this).toggleClass("bi-eye bi-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});
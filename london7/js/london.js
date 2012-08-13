$(function(){

	var sliding,
	obj = {
		$ul : $('.london_ul'),
		$btn : $('#london_btn'),
		$shut : $('.london_shut'),
		$lay : $('#london_layer'),
		$center : $('.abs_center'),
		
		$wait : $('.london_wait'),
		$count : $('.london_count'),
		$unable : $('.london_unable'),
		$fail : $('.london_fail'),
		$succ : $('.london_succ'),

		lay_in : function(){		/*show layer*/
			this.$lay.show();
		},
		lay_out : function(){		/*close layer*/
			this.$lay.hide();
		},
		close_all : function(){		/*close layer & window*/
			this.lay_out();
			this.$center.hide();
		}
	};

	$(document).keydown(function(e){	/*press ESC to close*/
		if(e.which == 27)
		obj.close_all();
	});

	obj.$lay.click(function(){obj.close_all();});	/*click layer to close*/
	obj.$shut.click(function(){obj.close_all();});	/*close_btn to close*/

	/*to be removed*/
	obj.$btn.toggle(
	  function(){
		obj.lay_in();
		obj.$wait.show();
	},function(){
		obj.lay_in();
		obj.$count.show();
	},function(){
		obj.lay_in();
		obj.$unable.show();
	},function(){
		obj.lay_in();
		obj.$fail.show();
	},function(){
		obj.lay_in();
		obj.$succ.show();
	});


	/*list on the right*/
	obj.$ul.find('b').each(function(){	/*add title*/
		var $this = $(this);
		$this.attr('title',$this.text());
	});

	obj.$ul.hover(function(){	/*hover pause*/
		clearTimeout(sliding);
	},function(){				/*start on mouse leave*/
		sliding = setTimeout(autoSlide,3000);
	}).trigger('mouseleave');

	function autoSlide(){		/*auto slide*/
		obj.$ul.animate({'top':'-=' + obj.$ul.children().outerHeight()},'slow',function(){
			obj.$ul.css('top','0').children(':eq(0)').remove().appendTo(obj.$ul);
			sliding = setTimeout(autoSlide,3000);
		});
	}
});/*$*/
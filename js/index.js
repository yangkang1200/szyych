$(function(){
//	执行策划公司模块
	$('#zxchgs li').hover(function(){
		$(this).find('div').css('background','#d22f26')
		$(this).find('div').css('color','#fff')
		$(this).find('img').addClass('animated bounce')
		
	},function(){
		$(this).find('div').css('background','#fff')
		$(this).find('div').css('color','#000')
		$(this).find('img').removeClass('animated bounce')
	})
//	会议场地模块
	$('#hycd li').hover(function(){
		$(this).find('div').css('background','#d22f26')
		$(this).find('div').css('color','#fff')
		$(this).find('img').addClass('animated bounceIn')
		
	},function(){
		$(this).find('div').css('background','#fff')
		$(this).find('div').css('color','#000')
		$(this).find('img').removeClass('animated bounceIn')
	})
//	设备商模块
	$('#sbs li').hover(function(){
		$(this).find('div').css('background','#d22f26')
		$(this).find('div').css('color','#fff')
		$(this).find('img').addClass('animated rotateIn')
		
	},function(){
		$(this).find('div').css('background','#fff')
		$(this).find('div').css('color','#000')
		$(this).find('img').removeClass('animated rotateIn')
	})
//	新闻中心模块
	$('.news div li').hover(function(){
		$(this).find('a').css('color','#d22f26')
		$(this).parent('div').find('img').addClass('animated rotateInDownLeft')
		
	},function(){
		$(this).find('a').css('color','#000')
		$(this).parent('div').find('img').removeClass('animated rotateInDownLeft')
	})
	$('.news div').hover(function(){
		$(this).find('img').addClass('animated zoomIn')
		
	},function(){
		$(this).find('img').removeClass('animated zoomIn')
	})
//	查看更多
	$('.ckgd a').hover(function(){
		$(this).addClass('animated swing')
	},function(){
		$(this).removeClass('animated swing')
	})
//	合作伙伴
	$('.hzhb li').hover(function(){
		$(this).addClass('animated rubberBand')
	},function(){
		$(this).removeClass('animated rubberBand')
	})
})
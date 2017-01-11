
var jsonObj={
	
}

/*导航*/


$(".header_nav li").mouseenter(function(){
		var num=$(this).index();
	if(num==1 || num==2 || num==3 ||num==5)
	{
		var obj=$(this).fadeIn();
		
		$('.header_nav_list').stop();
		$('.header_nav_list').animate({height:'30px'},300,function(){
			obj.find('.nav_content').fadeIn();
		});
	}
	
});
$(".header_nav li").mouseleave(function(){	
	var num=$(this).index();
	if(num==1 || num==2 || num==3 ||num==5)
	{
		$(this).find('.nav_content').fadeOut();
		$('.header_nav_list').stop();
		$('.header_nav_list').animate({height:'0px'},300);
	}


});


/*logoin*/
$(".login_btn1,.login_box .login_close").click(function(){
	$(".login").slideToggle(500);
});
$('.login_input_right').click(function(){
	$(".login_account").children('input').val('');
	$(".login_password").children('input').val('');
})
jsonObj.accountval=$(".login_account input").val();
jsonObj.passwordval= $(".login_password input").val();

/*会员与退出按钮*/
$(".login_in li").mouseenter(function(){
	$('.login_in01').stop(false,true).slideDown(400);
});
$(".login_in li").mouseleave(function(){
	$('.login_in01').stop(false,true).slideUp(400);
});



/*幻灯片*/
function imgObj(nowPos,oldPos){
	if(nowPos==0)
	{
		$('.flash_nav span').eq(0).addClass('flash_active1');
	}
	else if(nowPos==1)
	{
		$('.flash_nav span').eq(1).addClass('flash_active2');
	}
	else if(nowPos==2)
	{
		$('.flash_nav span').eq(2).addClass('flash_active3');
	}
	else if(nowPos==3)
	{
		$('.flash_nav span').eq(3).addClass('flash_active4');
	}
	if(oldPos==0)
	{
		$('.flash_nav span').eq(0).removeClass('flash_active1').addClass('flash_btn1');
	}
	else if(oldPos==1)
	{
		$('.flash_nav span').eq(1).removeClass('flash_active2');
	}
	else if(oldPos==2)
	{
		$('.flash_nav span').eq(2).removeClass('flash_active3');
	}
	else if(oldPos==3)
	{
		$('.flash_nav span').eq(3).removeClass('flash_active4');
	}
}


$(".flash_nav span").mouseenter(function(){
	if($(this).hasClass('blue'))
	{
		return;
	}
	
	var nowPos,oldPos;
	nowPos=$(this).index();//获得当前位置，$(this)跟$(".navspot li")一样
	oldPos=$(".blue").index();//获得旧的位置
	
	imgObj(nowPos,oldPos);
	$(this).addClass("blue").siblings(".blue").removeClass('blue');//给当前位置添加blue，其它去掉blue，siblings（".blue"）除了.blue类外，其它兄弟去掉blue
	$(".flash_list li").eq(nowPos).stop(false,true).fadeIn();//设置当前图片淡入效果，stop(false,true)如果设置成true，则清空队列。可以立即结束动画。如果设置成true，则完成队列。可以立即完成动画。
	$(".flash_list li").eq(oldPos).stop(false,true).fadeOut();//设置旧位置照片淡出效果
	
});

//right
$(".flash_right").click(function(){
	var nowPos,oldPos,lastPos;
	oldPos=$(".blue").index();//获得旧的位置
	lastPos=$(".flash_list li").length-1;//获得最后图片的位置
	nowPos=oldPos==lastPos?0:oldPos+1;//如果oldPos==lastPos那么nowPos=0，否则nowPos=oldPos+1
	
	$(".flash_nav span").eq(nowPos).addClass("blue").siblings().removeClass('blue');//给当前位置添加blue，其它去掉blue，siblings（".blue"）除了.blue类外，其它兄弟去掉blue
	
	$(".flash_list li").eq(nowPos).stop().fadeIn();//设置当前图片淡入效果，stop(false,true)如果设置成true，则清空队列。可以立即结束动画。如果设置成true，则完成队列。可以立即完成动画。
	$(".flash_list li").eq(oldPos).stop().fadeOut();//设置旧位置照片淡出效果
	imgObj(nowPos,oldPos);
});


//left
$(".flash_left").click(function(){
	var nowPos,oldPos,lastPos;
	oldPos=$(".blue").index();
	lastPos=$(".flash_list li").length-1;
	nowPos=oldPos==0?lastPos:oldPos-1;;//如果oldPos==0那么nowPos=lastPos，否则nowPos=oldPos-1
	$(".flash_nav span").eq(nowPos).addClass("blue").siblings().removeClass('blue');
	$(".flash_list li").eq(nowPos).stop().fadeIn();
	$(".flash_list li").eq(oldPos).stop().fadeOut();
	imgObj(nowPos,oldPos);
});

 jsonObj.moveDo=window.setInterval(function(){//设置3秒轮播
	$(".flash_right").click();
},3000);
$('.flash_list,.flash_nav').mouseenter(function(){
	clearInterval(jsonObj.moveDo);
});
$('.flash_list,.flash_nav').mouseleave(function(){
	jsonObj.moveDo=window.setInterval(function(){//设置3秒轮播
		$(".flash_right").click();
	},3000);
});
//
// 点击输入框文字消失离开又出现
$("textarea,input[focucmsg]").each(function() {
	if ($(this).val() == '') {
	$(this).val($(this).attr("focucmsg"));
	}
	$(this).focus(function() {
		if ($(this).val() == $(this).attr("focucmsg")) {
			$(this).val('').css("color","#000");;
			
		}
	});
	$(this).blur(function() {
		if (!$(this).val()) {
			$(this).val($(this).attr("focucmsg"));			
			$(this).css("color","#cfcfcf");
		}
	});
});
//
$('.Course_ke,.btn_sel').click(function(){
	$(this).siblings('dl').show();
});
$('.Course').mouseenter(function(){
	if($(this).children('input').val()=='选择离你最近的中心' || $(this).children('input').val()=='选择你需要试听的课程' || $(this).children('input').val()=="")
		$(this).find('dl').show();
	
});
$('.Course').mouseleave(function(){
	$(this).find('dl').hide();
});
/*$('.c_r_ul dd').mouseenter(function(){
	var val=$(this).text();
	$(this).parents('dl').siblings('.Course_ke').val(val);
	$(this).parents('dl').siblings('.Course_ke').css("color","#000");
});*/

$('.c_r_ul dd').click(function(){
	var val=$(this).text();
	$(this).parents('dl').siblings('.Course_ke').val(val);
	$(this).parents('dl').hide();
	$(this).parents('dl').siblings('.Course_ke').css("color","#000");
});
//获得焦点
$('.freeCourse_name').focus(function(){
	$(this).css("color","#000");
});

/*宝宝年龄*/
function pickedFunc(){
	/*$dp.$('date_year').value=$dp.cal.date.y;
	$dp.$('date_mouth').value=$dp.cal.date.M;
	$dp.$('date_day').value=$dp.cal.date.d;*/
	/*老师写的*/
	$dp.$('date_year').value=$dp.cal.getP('y');
	$dp.$('date_mouth').value=$dp.cal.getP('M');
	$dp.$('date_day').value=$dp.cal.getP('d');
}

/*$('.date_reg').click(function(){
	
	WdatePicker({el:'date',dateFmt:'yyyy-MM-dd HH:mm:ss',onpicked:pickedFunc});
});*/
/*判断注册空值*/

$('.freeCourse').bind('submit',function(){
	var babyName=$.trim($('#baby_name').val());
	var dateYear=$.trim($('#date_year').val());
	var dateMouth=$.trim($('#date_mouth').val());
	var dateDay=$.trim($('#date_day').val());
	var babyTel=$.trim($('#baby_tel').val());
	var babyClass=$.trim($('#baby_class').val());
	var babySch=$.trim($('#baby_sch').val());
	var babyWhere=$.trim($('#baby_where').val());
	if(babyName=='')
	{
		alert('请输入宝宝姓名！');
		return false;
	}
	else if(dateYear=='' || dateMouth=='' || dateDay=='')
	{
		alert('请输入宝宝出生日期！');
		return false;
	}
	else if(babyTel=='' || babyTel=='请输入手机号码')
	{
		alert('请输入你的手机号码！');
		return false;
	}
	else if(!(/^1[3|4|5|7|8]\d{9}$/.test($('#baby_tel').val())))
	{
		alert('请输入正确的手机号码！');
		return false;
	}
	else if(babyClass=='' || babyClass=='选择你需要试听的课程')
	{
		alert('请选择你需要试听的课程！');
		return false;
	}
	else if(babySch=='' || babySch=='选择离你最近的中心')
	{
		alert('请选择离你最近的中心！');
		return false;
	}
	else if(babyWhere=='')
	{
		alert('请选择你的消息来源！');
		return false;
	}
	else
	{
		
		return true;
	}
});
//栏目
$('.column_list li').mouseenter(function(){
	$(this).find('i').animate({top:'0px'},300);
});

$('.column_list li').mouseleave(function(){
	$(this).find('i').animate({top:'-150px'},300);
});
//视频
$('.video_open').click(function(){
	$('.video').show();
});

$(".video_close").click(function(){
	$('.video').hide();
});

//foot导航
$('.f_n_right').click(function(){
	var ulwidth=$('.f_n_box ul:first').width();
	$('.f_n_box ul').eq(-1).prependTo(".f_n_box").css({marginLeft:-ulwidth+"px"});
	$('.f_n_box ul').eq(0).stop().animate({marginLeft:"0px"},500);
});
$('.f_n_left').click(function(){
	var ulwidth=$('.f_n_box ul:first').width();
	$('.f_n_box ul').eq(0).stop().animate({marginLeft:-ulwidth+"px"},500,function(){
		$(this).appendTo('.f_n_box').css({marginLeft:"0px"});
	});
	
});

jsonObj.NavDo=window.setInterval(function(){
	$('.f_n_left').click();
},10000);
$('.foot_nav').mouseenter(function(){
	clearInterval(jsonObj.NavDo);
});
$('.foot_nav').mouseleave(function(){
	jsonObj.NavDo=window.setInterval(function(){
		$('.f_n_left').click();
	},10000);
});
















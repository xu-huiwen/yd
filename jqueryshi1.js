$(document).ready(function(){
	// 顶部
	
	 	$(".tong").eq(0).hover(function(){
            $(".hiddenx1").eq(0).css({"display":"block"})
            $(".tong").eq(0).css({"background":"#FFF","color":"#25B2FE"})
         },function(){
	        $(".hiddenx1").eq(0).css({"display":"none"})
	        $(".tong").eq(0).css({"background":"#F6F6F6","color":"#E40178"})
         },function(){
	    }).end().eq(1).hover(function(){
	        $(".hidden1").eq(1).css({"display":"block"})
	        $(".tong").eq(1).css({"background":"#FFF","color":"#25B2FE"})
	    },function(){
	        $(".hidden1").eq(1).css({"display":"none"})
	        $(".tong").eq(1).css({"background":"#F6F6F6","color":"#E40178"})
	    })









	    $("body").click(function(event){
	        var target = $(event.target);
	        if(target.hasClass("place")){
	            $(".kuang").css("display","block");
	        }else{
                 $(".kuang").css("display","none");
		    }
        })














        $(".lis").each(function(index){
        $(this).hover(function(){
        	$(".lis .hidden").eq(index).animate({height:42})
        	$(".lis .a").eq(index).css({"background":"#F3F3F3","color":"#0085D0"})
        },function(){
            $(".lis .hidden").eq(index).animate({height:0})
            $(".lis .a").eq(index).css({"background":"#E4E4E4","color":"#666666"})
        })
    })

        
       
   










	// banner轮播图
	var now=0;
	var next=0;
	var flag=true
	var width=$(".bnzj").width()
	var t=setInterval(move,2000)
	function move(type){
			var type=type||'l'
		      if(!flag){
		        return;
		      }
		      flag=false;
		      if(type=='l'){
			next=now+1;
			if(next>=$(".bnzj img").length){
				next=0
			}
			$(".bnzj img").eq(next).css("left",width).end().eq(now).animate({left:-width}).end().eq(next).animate({left:0},function(){
				flag=true;
			})
		      
		
		}else if(type=='r'){
			next=now-1
            if(next<0){
            next=$(".bnzj img").length-1
		}
        $(".bnzj img").eq(next).css("left",-width).end().eq(now).animate({left:width}).end().eq(next).animate({left:0},function(){
        	flag=true;
        })
   }
	$(".circle-li").eq(now).css({"background":"#D3D2D0"}).end().eq(next).css({"background":"#E72487"})
	now=next
	}
	$(".bnzj .left").click(function(){
		move("r")
	})
	$(".bnzj .right").click(function(){
		move("l")
	})
	$(".bnzj").mouseover(function(){
            clearInterval(t)
    });
    $(".bnzj").mouseout(function(){
            t=setInterval(move,2000)
    });
	$(".bnzj .circle-li").click(function(){
		var index=$(this).index()
		console.log(index)
		
			if(!flag){
	        return;
	      }
	        flag=false;
	        if(index>now){
	        $(".bnzj img").eq(index).css("left",width).end().eq(now).animate({left:-width}).end().eq(index).animate({left:0},function(){
        	flag=true;
        })
       }else if(index<now){
       	$(".bnzj img").eq(index).css("left",-width).end().eq(now).animate({left:width}).end().eq(index).animate({left:0},function(){
        	flag=true;
        })
       }
       $(".bnzj .circle-li").eq(now).css({"background":"#D3D2D0"}).end().eq(index).css({"background":"#E72487"})
	now=index;
	next=index
	})





	// 节点轮播
	var flag1='duiw'
	var now1=0;
	var next1=0;
	var width1=$(".picture1").width()
	
	var t1=setInterval(move1,2000)
	function move1(){
        if(!flag1){
        return;
        }
        flag1=false;
    	$(".small").eq(now1).css("left",0).eq(next1).animate({left:-295},1000,function(){
		    var fir=$(".pictureplay1")
			var fe=$(".pictureplay1:first")
		   $(".small").append(fe)
		   $(".small").eq(next1).css("left",0)
		   flag1='duiw';
		})
		
    }
    $(".big").mouseover(function(){
            clearInterval(t1)
    });
    $(".big").mouseout(function(){
            t1=setInterval(move1,2000)
    });
    $(".pictureplay .right").click(function(){
		move1()
	})
	$(".pictureplay .left").click(function(){
		if(!flag1){
	    return
	    }
	    flag1=false
        $(".pictureplay1:first").before($(".pictureplay1:last"))
		$(".small").eq(now1).css("left",-295).eq(next1).animate({left:0},1000,function(){
		   flag1='duiw';
		})
	})

    


    $(".img_all").each(function(){
        $(this).hover(function(){
            $(this).animate({right:18},200)
        },function(){
            $(this).animate({right:10},200)
        })
    })
    $(".img_all1").each(function(){
        $(this).hover(function(){
            $(this).animate({left:120},200)
        },function(){
            $(this).animate({left:130},200)
        })
    })
    $(".img_all2").each(function(){
        $(this).hover(function(){
            $(this).animate({right:18},200)
        },function(){
            $(this).animate({right:10},200)
        })
    })








   
       $(".zgyd2").mouseover(function(){
	        $(".zgyd2").animate({right:39},240)
	    })
	    $(".zgyd2").mouseout(function(){
	        $(".zgyd2").animate({right:-27},240)
	    })
	    $(".zgyd3").mouseover(function(){
	        $(".zgyd3").animate({right:39},240)
	    })
	    $(".zgyd3").mouseout(function(){
	        $(".zgyd3").animate({right:-27},240)
	    })
	    $(".zgyd4").mouseover(function(){
	        $(".zgyd4").animate({right:39},240)
	    })
	    $(".zgyd4").mouseout(function(){
	        $(".zgyd4").animate({right:-27},240)
	    })
   


        $(".noticelright .x6").click(function(){
			var index=$(this).index();
			$(".noticelleft1").css("display","none").eq(index).css("display","block")
		})






})
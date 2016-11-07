window.onload=function(){





  //顶部
var hright1=$('.hright1')
          for(var i=0;i<hright1.length;i++){
            
            hover (hright1[i],function(){
              
               var height1=this.offsetHeight
                     this.style.color='blue'
                     this.style.background='#FFF'
                     var ul1=$('.hidden1',this)[0]
                     ul1.style.display='block'
                    
            },function(){
                     var that=this
                     var ul1=$('.hidden1',this)[0]

                     that.style.color='#E40178'
                      that.style.background='#F6F6F6'
                     ul1.style.display='none'
            })
          }












var kuang=$(".kuang")[0]
var body=$("body")[0]
var kuang1l=$(".kuang1l")[0]
var shengfen=$(".shengfen")[0]

body.onclick=function(e){
  var e=e||window.event;
  var obj=e.target||e.srcElement;
  if(obj.className=='place'){
    kuang.style.display='block'
    shengfen.style.display='none'

  }else{ if(obj.className=='kuang1l'){
        shengfen.style.display='block'
      }else{
         kuang.style.display='none'
      }

  }
}


















	var bnzj=$('.bnzj')[0]
	var imgs=$('img',bnzj)
	var left=$('.left',bnzj)[0]
	var right=$('.right',bnzj)[0]
	var circle=$('.circle')[0]
	var circleLi=$('.circle-li')
	var width=parseInt(getStyle(bnzj,'width'))
	var n=0;
	var next=0;
  var flag=true
	var t=setInterval(move,2000)
     function move(type){
      var type=type||'l'
      if(!flag){
        return;
      }
      flag=false;
      if(type=='l'){
        next=n+1;
         if(next>=imgs.length){
           next=0;
         }      
         imgs[next].style.left=width+'px'
        animate(imgs[n],{left:-width},600)
        animate(imgs[next],{left:0},600,Tween.Linear,function(){
          flag=true;
        })
      }else if(type=='r'){
          next=n-1
          if(next<0){
          next=imgs.length-1
     }
     imgs[next].style.left=-width+'px'
     animate(imgs[n],{left:width},600)
     animate(imgs[next],{left:0},600,Tween.Linear,function(){
      flag=true;
    })
   }
        for(var i=0;i<circleLi.length;i++){
           circleLi[i].style.background='#D3D2D0'
         }
         circleLi[next].style.background='#E72487'
        n=next;
         } 
     right.onclick=function(){
    move('l');
}
     left.onclick=function(){
      move('r')
    }
    bnzj.onmouseover=function(){
     clearInterval(t)
}
  bnzj.onmouseout=function(){
     t=setInterval(move,2000)
}
for(var i=0;i<circleLi.length;i++){
    circleLi[i].index=i;
    circleLi[i].onclick=function(){
    
    if(this.index>n){ 
       if(!flag){
        return;
      }
        flag=false;
    imgs[this.index].style.left=width+'px'
    animate(imgs[n],{left:-width},600)
    animate(imgs[this.index],{left:0},600,Tween.Linear,function(){
      flag=true;
    })
    }else if(this.index<n){
     imgs[this.index].style.left=-width+'px'
     animate(imgs[n],{left:width},600)
     animate(imgs[this.index],{left:0},600,Tween.Linear,function(){
      flag=true;
    })
   }
        for(var i=0;i<circleLi.length;i++){
       circleLi[i].style.background='#D3D2D0'
    }
    circleLi[this.index].style.background='#E72487'
    n=this.index;
    next=this.index
    }
  }






//价格
var price=$('.price')[0]
var pricel=$('.pricel')
for(var i=0; i<pricel.length;i++){
  pricel[i].index=i;
  pricel[i].onclick=function(){
    for(var j=0;j<pricel.length;j++){
      pricel[j].className='pricel';
    }
    this.className='pricel x100';
  }
}






// picture轮播
var big=$('.big')[0]

var left1=$('.left')[1]

var right1=$('.right')[1]
var small=$('.small')[0]

var img=$('.pictureplay1')

var flag1='duiw'
var width1=parseInt(getStyle(img[0],'width'))

var t1=setInterval(move1,2000)
function move1(){
      if(!flag1){
        return;
      }
      flag1=false;
    animate(small,{left:-285},function(){
    var imgFirst=getFirst(small)
    small.appendChild(imgFirst)
    small.style.left='0'
    flag1='duiw';
  })
}
big.onmouseover=function(){
  clearInterval(t1)
}
big.onmouseout=function(){
  t1=setInterval(move1,2000)
}
right1.onclick=function(){
       move1()
}
left1.onclick=function(){
  if(!flag1){
    return
  }
  flag1=false
  var imgFirst=getFirst(small)
  var imgLast=getLast(small)
  insertBefore(imgLast,imgFirst)
  small.style.left=-285+'px'
  animate(small,{left:0},1000,function(){
       flag1='duiw'
    })
 
}







//banner标签
var lis=$('.lis')
for(var i=0;i<lis.length;i++){
          
            hover (lis[i],function(){
              
               var height=this.offsetHeight
                this.style.color='#0085D0'
                this.style.borderTop='2px solid #0085D0'
                     var ul=$('.hidden',this)[0]
                     var len=$('li',ul).length
                     var ulHeight=len*height
                     animate(ul,{height:ulHeight},500)
                    
            },function(){
                     var that=this
                     var ul=$('.hidden',this)[0]
                     animate(ul,{height:0},500,function(){
                     that.style.color='#666666'
                     that.style.borderTop='0px solid #0085D0'
                     })

            })
          }




//4G      marginleft
var sjspecialnrrightl1=$('.sjspecialnrrightl')[0]
var leftimg1=$("img",sjspecialnrrightl1)[0]

var sjspecialnrrightl2=$('.sjspecialnrrightl')[1]
var leftimg2=$("img",sjspecialnrrightl2)[0]
var sjspecialnrrightl3=$('.sjspecialnrrightl')[2]
var leftimg3=$("img",sjspecialnrrightl3)[0]
var sjspecialnrrightl4=$('.sjspecialnrrightl')[3]
var leftimg4=$("img",sjspecialnrrightl4)[0]
var sjspecialnrrightl5=$('.sjspecialnrrightl')[4]
var leftimg5=$("img",sjspecialnrrightl5)[0]
var sjspecialnrrightl6=$('.sjspecialnrrightl')[5]
var leftimg6=$("img",sjspecialnrrightl6)[0]

        hover(leftimg1,function(){
          leftimg1.style.right=-10+'px'
          leftimg1.style.right=10+'px'       
        },function(){
       
          leftimg1.style.right=-9+'px'   
          leftimg1.style.right=1+'px'     
        }) 


        hover(leftimg2,function(){
          leftimg2.style.right=-10+'px'
          leftimg2.style.right=10+'px'       
        },function(){
       
          leftimg2.style.right=-9+'px'   
          leftimg2.style.right=1+'px'     
        }) 


        hover(leftimg3,function(){
          leftimg3.style.right=-10+'px'
          leftimg3.style.right=10+'px'       
        },function(){
       
          leftimg3.style.right=-9+'px'   
          leftimg3.style.right=1+'px'     
        }) 


        hover(leftimg4,function(){
          leftimg4.style.right=-10+'px'
          leftimg4.style.right=10+'px'       
        },function(){
       
          leftimg4.style.right=-9+'px'   
          leftimg4.style.right=1+'px'     
        }) 



        hover(leftimg5,function(){
          leftimg5.style.right=-10+'px'
          leftimg5.style.right=10+'px'       
        },function(){
       
          leftimg5.style.right=-9+'px'   
          leftimg5.style.right=1+'px'     
        }) 



        hover(leftimg6,function(){
          leftimg6.style.right=-10+'px'
          leftimg6.style.right=10+'px'       
        },function(){
       
          leftimg6.style.right=-9+'px'   
          leftimg6.style.right=1+'px'     
        })

//买手机
var buyphonepicture11=$('.buyphonepicture1')[0]
var leftimg11=$("img",buyphonepicture11)[0]

var buyphonepicture22=$('.buyphonepicture2')[0]

var leftimg22=$("img",buyphonepicture22)[0]

var buyphonepicture33=$('.buyphonepicture3')[0]
var leftimg33=$("img",buyphonepicture33)[0]
var buyphonepicture44=$('.buyphonepicture4')[0]
var leftimg44=$("img",buyphonepicture44)[0]

      hover(leftimg11,function(){
            leftimg11.style.left=110+'px'  
        },function(){
       
            leftimg11.style.left=120+'px'  
        }) 



         hover(leftimg22,function(){
            leftimg22.style.left=110+'px'  
        },function(){
       leftimg22.style.left=120+'px'  
             
        })



         hover(leftimg33,function(){
            leftimg33.style.left=110+'px'
        },function(){
       
         leftimg33.style.left=120+'px'  
              
        })



         hover(leftimg44,function(){
          leftimg44.style.left=110+'px'
                 
        },function(){
       
          leftimg44.style.left=120+'px'   
         
        })











//业务推荐
var ywspecialnrrightl11=$('.ywspecialnrrightl')[0]
var leftimgl1=$("img",ywspecialnrrightl11)[0]
var ywspecialnrrightl12=$('.ywspecialnrrightl')[1]
var leftimgl2=$("img",ywspecialnrrightl12)[0]
var ywspecialnrrightl13=$('.ywspecialnrrightl')[2]
var leftimgl3=$("img",ywspecialnrrightl13)[0]
var ywspecialnrrightl14=$('.ywspecialnrrightl')[3]
var leftimgl4=$("img",ywspecialnrrightl14)[0]
var ywspecialnrrightl15=$('.ywspecialnrrightl')[4]
var leftimgl5=$("img",ywspecialnrrightl15)[0]
var ywspecialnrrightl16=$('.ywspecialnrrightl')[5]
var leftimgl6=$("img",ywspecialnrrightl16)[0]


      hover(leftimgl1,function(){
          leftimgl1.style.right=-10+'px'
          leftimgl1.style.right=10+'px'       
        },function(){
       
          leftimgl1.style.right=-9+'px'   
          leftimgl1.style.right=1+'px'     
        }) 

      hover(leftimgl2,function(){
          leftimgl2.style.right=-10+'px'
          leftimgl2.style.right=10+'px'       
        },function(){
       
          leftimgl2.style.right=-9+'px'   
          leftimgl2.style.right=1+'px'     
        }) 


      hover(leftimgl3,function(){
          leftimgl3.style.right=-10+'px'
          leftimgl3.style.right=10+'px'       
        },function(){
       
          leftimgl3.style.right=-9+'px'   
          leftimgl3.style.right=1+'px'     
        }) 


      hover(leftimgl4,function(){
          leftimgl4.style.right=-10+'px'
          leftimgl4.style.right=10+'px'       
        },function(){
       
          leftimgl4.style.right=-9+'px'   
          leftimgl4.style.right=1+'px'     
        }) 



      hover(leftimgl5,function(){
          leftimgl5.style.right=-10+'px'
          leftimgl5.style.right=10+'px'       
        },function(){
       
          leftimgl5.style.right=-9+'px'   
          leftimgl5.style.right=1+'px'     
        }) 



      hover(leftimgl6,function(){
          leftimgl6.style.right=-10+'px'
          leftimgl6.style.right=10+'px'       
        },function(){
       
          leftimgl6.style.right=-9+'px'   
          leftimgl6.style.right=1+'px'     
        }) 







//公告
  var noticelright=getClass('noticelright')[0]
  var x6=getClass('x6',noticelright)
  var noticelleft1=getClass('noticelleft1')
  for(var i=0;i<x6.length;i++){
    x6[i].index=i;
    x6[i].onclick=function(){
    for(var j=0;j<x6.length;j++){
     
      }
       

        for(var x=0;x<noticelleft1.length;x++){
          noticelleft1[x].style.display='none';
        }
        noticelleft1[this.index].style.display='block';
       
       }
    }















function zgyd(zgyd){
  zgyd=zgyd

  zgyd.onmouseover=function(){
    animate(zgyd,{right:39},240)
      // zgyd.style.marginRight=64+'px'
  }
  zgyd.onmouseout=function(){
    // zgyd.style.marginLeft='0'
    animate(zgyd,{right:-27},240)
  }
      

}
zgyd($(".zgyd2")[0])
zgyd($(".zgyd3")[0])
zgyd($(".zgyd4")[0])










}
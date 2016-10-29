window.onload=function(){
	var aa=jQuery.noConflict();
	aa("img").lazyload({
		threshold:500,
		event:"scroll",
		effect:"fadeIn",
	})
	function ban(banner){
		var pic=$('.pic',banner)[0]
		var picImg=$('.img',pic)
		var picRoll=$('.pic-roll',pic)[0]
		var roll=$('.roll')
		var lt=$('.lt',pic)[0]
		var gt=$('.gt',pic)[0]
		var width=parseInt(getStyle(pic,'width'))
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(move,3000)
		function move(type){
			type=type||'gt'
			if(!flag){
				return;
			}
			flag=false;
			if(type=='gt'){
				n++
				if(n>=picImg.length){
					n=0
				}
			}else if(type=='lt'){
				n--
				if(n<0){
					n=picImg.length-1
				}
			}
			
			for(var i=0;i<picImg.length;i++){
				animate(picImg[i],{opacity:0},500)
				roll[i].style.background='#211616'
			}
			animate(picImg[n],{opacity:1},500,function(){
				flag=true
			})
			roll[n].style.background='#e5004f'
		}
		for(var i=0;i<picImg.length;i++){
			picImg[i].onmouseover=function(){
				clearInterval(t)
			}
			picImg[i].onmouseout=function(){
				t=setInterval(move,3000)
			}
		}		
		gt.onclick=function(){
			move('gt')
		}
		lt.onclick=function(){
			move('lt')
		}		
		for(var i=0;i<roll.length;i++){
			roll[i].index=i;
			roll[i].onmouseover=function(){
				if(!flag){
					return;
				}
				flag=false;
				for(var i=0;i<picImg.length;i++){
					animate(picImg[i],{opacity:0},500)
					roll[i].style.background='#211616'
				}
				animate(picImg[this.index],{opacity:1},500,function(){
					flag=true
				})
				roll[this.index].style.background='#e5004f'
				n=this.index
			}	
		}	
	}
	ban($('.banner')[0])	



	// 1F
	function costume(obj){
		var obj=obj
		var tab=$('.tab',obj)[0]
		var con=$('.con-2',obj)[0]
		var two=$('.two',obj)[0]
		var img=$('.img',two)
		var tabLeft=$('.tab-left',tab)[0]
		var tabRight=$('.tab-right',tab)[0]
		var circle=$('.circle',tab)[0]
		var cir=$('.cir',tab)
		var flag=true
		var n=0
		var next=0
		var widthCon=parseInt(getStyle(img[0],'width'))
		var t=setInterval(cos,3000)
		function cos(type){
			var type=type||'gt'
				if(!flag){
				return;
			}
			flag=false;
			if(type=='gt'){
				next=n+1;
				if(next>=img.length){
					next=0;
				}
				img[next].style.left=widthCon+'px'
				animate(img[n],{left:-widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			 }else if(type=='lt'){
				next=n-1;
				if(next<0){
					next=img.length-1;
				}
				img[next].style.left=-widthCon+'px'
				animate(img[n],{left:widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#3e3e3e"
			}
			cir[next].style.background="#b61b1f"
			n=next;
		}
		tabRight.onclick=function(){
			cos('gt');
		}
		tabLeft.onclick=function(){	
			cos('lt')		
		}
		two.onmouseover=function(){
			clearInterval(t)
		}
		two.onmouseout=function(){
			t=setInterval(cos,3000)
		}
		for(var i=0;i<cir.length;i++){
			cir[i].index=i;
			cir[i].onmouseover=function(){
				if(!flag){
					return;
				}
				flag=false
				if(this.index>n){
					img[this.index].style.left=widthCon+'px'
					animate(img[n],{left:-widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}else if(this.index<n){
					img[this.index].style.left=-widthCon+'px'
					animate(img[n],{left:widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}
				for(var i=0;i<cir.length;i++){
					cir[i].style.background="#3e3e3e"
				}
				cir[this.index].style.background="#b61b1f"
				n=this.index;
			}	
		}
	}
	
	costume($('.costume')[0])
		

	// 2F
	function beauty(obj){
		var obj=obj
		var tab=$('.tab',obj)[0]
		var con=$('.con-2',tab)[0]
		var top=$('.top',con)
		var bot=$('.bot',con)
		var tabLeft=$('.tab-left',con)[0]
		var tabRight=$('.tab-right',con)[0]
		var circle=$('.circle',con)[0]
		var cir=$('.cir',con)
		var flag=true
		var n=0
		var next=0
		var widthCon=parseInt(getStyle(top[0],'width'))
		var t=setInterval(bea,3000)
		function bea(type){
			var type=type||'gt'
				if(!flag){
				return;
			}
			flag=false;
			if(type=='gt'){
				next=n+1;
				if(next>=top.length){
					next=0;
				}
				top[next].style.left=widthCon+'px'
				bot[next].style.left=widthCon+'px'
				animate(top[n],{left:-widthCon},500)
				animate(top[next],{left:0},500,function(){
					flag=true;
				})
				animate(bot[n],{left:-widthCon},500)
				animate(bot[next],{left:0},500,function(){
					flag=true;
				})
			 }else if(type=='lt'){
				next=n-1;
				if(next<0){
					next=top.length-1;
				}
				top[next].style.left=-widthCon+'px'
				bot[next].style.left=-widthCon+'px'
				animate(top[n],{left:widthCon},500)
				animate(top[next],{left:0},500,function(){
					flag=true;
				})
				animate(bot[n],{left:widthCon},500)
				animate(bot[next],{left:0},500,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#3e3e3e"
			}
			cir[next].style.background="#b61b1f"
			n=next;
		}
		tabRight.onclick=function(){
			bea('gt');
		}
		tabLeft.onclick=function(){	
			bea('lt')		
		}
		con.onmouseover=function(){
			clearInterval(t)
		}
		con.onmouseout=function(){
			t=setInterval(bea,3000)
		}
		for(var i=0;i<cir.length;i++){
			cir[i].index=i;
			cir[i].onmouseover=function(){
				if(!flag){
					return;
				}
				flag=false
				if(this.index>n){
					top[this.index].style.left=widthCon+'px'
					bot[this.index].style.left=widthCon+'px'
					animate(top[n],{left:-widthCon},500)
					animate(top[this.index],{left:0},500,function(){
						flag=true;
					})
					animate(bot[n],{left:-widthCon},500)
					animate(bot[this.index],{left:0},500,function(){
						flag=true;
					})
				}else if(this.index<n){
					top[this.index].style.left=-widthCon+'px'
					bot[this.index].style.left=-widthCon+'px'
					animate(top[n],{left:widthCon},500)
					animate(top[this.index],{left:0},500,function(){
						flag=true;
					})
					animate(bot[n],{left:widthCon},500)
					animate(bot[this.index],{left:0},500,function(){
						flag=true;
					})
				}
				for(var i=0;i<cir.length;i++){
					cir[i].style.background="#3e3e3e"
				}
				cir[this.index].style.background="#b61b1f"
				n=this.index;
			}	
		}
	}
	beauty($('.beauty')[0])

	//3F,4F,5F,11F
	function phono(ph){
		var obj=ph
		var tab=$('.tab',obj)[0]
		var con=$('.con-2',tab)[0]
		var one=$('.one',con)[0]
		var img=$('.img',one)
		var tabLeft=$('.tab-left',one)[0]
		var tabRight=$('.tab-right',one)[0]
		var circle=$('.circle',one)[0]
		var cir=$('.cir',one)
		var flag=true
		var n=0
		var next=0
		var widthCon=parseInt(getStyle(img[0],'width'))
		var t=setInterval(cos,3000)
		function cos(type){
			var type=type||'gt'
				if(!flag){
				return;
			}
			flag=false;
			if(type=='gt'){
				next=n+1;
				if(next>=img.length){
					next=0;
				}
				img[next].style.left=widthCon+'px'
				animate(img[n],{left:-widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			 }else if(type=='lt'){
				next=n-1;
				if(next<0){
					next=img.length-1;
				}
				img[next].style.left=-widthCon+'px'
				animate(img[n],{left:widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#3e3e3e"
			}
			cir[next].style.background="#b61b1f"
			n=next;
		}
		tabRight.onclick=function(){
			cos('gt');
		}
		tabLeft.onclick=function(){	
			cos('lt')		
		}
		one.onmouseover=function(){
			clearInterval(t)
		}
		one.onmouseout=function(){
			t=setInterval(cos,3000)
		}
		for(var i=0;i<cir.length;i++){
			cir[i].index=i;
			cir[i].onmouseover=function(){
				if(!flag){
					return;
				}
				flag=false
				if(this.index>n){
					img[this.index].style.left=widthCon+'px'
					animate(img[n],{left:-widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}else if(this.index<n){
					img[this.index].style.left=-widthCon+'px'
					animate(img[n],{left:widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}
				for(var i=0;i<cir.length;i++){
					cir[i].style.background="#3e3e3e"
				}
				cir[this.index].style.background="#b61b1f"
				n=this.index;
			}	
		}
	}
	phono($('.phono')[0])
	phono($('.household')[0])
	phono($('.number')[0])
	phono($('.car')[0])



	//6F,7F,8F,9F
	function motion(car){
		var obj=car
		var tab=$('.tab',obj)[0]
		var con=$('.con-3',tab)[0]
		var top=$('.top',con)
		var bot=$('.bot',con)
		var left=$('.tab-left',con)[0]
		var right=$('.tab-right',con)[0]
		var cir=$('.cir',con)
		var flag=true
		var n=0
		var next=0
		var widthCon=parseInt(getStyle(top[0],'width'))
		var t=setInterval(bea,3000)
		function bea(type){
			var type=type||'gt'
				if(!flag){
				return;
			}
			flag=false;
			if(type=='gt'){
				next=n+1;
				if(next>=top.length){
					next=0;
				}
				top[next].style.left=widthCon+'px'
				bot[next].style.left=widthCon+'px'
				animate(top[n],{left:-widthCon},500)
				animate(top[next],{left:0},500,function(){
					flag=true;
				})
				animate(bot[n],{left:-widthCon},500)
				animate(bot[next],{left:0},500,function(){
					flag=true;
				})
			 }else if(type=='lt'){
				next=n-1;
				if(next<0){
					next=top.length-1;
				}
				top[next].style.left=-widthCon+'px'
				bot[next].style.left=-widthCon+'px'
				animate(top[n],{left:widthCon},500)
				animate(top[next],{left:0},500,function(){
					flag=true;
				})
				animate(bot[n],{left:widthCon},500)
				animate(bot[next],{left:0},500,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#3e3e3e"
			}
			cir[next].style.background="#b61b1f"
			n=next;
		}
		right.onclick=function(){
			bea('gt');
		}
		left.onclick=function(){	
			bea('lt')		
		}
		con.onmouseover=function(){
			clearInterval(t)
		}
		con.onmouseout=function(){
			t=setInterval(bea,3000)
		}
		for(var i=0;i<cir.length;i++){
			cir[i].index=i;
			cir[i].onmouseover=function(){
				if(!flag){
					return;
				}
				flag=false
				if(this.index>n){
					top[this.index].style.left=widthCon+'px'
					bot[this.index].style.left=widthCon+'px'
					animate(top[n],{left:-widthCon},500)
					animate(top[this.index],{left:0},500,function(){
						flag=true;
					})
					animate(bot[n],{left:-widthCon},500)
					animate(bot[this.index],{left:0},500,function(){
						flag=true;
					})
				}else if(this.index<n){
					top[this.index].style.left=-widthCon+'px'
					bot[this.index].style.left=-widthCon+'px'
					animate(top[n],{left:widthCon},500)
					animate(top[this.index],{left:0},500,function(){
						flag=true;
					})
					animate(bot[n],{left:widthCon},500)
					animate(bot[this.index],{left:0},500,function(){
						flag=true;
					})
				}
				for(var i=0;i<cir.length;i++){
					cir[i].style.background="#3e3e3e"
				}
				cir[this.index].style.background="#b61b1f"
				n=this.index;
			}	
		}
	}
	motion($('.motion')[0])
	motion($('.exist')[0])
	motion($('.baby')[0])
	motion($('.food')[0])


	//10F
	function book(books){
		var obj=books
		var tab=$('.tab',obj)[0]
		var con=$('.con-3',tab)[0]
		var top=$('.top',con)[0]
		var img=$('.img',top)
		var left=$('.tab-left',top)[0]
		var right=$('.tab-right',top)[0]
		var cir=$('.cir',top)
		var flag=true
		var n=0
		var next=0
		var widthCon=parseInt(getStyle(img[0],'width'))
		var t=setInterval(cos,3000)
		function cos(type){
			var type=type||'gt'
				if(!flag){
				return;
			}
			flag=false;
			if(type=='gt'){
				next=n+1;
				if(next>=img.length){
					next=0;
				}
				img[next].style.left=widthCon+'px'
				animate(img[n],{left:-widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			 }else if(type=='lt'){
				next=n-1;
				if(next<0){
					next=img.length-1;
				}
				img[next].style.left=-widthCon+'px'
				animate(img[n],{left:widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#3e3e3e"
			}
			cir[next].style.background="#b61b1f"
			n=next;
		}
		right.onclick=function(){
			cos('gt');
		}
		left.onclick=function(){	
			cos('lt')		
		}
		top.onmouseover=function(){
			clearInterval(t)
		}
		top.onmouseout=function(){
			t=setInterval(cos,3000)
		}
		for(var i=0;i<cir.length;i++){
			cir[i].index=i;
			cir[i].onmouseover=function(){
				if(!flag){
					return;
				}
				flag=false
				if(this.index>n){
					img[this.index].style.left=widthCon+'px'
					animate(img[n],{left:-widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}else if(this.index<n){
					img[this.index].style.left=-widthCon+'px'
					animate(img[n],{left:widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}
				for(var i=0;i<cir.length;i++){
					cir[i].style.background="#3e3e3e"
				}
				cir[this.index].style.background="#b61b1f"
				n=this.index;
			}	
		}
	}
	book($('.book')[0])


	// 12F
	function life(con){
		var con=con
		var con_one=$('.con-1-right',con)[0]
		var con_top=$('.C-R-top',con_one)[0]
		var img=$('.top',con_top)
		var left=$('.tab-left',con_top)[0]
		var right=$('.tab-right',con_top)[0]
		var cir=$('.cir',con_top)
		var flag=true
		var n=0
		var next=0
		var widthCon=parseInt(getStyle(img[0],'width'))
		var t=setInterval(cos,3000)
		function cos(type){
			var type=type||'gt'
				if(!flag){
				return;
			}
			flag=false;
			if(type=='gt'){
				next=n+1;
				if(next>=img.length){
					next=0;
				}
				img[next].style.left=widthCon+'px'
				animate(img[n],{left:-widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			 }else if(type=='lt'){
				next=n-1;
				if(next<0){
					next=img.length-1;
				}
				img[next].style.left=-widthCon+'px'
				animate(img[n],{left:widthCon},500)
				animate(img[next],{left:0},500,function(){
					flag=true;
				})
			}
			for(var i=0;i<cir.length;i++){
				cir[i].style.background="#3e3e3e"
			}
			cir[next].style.background="#b61b1f"
			n=next;
		}
		right.onclick=function(){
			cos('gt');
		}
		left.onclick=function(){	
			cos('lt')		
		}
		con_top.onmouseover=function(){
			clearInterval(t)
		}
		con_top.onmouseout=function(){
			t=setInterval(cos,3000)
		}
		for(var i=0;i<cir.length;i++){
			cir[i].index=i;
			cir[i].onmouseover=function(){
				if(!flag){
					return;
				}
				flag=false
				if(this.index>n){
					img[this.index].style.left=widthCon+'px'
					animate(img[n],{left:-widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}else if(this.index<n){
					img[this.index].style.left=-widthCon+'px'
					animate(img[n],{left:widthCon},500)
					animate(img[this.index],{left:0},500,function(){
						flag=true;
					})
				}
				for(var i=0;i<cir.length;i++){
					cir[i].style.background="#3e3e3e"
				}
				cir[this.index].style.background="#b61b1f"
				n=this.index;
			}	
		}
	}
	life($('.con-1',$('.life-ser')[0])[0])
	life($('.con-1',$('.life-ser')[0])[1])


	//选项卡
	function floorTab(obj){
		var obj=obj
		var tit=$('.tit',obj)[0]
		var con=$('.con',obj)[0]
		var nav=$('.tit-nav',tit)[0]
		var a=$('a',nav)
		var tab=$('.tab',con)
		var div=$('div',nav)
		for(var i=0;i<a.length;i++){
			a[i].index=i
			hover(a[i],function(){
				for(var i=0;i<a.length;i++){
					a[i].style.cssText="color:#666;border-color:#fff;z-index:25"
					tab[i].style.display='none'
					div[i].style.display='none'
				}
				this.style.cssText="color:#c81623;border-color:#c81623;z-index:50"
				tab[this.index].style.display='block'
				div[this.index].style.display='block'
			},function(){})
		}
	}
	floorTab($('.costume')[0])
	floorTab($('.beauty')[0])
	floorTab($('.phono')[0])
	floorTab($('.household')[0])
	floorTab($('.number')[0])
	floorTab($('.motion')[0])
	floorTab($('.exist')[0])
	floorTab($('.baby')[0])
	floorTab($('.food')[0])
	floorTab($('.book')[0])
	floorTab($('.car')[0])



	//banner左侧导航弹出
	function navPop(){
		var banner=$('.banner')[0]
		var left=$('.left',banner)[0]
		var nav=$('.L-nav',left)
		for(var i=0;i<nav.length;i++){
			nav[i].index=i
			hover(nav[i],function(){
				var pop=$('.pop',this)[0]
				var a=$('.a',this)
				for(var j=0;j<a.length;j++){
					a[j].style.color="#c81623"
				}
				this.style.background="#fff"				
				pop.style.display="block"
			},function(){
				var pop=$('.pop',this)[0]
				var a=$('.a',this)
				for(var j=0;j<a.length;j++){
					a[j].style.color="#fff"
				}
				this.style.background="#c81623"
				pop.style.display="none"
			})
		}
	}
	navPop()

	//banner左侧弹出中的颜色变化效果
	function color(obj){
		var obj=obj		
		var a=$('a',obj)
		var span=$('span',obj)
		for(var i=0;i<a.length;i++){
			a[i].index=i
			hover(a[i],function(){
				a[this.index].style.background='#c81623'
				span[this.index].style.background='#b1191a'
			},function(){
				a[this.index].style.background='#7c7171'
				span[this.index].style.background='#5c5251'
			})
		}					
	}
	var banner=$('.banner')[0]
	var first=$('.first',banner)
	for(var i=0;i<first.length;i++){
		color(first[i])
	}
	


	//楼层跳转
	function fixFloor(obj){
		var fix_floor=$('.fix-floor')[0]
		var lis=$('.lis',fix_floor)
		var floor=$('.floor')
		var one=$('.one',fix_floor)
		var two=$('.two',fix_floor)
		var now;
		var cWidth=document.documentElement.clientWidth
		var cHeight=document.documentElement.clientHeight
		var obj=document.body.scrollTop?document.body:document.documentElement;
		for(var i=0;i<floor.length;i++){
			floor[i].h=floor[i].offsetTop
		}
		window.onscroll=function(){
			for(var i=0;i<floor.length;i++){
				var top=obj.scrollTop
				if(top>=floor[i].h-cHeight){
					fix_floor.style.display='block'	
					fix_floor.style.top=(cHeight-360)/2+'px'
					fix_floor.style.left=(cWidth-1270)/2+'px'
				}else if(top<floor[0].h-cHeight){
					fix_floor.style.display='none'
				}
				if(i==0){
					if(top>=floor[0].h-cHeight){
						for(var j=0;j<floor.length;j++){
							one[j].style.display='block'
							two[j].style.display='none'
						}
						one[i].style.display='none'
						two[i].style.display='block'
						now=i
					}
				}else if(i<floor.length&&i>0){
					if(top>=floor[i].h-100){
						for(var j=0;j<floor.length;j++){
							one[j].style.display='block'
							two[j].style.display='none'
						}
						one[i].style.display='none'
						two[i].style.display='block'
						now=i
					}
				}
				
			}
		}
		for(var i=0;i<floor.length;i++){
			var top=obj.scrollTop
			if(top>=floor[i].h-cHeight){
				fix_floor.style.display='block'	
				fix_floor.style.top=(cHeight-360)/2+'px'
				fix_floor.style.left=(cWidth-1270)/2+'px'
			}else if(top<floor[0].h-cHeight){
				fix_floor.style.display='none'
			}
			if(i==0){
				if(top>=floor[0].h-cHeight){
					for(var j=0;j<floor.length;j++){
						one[j].style.display='block'
						two[j].style.display='none'
					}
					one[i].style.display='none'
					two[i].style.display='block'
					now=i
				}
			}else if(i<floor.length&&i>0){
				if(top>=floor[i].h-100){
					for(var j=0;j<floor.length;j++){
						one[j].style.display='block'
						two[j].style.display='none'
					}
					one[i].style.display='none'
					two[i].style.display='block'
					now=i
				}
			}
			
		}
		for(var i=0;i<lis.length;i++){
			lis[i].index=i
			lis[i].onclick=function(){
				animate(document.body,{scrollTop:floor[this.index].h},300)
				animate(document.documentElement,{scrollTop:floor[this.index].h},300)
				now=this.index
			}
			
			hover(lis[i],function(){
				one[this.index].style.display="none"
				two[this.index].style.cssText="display:block;background:#c81623;color:#fff"
			},function(){
				if(this.index==now){
					one[this.index].style.display="none"
					two[this.index].style.cssText="display:block;background:#fff;color:#c81623"		
				}else{
					one[this.index].style.display="block"
					two[this.index].style.display='none'
				}			
			})
		}	
	}
	fixFloor()


	//head部分下拉框
	function headRight(){
		var head=$('.head')[0]
		var right=$('.right',head)[0]
		var bot=$('.bot',right)
		for(var i=0;i<bot.length;i++){
			hover(bot[i],function(){
				var link=$('.link',this)[0]
				var bottom=$('.bottom',this)[0]
				var div=$('.div',this)[0]
				this.style.background="#fff"
				this.style.border="1px solid #ddd"
				link.style.display="block"
				div.style.display='block'
				bottom.style.transform='rotate(180deg)'
			},function(){
				var link=$('.link',this)[0]
				var bottom=$('.bottom',this)[0]
				var div=$('.div',this)[0]
				this.style.background="transparent"
				this.style.border="1px solid #f1f1f1"
				link.style.display="none"
				div.style.display='none'
				bottom.style.transform='rotate(0)'
			})
		}
	}
	headRight()


	function headAdd(){
		var head=$('.head')[0]
		var address=$('.address',head)[0]
		var add=$('.add',address)[0]
		var bot=$('.bot',address)[0]
		var div=$('.div',address)[0]
		hover(address,function(){
			address.style.background='#fff'
			address.style.border="1px solid #ddd"
			add.style.display='block'
			bot.style.transform='rotate(180deg)'
			div.style.display='block'
		},function(){
			address.style.background='transparent'
			address.style.border="1px solid #f1f1f1"
			add.style.display='none'
			bot.style.transform='rotate(0)'
			div.style.display='none'
		})
	}
	headAdd()

	//address中的点击效果
	function addOnclick(){
		var head=$('.head')[0]
		var address=$('.address',head)[0]
		var add=$('.add',address)[0]
		var a=$('a',add)
		var now;
		for(var i=0;i<a.length;i++){
			a[i].index=i
			a[i].onclick=function(){
				for(var i=0;i<a.length;i++){
					a[i].style.background='#fff'
					a[i].style.color='#666'
				}
			this.style.background='#c81623'
			this.style.color='#fff'	
			now=this.index				
			}
			hover(a[i],function(){
				if(this.index==now){
					return;
				}else{
					this.style.background="#f4f4f4"
					this.style.color="#c81623";
				}
			},function(){
				if(this.index==now){
					return;
				}else{
					this.style.background="#fff"
					this.style.color="#666";
				}
			})
		}
	}
	addOnclick()


	//近日推荐部分轮播效果
	function recommend(){
		var recommend=$('.recommend')[0]
		var rec_right=$('.rec-right',recommend)[0]
		var ul=$('ul',rec_right)
		var left=$('.left',recommend)[0]
		var right=$('.right',recommend)[0]
		var n=0;
		var next=0;
		var flag=true;
		function move(type){
			if(!flag){
				return
			}
			flag=false
			if(type=='r'){
				next=n+1
				if(next>=ul.length){
					next=0
				}
				ul[next].style.left=1000+'px'
				animate(ul[n],{left:-1000},800)
				animate(ul[next],{left:0},800,function(){
					flag=true
				})
			}else if(type=='l'){
				next=n-1
				if(next<0){
					next=ul.length-1
				}
				ul[next].style.left=-1000+'px'
				animate(ul[n],{left:1000},800)
				animate(ul[next],{left:0},800,function(){
					flag=true
				})
			}
			n=next
		}
		right.onclick=function(){
			move('r')
		}
		left.onclick=function(){
			move('l')
		}
	}
	recommend()


	//天天低价中的轮播
	function fix(){
		var fix=$('.fix')[0]
		var hot=$('.hot',fix)[0]
		var bot=$('.bot',hot)[0]
		var bor=$('.bor',bot)[0]
		var jiedian=$('.jiedian',bor)[0]
		var con=$('.con',jiedian)
		var t=setInterval(move,2500)
		function move(){
			animate(jiedian,{top:-130},500,function(){				
				// jiedian.insertBefore(con[con.length-1],con[0])
				// jiedian.style.bottom=0
				var first=getFirst(jiedian)
				var last=getLast(jiedian)
				jiedian.insertBefore(last,first)
				jiedian.style.top=-260+'px'
			})
		}
		bor.onmouseover=function(){
			clearInterval(t)
		}
		bor.onmouseout=function(){
			t=setInterval(move,2500)
		}
	}
	fix()



	//右侧固定栏
	function fixRight(obj){
		var obj=obj
		var fore=$('.fore',obj)
		for(var i=0;i<fore.length;i++){
			fore[i].index=i
			hover(fore[i],function(){
				var img=$('.img',this)[0]
				var con=$('.con',this)[0]
				img.style.cssText="background-color:#c81623"
				var width=parseInt(getStyle(con,'width'))
				animate(con,{left:-width},150)
				con.style.background="#c81623"
			},function(){
				var img=$('.img',this)[0]
				var con=$('.con',this)[0]
				img.style.cssText="background-color:#7a6e6e"
				animate(con,{left:0},150)
				con.style.background="#7a6e6e"
			})
		}
	}
	fixRight($('.fix-right-six')[0])
	fixRight($('.fix-right-two')[0])

	function fixRightSix(){
		var fix=$('.fix-right-six')[0]
		var fixHeight=parseInt(getStyle(fix,'height'))
		var cHeight=document.documentElement.clientHeight
		fix.style.top=(cHeight-fixHeight)/2+'px'
	}
	fixRightSix()

	//返回顶部
	function fixTop(){
		var fix=$('.fix-right-two')[0]
		var fore=$(".fore",fix)[0]
		var obj=document.body.scrollTop?document.body:document.documentElement;
		fore.onclick=function(){
			animate(document.body,{scrollTop:0},0)
			animate(document.documentElement,{scrollTop:0},0)
		}
	}
	fixTop()


	//搜索焦点获取与消失
	function inputText(){
		var text=$('.text')[0]
		var val=text.value
		text.onfocus=function(){
			text.value=""
			text.style.color="#333"
		}
		text.onblur=function(){
			var value=this.value
			if(value==""||value==val){
				text.value=val
				text.style.color="#666"
			}else{
				text.value=value
				text.style.color="#666"
			}			
		}
	}
	inputText()



	













}
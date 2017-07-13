/*window.onload = function(){
	var obtn = document.getElementById('btn');
	//获取可视区的高度
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	//滚动条滚动时触发
	window.onscroll =  function (){
		//获取滚动条距离顶部的高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(osTop)
		if(osTop >= clientHeight){
			obtn.style.display = 'block';
		}else{
			obtn.style.display = 'none';
		}

		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	obtn.onclick = function(){
		//设置定时器
	    timer = setInterval(function(){
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop /5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50)

	}
}*/
/*
第一遍
window.onload = function(){
	var clientHeight = window.innerHeight?window.innerHeight:document.documentElement.clientHeight;
	var oBtn = document.getElementById('btn');
	var timer = null;
	var isTop = true;
	
	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		if(osTop>=clientHeight){
			oBtn.style.display = "block";
		}else{
			oBtn.style.display = "none";
		}
		console.log(isTop);
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
		// console.log(isTop);

	}

	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50)
	}
}*/
//第二遍
/*window.onload = function(){
	var oBtn = document.getElementById('btn');
	var clientHeight =  document.documentElement.clientHeight;

	var timer = null;
	var isTop = true;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}

		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50);
	}
}
*/
//第三遍
/*window.onload =  function(){
	var oBtn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;
	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}

		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;

	}

	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop ||  document.body.scrollTop;
			var ispeed = Math.floor(-osTop/6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

			if(osTop == 0){
				clearInterval(timer);
			}
			isTop = true;
		},50);
	}
}*/
//4
/*window.onload = function(){
	var oBtn = document.getElementById('btn');
	var  clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;

	}

	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50);
	}
}*/

//5
/*window.onload = function(){
	var oBtn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop+ ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50);
	}

}
*/
//6
/*window.onload =  function(){
	var oBtn = document.getElementById('btn');
	var clientHeight =document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop>= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop|| document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			if(!isTop){
				clearInterval(timer);
			}

		},50);

	}
}*/

//7
/*window.onload = function(){
	var oBtn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll =  function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop>= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}		
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop+ ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50);
		
	}
}*/
//8
/*window.onload = function(){
	var oBtn =  document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll =  function(){
		var osTop =document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	oBtn.onclick =  function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50)
	}
}*/

//9
/*window.onload =  function(){
	var oBtn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll =  function(){
		var osTop =  document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	oBtn.onclick =  function(){
		timer =  setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

			if(osTop == 0){
				clearInterval(timer);
			}
			isTop = true;

		},50);
	}
}
*/
//10
window.onload = function(){
	var oBtn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight){
			oBtn.style.display = 'block';
		}else{
			oBtn.style.display = 'none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	oBtn.onclick =  function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
		},50);
	}
}

// 任务
// 任务1：获取页面可视区的高度代码编写
//document.documentElement.clientHeight

// 任务2：获取滚动条距离顶部的高度
//document.documentElement.scrollTop||document.body.scrollTop

// 注意在chrom和IE等浏览器的兼容性


// 任务3：使用脚本控制“回到顶部”按钮的显示与隐藏



// window.getHeight= function(){  
//     if(window.innerHeight!= undefined){  
//         return window.innerHeight;  
//     }  
//     else{  
//         var B= document.body, D= document.documentElement;  
//         return Math.min(D.clientHeight, B.clientHeight);  
//     }  
// }  
//window.innerHeight ? window.innerHeight : document.documentElement.clientHeight 






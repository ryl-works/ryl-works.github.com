window.onload = function(){
	var obtn = document.getElementById('btn');
	//获取可视区的高度
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;

	//滚动条滚动时触发
	window.onscroll =  function (){
		//获取滚动条距离顶部的高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;

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
			if(parseInt(osTop) === 0){
				clearInterval(timer);
			}
		},30)

		// console.log(osTop);

	}
}
// 任务
// 任务1：获取页面可视区的高度代码编写

// 任务2：获取滚动条距离顶部的高度

// 注意在chrom和IE等浏览器的兼容性

// 任务3：使用脚本控制“回到顶部”按钮的显示与隐藏










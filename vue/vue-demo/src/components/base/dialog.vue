<template>
<div id="dialog-id">
	<div class="dialog-wrap">
		<div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
		<transition name="drop">
			<div class="dialog-content" v-if="isShow">
				<p class="dialog-close" @click="closeMyself">x</p>
				<slot>empty</slot>
			</div>
		</transition>
	</div>
</div>
</template>
<script type="text/javascript">
window.onresize = function() {
	set();
}

function set() {
	var dialog = document.getElementsByClassName('dialog-content')[0];
	var wWidth = document.documentElement.clientWidth;
	var wHeight = document.documentElement.clientHeight;
	var dWidth = dialog && dialog.offsetWidth;
	var dHeight = dialog && dialog.offsetHeight;
	if (!!dialog) {
		dialog.style.left = (wWidth - dWidth) / 2 + 'px';
		dialog.style.top = (wHeight - dHeight) / 2 + 'px';
		dialog.style.marginLeft = 0;
	}
}
export default {
	props: {
		isShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {}
	},
	updated() {
		set()
	},
	methods: {
		closeMyself() {
			this.$emit('on-close')
		}
	}
}
</script>
<style>
.drop-enter-active {
	transition: all .5s ease;
}

.drop-leave-active {
	transition: all .3s ease;
}

.drop-enter {
	transform: translateY(-500px);
}

.drop-leave-active {
	transform: translateY(-500px);
}

.dialog-wrap {
	position: fixed;
	width: 100%;
	height: 100%;
}

.dialog-cover {
	background: #000;
	opacity: .3;
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.dialog-content {
	max-width: 50%;
	min-width: 40%;
	position: fixed;
	max-height: 50%;
	overflow: auto;
	background: #fff;
	top: 20%;
	left: 50%;
	margin-left: -25%;
	z-index: 10;
	border: 2px solid #464068;
	padding: 2%;
	line-height: 1.6;
}

.dialog-close {
	position: absolute;
	right: 5px;
	top: 5px;
	width: 20px;
	height: 20px;
	text-align: center;
	cursor: pointer;
}

.dialog-close:hover {
	color: #4fc08d;
}
</style>

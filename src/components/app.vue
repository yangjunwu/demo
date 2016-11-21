
<template>
	<div>
		<p id="name">姓名：{{name}}</p>
		<p class="age">年龄:{{age}}</p>
	</div>
</template>

<script type="text/javascript">
	var $ = require("jquery");
	$(function(){
		$("#name").css("color","green");
	})
	
	export default {
		el:"#app",
		data(){
			return {
				name:"yangjunwu",
				age:"100"
			}
		}
	}
</script>



<template>
  <div class="vuepanel">
  <div class="title">{{title}}</div>
  <div class="content">
  <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
  props: { title: "" }
};
</script>


<style lang="scss" scoped>
$success: #5cb85c;
$primary: #337ab7;
@mixin grad1() {
	background: rgb(30,30,182);
	/*background: linear-gradient(90deg, rgba(30,30,182,1) 0%, rgba(41,41,175,1) 50%, rgba(2,0,36,1) 100%);*/
	/*background: linear-gradient(90deg, $primary 0%, darken($primary,5%) 50%, #1d4567 100%);*/
	background: linear-gradient(90deg, $primary 0%, darken($primary,5%) 50%, darken($primary,20%) 100%);
}
.vuepanel {
  border-radius:4px;
	margin-bottom:10px;
	/*margin-top:10px;*/
	border: 1px solid black;
	box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}

.title {
  user-select:none;
  
 border-radius:3px 3px 0px 0px;
		color: white;
		padding: 6px;
		font-size: 120%;
		font-weight: bold;
		@include grad1();
		border-bottom:1px solid darken($primary,20%);
}

.content {
  background-color:white;
		border-radius:0px 0px 3px 3px;
		padding: 10px;
}
</style>

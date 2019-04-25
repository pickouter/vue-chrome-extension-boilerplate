<template>
	<h1> {{ welcomeMessage }} </h1>
</template>

<script>
	export default {
		data: function() {
			return {
				welcomeMessage: 'Hello World'
			}
		}
	}
</script>

<style>
	h1 {
		background: #fafafa;
	}
</style>
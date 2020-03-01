<template>
	<div id="info">
		<h2>
			{{object.title}}
		</h2>
		<div id="description">
			<p>
				<span v-html="object.description"></span>
			</p>
		</div>
		<h4>
			{{object.task}}
		</h4>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	#info{
			width: 100%;
			height: 60%;
			display:flex;
			justify-content: space-around;
			flex-direction: column;
			align-items: center;

		}
		#description{
			width: 90%;
			overflow: auto;
			/*border: 2px solid #23374d;*/
		}
		h2, p, h4{
			color: #23374d;
			font-family: 'Righteous';
		}
		p{
			text-indent: 3%;
		}
		.property{
			background-color: lightblue 
		}
		h4{
			align-self: flex-start;
			padding: 5%;
		}


		@media(orientation:portrait){
			h4{
				text-indent: 3%;
			}
		}
</style>
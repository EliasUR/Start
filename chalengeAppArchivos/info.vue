<template>
	<div id="info">
		<h2>
			{{data.object.title}}
		</h2>
		<div id="description">
			<p>
				<span v-html="data.object.description"></span>
			</p>
		</div>
		<h4>
			{{data.object.task}}
		</h4>
	</div>
</template>

<script>
	
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
			/*border: 2px solid var(--oscuro);*/
		}
		h2, p, h4{
			color: var(--oscuro);
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
			#description{
				overflow: auto;
			}
			h4{
				text-indent: 3%;
			}
		}
</style>
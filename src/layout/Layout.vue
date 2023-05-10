<template>
    <div>
		<nav-bar></nav-bar>
		<main class="app-body">
			<div class="container-fluid app-container">
				<div class="app-title" v-if="title.length">
					<h1>{{ title }}</h1><hr>
				</div>
				<slot></slot>
			</div>
		</main>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import '@/assets/scss/main.scss';

export default {
	components: {
		NavBar,
	},
	props: {
		title: {
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss">
main.app-body {
	.app-container {
		margin-top: 20px;
	}

	.app-title {
		h1 {
			font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
			color:#38b6ff;
			text-align: left;
		}
	
		hr {
			height: 2px;
			color: gray;
			background-color: gray;
			opacity: 1;
			width: 30%;
		}
	}
}

@media (max-width: 576) {
	main.app-body {
		.app-container {
			padding: {
				left: 0;
				right: 0;
			};
		}
	}
}

@media (min-width: 576) and (max-width: 767px) {
	main.app-body {
		.app-container {
			padding: {
				left: 50px;
				right: 50px;
			};
		}
	}
}

@media (min-width: 768px) and (max-width: 991px) {
	main.app-body {
		.app-container {
			padding: {
				left: 100px;
				right: 100px;
			};
		}
	}
}

@media (min-width: 992px) and (max-width: 1199px) {
	main.app-body {
		.app-container {
			padding: {
				left: 125px;
				right: 125px;
			};
		}
	}
}

@media (min-width: 1200px) {
	main.app-body {
		.app-container {
			padding: {
				left: 125px;
				right: 125px;
			};
		}
	}
}
</style>
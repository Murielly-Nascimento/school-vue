<template>
    <div>
        <main class='container'>
            <span v-for="i in particle" :key="i" class='particle'>4</span>
            <span v-for="i in particle" :key="i" class='particle'>0</span>
            <article class='content'>
                <h1>404</h1>
                <p>Você se perdeu na galaxia do <strong>404</strong>.</p>
                <p>
                    <router-link class="button" to="/">Volte para Terra</router-link>
                </p>
            </article>
        </main>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
    data() {
        return {
            particle: 40,
        }
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    font-size: 20px;
    background-color: #0a223c;
}
* {box-sizing: border-box;}
</style>

<style lang="scss" scoped>
@use "sass:math";

$anims: float, floatReverse,float2, floatReverse2;
$easeSmooth: cubic-bezier(0.39,0.575,0.28,0.995);
$color: #f0f0f5;


.container {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
    background-color: #0a223c;
	color: black;
	font-family: arial, sans-serif;
	overflow: hidden;
	max-width: 100% !important;
	width: 100% !important;
    margin: 0 !important;
}

.content {
	position: relative;
	width: 600px;
	max-width: 100%;
	margin: 20px;
    background-color: #001122;
	padding: 60px 40px;
	text-align: center;
	box-shadow: -10px 10px 67px -12px rgba(0,0,0,0.2);
	opacity: 0; 
	animation: apparition 0.8s 1.2s $easeSmooth forwards;

    h1 {
		color: $color;
        font-family: system-ui;
    }
	
	p {
		font-size: 1.3rem;
		margin-top: 0;
		margin-bottom: 0.6rem;
		letter-spacing: 0.1rem;
		color: $color;
		
		&:last-child{margin-bottom: 0;}
	}
	
	a.button {
		display: inline-block;
		margin-top: 2rem;
		padding: 0.5rem 1rem;
		border: 3px solid $color;
		background: transparent;
		font-size: 1rem;
		color: $color;
		text-decoration: none;
		cursor: pointer;
		font-weight: bold;
	}
}

.particle {
	position: absolute;
	display: block;
	pointer-events: none;
    color: #fff;
	
	@for $i from 1 through 80 {
		&:nth-child(#{$i}){
			$size: random(20) + 10;
			$blur: $i * 0.02;
			$speed: random(20)+20; 
			$delay: random(10)*0.1;
			$anim: nth($anims, random(length($anims)));
			
			top: math.div(random(100), (100 + math.div($size, 8))) * 100%;
			left: math.div(random(100), (100 + math.div($size, 10))) * 100%;
			font-size: $size + px;
			filter: blur( (#{$blur}) + px);
			animation: $speed+s  $anim infinite;
		}
	}
}

@keyframes apparition {
	from {
		opacity: 0;
		transform: translateY(100px);
	}
	
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes float {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(180px);
	}
}

@keyframes floatReverse {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(-180px);
  }
}
	
@keyframes float2 {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(28px);
	}
}

@keyframes floatReverse2 {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(-28px);
	}
}

@mixin animation ($delay, $duration, $animation) {
  animation-delay: $delay;
  animation-duration: $duration;
  animation-name: $animation;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}
</style>
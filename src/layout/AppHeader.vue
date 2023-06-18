<template>
	<header class="app-header">
		<div class="row d-flex align-items-center">
			<div class="col-auto col-xl" v-if="isMobile">
				<font-awesome-icon
					:icon="['fas', 'bars']"
					style="font-size: 24px;"
					@click="showSideBar"
				/>
			</div>
			<div class="col d-flex align-items-center justify-content-center justify-content-xl-start">
				<logo-ufu max-width="100%"></logo-ufu>
			</div>
			<div class="col-auto col-xl d-flex align-items-center justify-content-end pr-4">
                <side-bar
					v-if="isMobile"
					:opened.sync="sidebarStatus"
					@open="showSideBar"
					@close="hideSideBar"
				></side-bar>
                <nav-bar v-else></nav-bar>
				<avatar-dropdown />
			</div>
		</div>
	</header>
</template>

<script>
import LogoUfu from '@/components/LogoUfu.vue';
import AvatarDropdown from '@/layout/AvatarDropdown.vue';
import SideBar from '@/layout/SideBar.vue';
import NavBar from '@/layout/NavBar.vue';

const MAX_WIDTH = 1240;

export default {
    name: 'AppHeader',
	components: {
		SideBar,
		NavBar,
		LogoUfu,
		AvatarDropdown,
	},
	data() {
		return {
			sidebarStatus: false,
			isMobile: window.innerWidth < MAX_WIDTH,
		}
	},
	created() {
		window.addEventListener("resize", this.onResize.bind(this));
	},
	watch: {
		sidebarStatus(newVal) {
			console.log(newVal);
		}
	},
	methods: {
		onResize() {
			this.isMobile = window.innerWidth < MAX_WIDTH
		},
		toggleSideBar() {
			this.sidebarStatus = !this.sidebarStatus;
		},
		showSideBar() {
			console.log('showSideBar');
			this.sidebarStatus = true;
		},
		hideSideBar() {
			console.log('hideSideBar');
			this.sidebarStatus = false;
		}
	},
}
</script>

<style lang="scss" scoped>
.app-header {
	margin-top: 15px;
	// margin-left: 10px;
}
</style>
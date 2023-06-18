<template>
    <div class="dropdown">
        <button
            class="btn-profile"
            type="button"
            id="profile-dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
		>
            <font-awesome-icon icon="fa-solid fa-circle-user" />
        </button>
        <ul class="dropdown-menu profile-dropdown" aria-labelledby="profile-dropdown">
            <li>
                <router-link class="dropdown-item" to="/perfil">Perfil</router-link>
                <hr class="profile-dropdown-divisor" />
            </li>
            <li><button type="button" @click="logout">Sair</button></li>
        </ul>
    </div>
</template>

<script>
import { logout } from '@/services';
export default {
    name: 'AvatarDropdown',
    components: { logout }
}
</script>

<style lang="scss" scoped>
.profile-dropdown {
	background-color: #38b6ff;
	color: black;
	text-align: center;

	hr.profile-dropdown-divisor {
		width: 90%;
		height: 1px;
		color: #85858545;
		margin: 0 auto !important;
	}

	a, button {
		background-color: inherit;
		text-align: inherit;
		color: inherit;
		width: 100%;
		border: none;
		outline: none;
		padding: 10px;

		&:hover{
			background-color:#294d73;
			color: #f0f0f5;
		}
	}
}

.btn-profile {
	background-color: transparent;
	padding: 0 !important;
	border-radius: 50%;
	border: none;
	outline: none;

	.fa-circle-user {
		font-size: 2.5rem;
		color: #38b6ff;
	}
}

@media (min-width: 1240px) {
	.btn-profile {
		margin: {
			left: 1rem;
			right: 2rem;
		}
	}
}
</style>
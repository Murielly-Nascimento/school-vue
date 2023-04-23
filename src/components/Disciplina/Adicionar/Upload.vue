<template>
	<div class="dropbox">
		<input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
			accept="image/*" class="input-file">
		<p id="icon">
			<font-awesome-icon icon="fa-solid fa-cloud-arrow-up" />
		</p>
	</div>
</template>
  
<script>
</script>

<style lang="scss">
	.dropbox {
		outline: 2px dashed grey; /* the dash box */
		outline-offset: -10px;
		color: dimgray;
		padding: 10px 10px;
		min-height: 200px; /* minimum height */
		position: relative;
		cursor: pointer;
	}

	.input-file {
		opacity: 0; /* invisible but it's there! */
		width: 100%;
		height: 200px;
		position: absolute;
		cursor: pointer;
	}

	#icon {
		font-size: 5em;
		text-align: center;
		padding: 50px 0;
		color: white;
	}
</style>
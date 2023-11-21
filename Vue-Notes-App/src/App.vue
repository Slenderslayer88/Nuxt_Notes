<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Note from "./components/Note.vue"
const num = 10;
</script>

<template>
	<div class="collection-bar">
		
	</div>
	<Note title="test"></Note>
	<RouterView />
</template>

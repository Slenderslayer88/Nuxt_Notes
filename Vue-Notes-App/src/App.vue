<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Note from "./components/Note.vue"
import NotesContainer from './components/NotesContainer.vue';
const num = 10;
</script>

<template>
	<div class="collection-bar">
		
	</div>
	<NotesContainer></NotesContainer>
	<RouterView />
</template>

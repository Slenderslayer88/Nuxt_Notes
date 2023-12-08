<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Note from "./components/Note.vue"
import NotesContainer from './components/NotesContainer.vue';
import CollectionBar from './components/CollectionBar.vue';
const num = 10;
</script>

<template>
	<div id="top"></div>
    <!-- <CollectionBar class="w-1/4 h-screen"/> -->
	<NotesContainer />
	<!-- <RouterView /> -->
</template>

<style>
	body {
        display: flex;
		margin: 0px;
	}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Note from "./components/Note.vue"
import NotesContainer from './components/NotesContainer.vue';
import CollectionBar from './components/CollectionBar.vue';
const num = 10;
</script>

<template>
	<div id="top"></div><!--Teleport target-->
	<NotesContainer /> <!--Component-->
    <footer class="mb-5 ml-5 fixed bottom-0 left-0">
        <div id="Rory's contributions" >
            Garret Mullings's contributions: Testing
        </div>
        <div id="Rory's contributions" >
            Rory Schillo's contributions: My main contribution was adding the note editor popup modal. This feature allows users to edit the main text and title of notes using Vue's modal 
            system. I also did most of the styling for the app and created the presentation slides. And I assisted in the making of the Note and NoteCollection components.
        </div>
    </footer>
</template>

<style>
	body {
        display: flex;
		margin: 0px;
	}
</style>

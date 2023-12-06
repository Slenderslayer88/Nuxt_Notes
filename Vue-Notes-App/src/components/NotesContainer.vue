<template>
	<Teleport to="#top">
		<div  v-if="showAddModal" class="overlay">
			<AddNoteModal 
				@close="(i) => showAddModal = i"
				@add-note="addNote"
			/>
		</div>
	</Teleport>
	<div class="cards-container flex space-x5"> 
		<div v-for="note in noteStore.notes" 
			ref="el"
			key="note.name"
		>
			<Note
				v-bind:note="note"
				@delete="deleteNote"
			/>
		</div>
        <div class="flex justify-between flex-col w-80 h-80">
		    <button @click="showAddModal = true">+</button> 
	    </div>  
	</div>
    
</template>

<script setup>
	import { ref } from 'vue';
    import Note from './Note.vue';
	import AddNoteModal from './AddNoteModal.vue'
	import { useNoteStore } from '../stores/NoteStore';

	const showAddModal = ref(false)
	const noteStore = useNoteStore();

	const deleteNote = (id) => {
		console.log('removing note', id)
		noteStore.deleteNote(id)
	}

	const addNote = (note) => {
		noteStore.addNote(note);
		showAddModal.value = false;
	}
</script>

<style scoped>
    .note {
        display: flex;
        flex-direction: row;
    }
</style>
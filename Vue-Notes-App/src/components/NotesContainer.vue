<template>
	<Teleport to="#top">
		<div  v-if="showAddModal" class="overlay">
			<AddNoteModal 
				@close="(i) => showAddModal = i"
				@add-note="addNote"
			/>
		</div>
	</Teleport>
	<div>
		<button @click="showAddModal = true">+</button> 
	</div>
	<div class="cards-container flex space-x5"> 
		<div class="note" v-for="note in notes" 
			ref="el"
			key="note.name"
		>
			<Note
				v-bind:note="note"
				@delete="deleteNote"
			/>
		</div>
	</div>
    
</template>

<script setup>
	import { ref } from 'vue';
    import Note from './Note.vue';
	import AddNoteModal from './AddNoteModal.vue'
	const showAddModal = ref(false)

	const notes = ref([{
		title: "Sample Title",
		text: "Some sample main text here, should be able to fit a few lines of text at least. should it have vertical scrolling?",
		id: Math.floor(Math.random() * 1000000)
	}])

	const deleteNote = (id) => {
		console.log('removing note', id)
		for (let i = 0; i < notes.value.length; i++) {
			if (notes.value[i].id === id) {
				console.log(notes.value[i].id);
				console.log(id)
				notes.value.splice(i, 1);
			}
		}
	}

	const addNote = (note) => {
		notes.value.push({
			title: note.title,
			text: note.text,
			id: Math.floor(Math.random() * 1000000)
		})
		showAddModal.value = false;
	}
</script>

<style scoped>
    .note {
        display: flex;
        flex-direction: row;
    }
</style>
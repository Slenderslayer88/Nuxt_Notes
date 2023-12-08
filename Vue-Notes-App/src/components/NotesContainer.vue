<template>
	<Teleport to="#top">
		<div  v-if="showAddModal" class="overlay">
			<AddNoteModal 
				@close="(i) => showAddModal = i"
				@add-note="addNote"
			/>
		</div>
	</Teleport>
	<div class="cards-container flex ml-5 items-start flex-wrap gap-4 w-3/4 mt-5 mr-5"> 
		<div v-for="note in noteStore.notes" 
			ref="el"
			key="note.name"
            class="w-auto h-auto inline"
		>
			<Note
				v-bind:note="note"
				@delete="deleteNote"
			/>
		</div>
        <div class="flex justify-between flex-col relative" id="addBtnDiv">
		    <button id="addBtn" class="absolute text-4xl bottom-1/2 right-1/2" @click="showAddModal = true">+</button> 
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
    .cards-container {
        height: 204px;
    }
    #addBtn {
        width: 75px;
        height: 75px;
        transform: translate(+50%, +50%);
		color: #ababab;
		background-color: rgb(29, 121, 63);
		border-radius: 5rem;;
    }

    #addBtnDiv{
        width: 204px;
        height: 204px;
    }
    .note {
        display: flex;
        flex-direction: row;
    }
</style>
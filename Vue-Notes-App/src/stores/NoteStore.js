import { defineStore } from 'pinia'
import { Note } from '../Classes/Note.class'
import { ref } from 'vue'

export const useNoteStore = defineStore('notes', () => {
	const notes = ref([new Note("Sample note text", "Sample Title")])

	function addNote(note) {
		notes.value.push(new Note(note.text, note.title))
	}

	function deleteNote(id) {
		for (let i = 0; i < notes.value.length; i++) {
			if (notes.value[i].id === id) {
				console.log("found ", notes.value[i].id);
				notes.value.splice(i, 1);
			}
		}
	}

	return {
		notes,
		addNote,
		deleteNote
	}
})
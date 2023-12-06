import { defineStore } from 'pinia'
import { Note } from '../Classes/Note.class'

export const useNoteStore = defineStore('notes', () => {
	const notes = [new Note("Sample note text", "Sample Title")]

	function addNote(note) {
		notes.push(new Note(note.text, note.title))
	}
	return {
		notes,
		addNote
	}
})
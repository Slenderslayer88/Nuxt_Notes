import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
	const currentCollection = { name: "NAME", noteArr: [{noteobj}]}; //POINTER TO COLLECTION OBJECT

	const collections = []; //ALL COLLECTIONS

	//ADD A COLLECTION OBJECT
	function addCollection({name, noteArr}) {

	}
	
	return { currentCollection, collections, addCollection }
})

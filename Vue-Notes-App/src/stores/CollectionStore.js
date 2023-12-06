import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Collection } from '../Classes/Collection.class';

export const useCollectionStore = defineStore('collection', () => {
	const currentCollection = ref({}); //TODO: POINTER TO COLLECTION OBJECT

	const collections = ref([]); //ALL COLLECTIONS

	//ADD A COLLECTION OBJECT
	function addCollection({name, noteArr}) {
		collections.push(new Collection(name, notearr));
	}
	
	return { currentCollection, collections, addCollection }
})

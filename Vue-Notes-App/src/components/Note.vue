<template>
    <div class="flex">
        <div id="border" class="flex justify-between flex-col">
            <div id="header">
                <div id="title" class="font-bold text-2xl">
                    {{ note.title }}
                </div>
            </div>
        
            <div id="main-text">
                {{ note.mainText }}
            </div>
            <div id="btns-container" >
                <div id="btns-div" class="flex justify-evenly">
                    <button id="delete-btn" @click="onDeleteClick">Delete</button>
                    <button id="show-modal" @click="onEditClick">Edit</button>
                </div>   
            </div>
        </div>
    </div>

    <NotePopupModal v-if="showNotePopupModal" @close="onEditClose">

        <template v-slot:header> You are editing {{ note.title }} </template>
        <template v-slot:body>
            <textarea id="text-area">{{ note.text }}</textarea>
        </template>
    </NotePopupModal>
</template>

<script setup>
    import NotePopupModal from './NotePopupModal.vue';
	
    import { ref } from 'vue'

    const showNotePopupModal = ref(false);

    function onEditClick(){
        showNotePopupModal.value = true;
        emit("edit");
    }

    function onEditClose(){
        showNotePopupModal.value = false;
    }
	
	function onDeleteClick() {
		emit('delete', props.note.id)
	}
    
    const emit = defineEmits(['delete', 'edit']);

    const props = defineProps(['note']);
</script>

<style scoped>
    #text-area {
        width: 100%;
        height: 500px;
    }
    #title {
        text-align: center;
    }
    #border {
        border-style: solid;
        padding: 1.5em;
        width: 150px;
        height: 150px;
    }
    .btn {
        display: inline;
    }
    .right-align {
        float: right;
    }
</style>
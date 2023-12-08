<template>
    <div class="flex">
        <div id="border" class="flex justify-between flex-col"> <!--tailwind css-->
            <div id="header">
                <div id="title" class="font-bold text-2xl">
                    {{ title }}
                </div>
            </div>
        
            <div id="main-text">
                {{ mainText }}
            </div>
            <div id="btns-container" >
                <div id="btns-div" class="flex justify-evenly"> <!--Tail wind for display: flex; justify content: space-around-->
                    <button id="delete-btn" @click="onDeleteClick">Delete</button>
                    <button id="show-modal" @click="onEditClick">Edit</button>
                </div>   
            </div>
        </div>
    </div>

    <NotePopupModal v-if="showNotePopupModal" @close="onEditClose"> <!--v-if directive, component-->

        <template v-slot:header>
            <textarea class="w-full resize-none" id="title-editor" v-model="title">{{ title }} </textarea>
        </template>
        <template v-slot:body>
            <textarea class="w-full h-96" id="text-editor" v-model="mainText">{{ mainText }}</textarea>
        </template>
    </NotePopupModal>
</template>

<script setup>
    import NotePopupModal from './NotePopupModal.vue';
    import { ref } from 'vue'

    const emit = defineEmits(['delete', 'edit']); //emits as seen in previous component
    const props = defineProps(['note']);

    const title = ref(props.note.title);
    const mainText = ref(props.note.mainText);
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
		border-radius: 2rem;
        border-style: solid;
        padding: 1.5em;
        width: 150px;
        height: 150px;
		font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		color: #515664;
		background-color: rgb(56, 213, 237);
    }
    .btn {
        display: inline;
		background-color: rgb(56, 213, 237);
		color: #515664;
    }
    .right-align {
        float: right;
    }
	button {
		border-radius: 1rem;
	}
</style>
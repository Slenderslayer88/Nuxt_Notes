<template>
    <div id="border">
        <div id="header">
            <div id="title">
                <h1>{{ title }}</h1>
            </div>
        </div>
    
        <div id="main-text">

        </div>
        <div id="btns-container">
            <div id="btns-div">
                <div class="btn" id="delete-btn-div">
                    <button id="delete-btn">Delete</button>
                </div>
                <div class="btn right-align" id="edit-btn-div">
                    <button id="show-modal" @click="onEditClick">Edit</button>
                </div>
            </div>   
        </div>
    </div>
    <NotePopupModal v-if="showNotePopupModal" @close="onEditClose">

        <template v-slot:header>
            You are editing {{ title }}
        </template>
        <template v-slot:body>
            <textarea id="text-area">
                {{ text }}
            </textarea>
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
    
    const emit = defineEmits(['delete', 'edit'])

    defineProps({
        title: String,
        text: String,
        id: String
    })
</script>

<style scoped>
    #text-area {
        width: 100%;
        height: 500px;
    }
    #btns-container {
        position: relative;
        min-height: 50px;
        padding-bottom: 30px;
    }
    #btns-div {
        position: absolute;
        bottom: 0;
        width: 100%
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
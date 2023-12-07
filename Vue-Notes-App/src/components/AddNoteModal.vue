<template>
    <div class="modal">
        <textarea v-model="newNoteTitle" name="title" id="title" cols="30" rows="1"></textarea>
        <textarea v-model="newNoteString" name="note" id="note" cols="30" rows="10"></textarea> <!-- newNote is 2 way binded to the text box-->
        <button @click="emitAddNote">Add Note</button>
        <button class="close" @click="emitClose">Close</button> <!-- listen for click event, on click, hide modal-->
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const newNoteString = ref("Sample Title"); /* Typing in the textbox is a state change */ 
    const newNoteTitle = ref("Sample note text");
    const emit = defineEmits(['addNote', 'close'])

    function emitAddNote() {
        //console.log(newNoteString);
        emit('addNote', { title: newNoteTitle.value, text: newNoteString.value });
    }
    function emitClose() {
        emit('close');
    }
</script>

<style scoped>
.modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}
.modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border:none;
    color:white;
    cursor: pointer;
    margin-top: 15px;
}

.modal .close {
    background-color: orangered;
}
</style>
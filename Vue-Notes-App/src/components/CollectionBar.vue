<template>
    <div>
        <div class="justify-evenly flex">
            <button class="inline">Add</button>
            <button class="inline">Delete</button>
        </div>
        <div class="collection-container border-solid border-3">
            <NoteCollection></NoteCollection>  
        </div>
    </div>
</template>

<script setup>
    import NoteCollection from './NoteCollection.vue';
</script>
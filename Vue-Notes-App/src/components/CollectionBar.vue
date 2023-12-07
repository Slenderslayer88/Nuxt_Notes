<template>
    <div id="collection-bar">
        <div class="justify-evenly flex">
            <button class="inline w-1/2 h-10 text-lg">Add</button>
            <button class="inline w-1/2 h-10 text-lg">Delete</button>
        </div>
        <div class="collection-container border-solid border-3">
            <NoteCollection></NoteCollection>  
        </div>
    </div>
</template>

<script setup>
    import NoteCollection from './NoteCollection.vue';
</script>

<style scoped>
    #collection-bar {
        min-width: 250px;
    }
</style>
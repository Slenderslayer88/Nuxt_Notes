<template>
    <div id="header">
        <div id="title">
            <h1>{{ title }}</h1>
        </div>
        <div id="delete-btn-div">
            <button id="delete-btn">X</button>
        </div>
    </div>
    
    <div id="main-text">

    </div>
</template>

<script setup>
    const emits = defineEmits(['delete', 'edit'])

    defineProps({
        title: String,
        text: String,
        id: String
    })
</script>
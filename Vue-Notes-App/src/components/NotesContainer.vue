<template>
	<div class="horizontal-list">
		<div
			v-for="note in notes" 
			class=notes-list>
	
		</div>
        <Note title="test" text="" @edit="onEdit"></Note>
		<div>
			<Button>+</Button>
		</div>
	</div>
    
</template>

<script setup>
    import Note from './Note.vue';


</script>
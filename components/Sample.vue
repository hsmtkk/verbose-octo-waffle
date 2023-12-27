<template>
    <v-text-field v-model="inputText"></v-text-field>
    <v-btn v-on:click="submitClicked">Submit</v-btn>
    <v-progress-circular v-if="status.value == 'pending'" indeterminate></v-progress-circular>
    <p>{{ data }}</p>
</template>

<script setup lang="ts">
const PENDING = "pending"

const inputText = ref("init")
const data = ref("")
const status = ref("init")

const submitClicked = () => {
    const asyncData = useLazyFetch("/api/toupper", {
        method: "GET",
        query: { text: inputText.value },
    })
    data.value = asyncData.data
    status.value = asyncData.status
}

</script>
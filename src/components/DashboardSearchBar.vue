<template>
    <div class="search-container">
        <p>Dash<span class="text-color">board</span></p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .search-container {
        width: 80%;
        position: fixed;
        right: 20%;
        top: 0;
        z-index: 3;
        left: 0;
        height: 3em;
        background-color: white;
        padding-top: 1px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.014);
        text-align: center;
    }

    .text-color {
        color: #8A6DD1;
        font-weight: bold;
    }
</style>
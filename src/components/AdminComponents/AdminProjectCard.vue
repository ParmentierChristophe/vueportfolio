<template>
    <div class="Card">
        <img src="../../assets/img/test.jpg" />
        <div class="card-body">
            <h3>Title of project</h3>
            <p>type</p>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .Card {
        width: 200px;
        height: 200px;
        padding: 20px;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        display: grid;
        z-index: 2;
        margin: 1em;
    }


    .Card img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 3;
    }

    .card-body {
        padding-top: 1em;
    }
</style>
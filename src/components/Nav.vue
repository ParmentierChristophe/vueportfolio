<template>
    <ul class="nav" v-scroll-spy-active="{class: 'is-active'}" v-scroll-spy-link>
        <li class="is-active">Home</li>
        <li class="pdl2">Work</li>
        <li class="pdl2">Contact</li>
        <li class="pdl2">Blog</li>
    </ul>

</template>

<script>
    export default {

    }
</script>

<style scoped>
    .nav {
        position: fixed;
        z-index: 4;
        width: 100%;
        margin: 0;
        height: 40px;
        display: flex;
        align-items: center;
        padding-top: 1em;
        padding-bottom: 1em;
        justify-content: center;
        padding-left: 0px;
        background-color: rgba(255, 255, 255, 0.75);
    }

    li {
        list-style: none;
        font-weight: bold;
        color: rgb(131, 131, 131);
    }

    .pdl2 {
        margin-left: 2em;

    }

    .is-active {
        color: #6E7FF3;
    }
</style>
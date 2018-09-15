<template>
    <div class="sidebarRightContainer">
        <div class="conectInfo">
            <p>christophe P.</p>
            <div class="logout">
                <img src="../assets/img/disco.png" alt="">
                <p>logout</p>
            </div>

        </div>
        <p>test sidebar</p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .sidebarRightContainer {
        width: 20%;
        float: right;
        background: -webkit-linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
        height: 100vh;
        z-index: 3;
        right: 0;
        position: fixed;
    }

    .conectInfo {
        display: flex;
        color: white;
        border-bottom: 0.5px solid rgba(221, 217, 217, 0.5);
        height: 3em;
    }
    .logout {
        display: flex;
        align-items: center;
    }
</style>
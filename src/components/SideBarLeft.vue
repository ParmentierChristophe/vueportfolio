<template>
    <div class="sidebarleft">
        <div class="Menu-left">
            <a href="" class="link-active">
                <!-- <img src="../assets/img/picture.png" alt=""> -->
                <p>Acceuil</p>
            </a>
            <a class="link-no-active" href="">
                <!-- <img src="../assets/img/picture.png" alt=""> -->
                <p>Projets</p>
            </a>
            <a class="link-no-active" href="">
                <!-- <img src="../assets/img/picture.png" alt=""> -->
                <p>Profil</p>
            </a>

        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped>
    .sidebarleft {
        margin-top: 3em;
        height: 100%;
    }

    .Menu-left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-content: flex-end;
    }

    .Menu-left a {
        width: 100%;
        height: 31vh;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .link-no-active {
        border-right: 1px solid #9999;
        color: #999999;

    }

    .link-active {
        border-right: 2px solid #8A6DD1;
        color: #8A6DD1;
    }
</style>
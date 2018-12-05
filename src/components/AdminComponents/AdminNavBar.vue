<template>
    <div class="navbar-container">
        <div class="headNav-container">
            <p>Dash<span class="text-color">board</span></p>

        </div>

        <a href="">
            <div class="profil-container">
                <div class="imgprofil-container">
                    <img src="../../assets/img/17.jpg" alt="">

                </div>
                <p>Christophe Parmentier </p>
            </div>
        </a>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .navbar-container {
        display: flex;
        height: 3.5rem;
        flex-wrap: nowrap;
        background-color: #fff;
    }

    .text-color {
        color: #8A6DD1;
        font-weight: bold;
    }

    a {
        text-decoration: none;

    }

    .headNav-container {
        width: 100% !important;
        text-align: center;

    }

    .profil-container {
        display: flex;
        height: 3.5rem;
        align-items: center;
        border-left: 1px solid #e7e7e7;
        padding: 0 1rem;


    }


    .imgprofil-container img {
        margin-right: 1rem;
        border-radius: 50%;
        max-width: 2.5rem;
    }

    .profil-container p {
        color: rgba(0, 0, 0, 0.5);
        text-decoration: none;
        white-space: nowrap !important;

    }

    .profil-container p::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: .255em;
        vertical-align: .255em;
        content: "";
        border-top: .3em solid;
        border-right: .3em solid transparent;
        border-bottom: 0;
        border-left: .3em solid transparent;
    }
</style>
<template>
    <div class="sidebarleft">

        <div class="logoTopSidebar">
            <img src="../../assets/img/logo.png" alt="">
            <p>Crispy</p>
        </div>

        <div class="Menu-left">
            <nav>
                <ul>
                    <li>
                        <a href="">
                            Acceuil
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Projets
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Profil
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped>
    .logoTopSidebar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3.5rem;
        border-bottom: 1px solid #e7e7e7;
        font-weight: bold;
    }

    .logoTopSidebar img {
        width: 2.5rem;
        padding: 0.5rem;
    }

    .sidebarleft {
        height: 100vh;
    }

    .Menu-left {
        display: flex;
        flex-direction: column;

    }

    ul {
        margin-block-start: 0em;
        padding-inline-start: 0px;
        margin-block-end: 0em;


    }

    li a {
        display: flex;
        align-items: center;
        text-decoration: none;
        border-bottom: 1px solid #e1e5eb;
        font-weight: 400;
        color: #3d5170;
        padding: 2rem ;
    }

    li a:hover {
        background-color: #fbfbfb;
        transition: 0.5s;
    }

    li {
        list-style: none;
    }
</style>
<template>
    <div class="Header">
        <div class="Bg"></div>
        <section class="Head">
            <h1 class="Head__Title">Christophe
                <br> Parmentier</h1>
            <p class="Head__Subtitle">Developpeur Fullstack | Designer Formateur</p>
            <p class="Head__Paragraph">Hey ! Bienvenue sur mon site. n’hesitez pas à me faire un petit
                <a class="Head__Paragraph-link" href="">coucou !</a>
            </p>
        </section>
        <div class="Mouse">
            <div class="Mouse__Img">
                <a href="#section7">
                    <img src="../assets/img/mouse.png" alt="">
                </a>
            </div>
        </div>
        <div class="svg">

            <Wave />
        </div>
    </div>
</template>
<script>
    import Wave from './Wave';

    export default {
        components: {
            Wave
        }

    }
</script>

<style scoped>
    /* .Bg {
        position: absolute;
        width:50%;
        height: 100vh;
        right: 0;
        top: 0;
        background-image: url('../assets/img/Mask4.svg');
        background-repeat: no-repeat;
        background-position: center;

    } */

    .svg {
        position: absolute;
        bottom: -5px;
        width: 100%;
        z-index: 1;
    }

    .Header {
        height: 100vh;
        background-size: cover;
        background-position: center;
        position: relative;
        background: white;

    }

    .Head {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-left: 100px;
    }


    .Head__Title {
        /* Christophe Parmentier: */
        background: -webkit-linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
        font-size: 72px;
        margin-bottom: 0px;
        line-height: 0.9em;
        padding-top: 120px;
    }

    .Head__Subtitle {
        font-size: 36px;
        font-weight: 900;
        width: 90%;
        margin-bottom: 0px;

    }

    .Head__Paragraph {
        font-size: 24px;
        font-weight: 700;
        color: #A0A0A0;
        width: 70%;
    }

    .Head__Paragraph-link {
        /* coucou: */
        font-size: 24px;
        color: #6E7FF3;
        font-weight: 700;
        display: inline-block;
        position: relative;
        text-decoration: none;
        border-bottom: 2px solid #6E7FF3;
        z-index: 3;


    }


    .Head__Paragraph-link:hover {
        color: white;
        z-index: 3;

    }

    .Head__Paragraph-link:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: #6E7FF3;
        z-index: -1;
        transition: all 0.2s cubic-bezier(0.17, 0.67, .83, 0.67);
    }

    .Head__Paragraph-link:hover:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #6E7FF3;

        z-index: -1;
    }

    /* Slide down mouse */

    .Mouse {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Mouse__Img {
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        padding: 1rem;
        -webkit-animation-name: mouse;
        /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 1.5s;
        /* Safari 4.0 - 8.0 */
        animation-name: mouse;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        z-index: 3;

    }


    /* Safari 4.0 - 8.0 */

    @-webkit-keyframes mouse {
        25% {
            opacity: 0.6;
        }

        50% {
            bottom: 5px;
        }
    }


    /* Standard syntax */

    @keyframes mouse {
        25% {
            opacity: 0.6;
        }

        50% {
            bottom: 5px;
        }
    }
</style>
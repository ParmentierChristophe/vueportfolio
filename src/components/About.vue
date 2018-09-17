<template>
    <div class="About">

        <div class="AboutContainer">
            <h2 class="contact-me">Contactez moi</h2>
            <div class="AboutTextContainer">
                <a class="contact-mail" href="">hello@christophe-parmentier.fr</a>
            </div>
            <h3 class="contact-me">Vous pouvez aussi me contacter sur</h3>
            <div class="social-media-container">
                <ul class="social-media">
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Github</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
            </div>
            <div class="footer">
                <p>Copyright © Christophe Parmentier 2018. All Rights Reserved.</p>
                <p>Made with love.</p>
            </div>
        </div>


    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    /* .About {
        width: 100%;
        background-color: #6E7FF3;
        height: 100vh;
        position: relative;
    }

    .WaveContainerTop {
        position: relative;
        width: 100%;
        top: -50px;


    }

    .WaveContainerTop::after {
        content: "";
        left: -1440px;
        background: url(../assets/img/wave.svg) repeat-x;
        height: 600px;
        width: calc(1440px * 3);
        position: absolute;
        bottom: -585px;
        right: 0;
        z-index: -10;
        animation: infiniteStats 20s linear infinite;
    }

    @keyframes infiniteStats {
        0% {
            transform: translate3d(-1440px, 0, 0);
        }
        25% {
            transform: translate3d(-1080px, 0, 0);
        }
        50% {
            transform: translate3d(-740px, 0, 0);
        }
        75% {
            transform: translate3d(-360px, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        } 
    }

    .WaveSvg {
        width: 100%;
        height: auto;
    }*/
    svg {
        position: relative;
        top: 3px;
    }

    .AboutContainer {
        width: 70%;
        padding-top: 30px;
        margin: 0 auto;
    }

    .About {
        padding-top: 8em;
        background-color: #fff;
    }

    .subtitle {
        /* Work: */
        font-size: 96px;
        font-weight: bold;
        background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-left: 100px;
        padding-top: 0.5em;
    }


    .contact-me {
        font-weight: lighter;
    }

    .contact-mail {
        background: -webkit-linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
        -webkit-text-fill-color: transparent;
        font-size: 7vh;
        text-decoration: none;
        background-clip: text;
        -webkit-background-clip: text;


    }

    .contact-mail:hover {
        border-bottom: 4px solid #5753C9;
    }

    .social-media-container {
        width: 100%;
    }

    .social-media {
        display: flex;
        flex-wrap: wrap;
        text-decoration: none;
        line-height: 3em;
        list-style: none;
        padding-left: 0;
    }

    .social-media li {
        margin-right: 50px;
        font-size: 24px;
    }

    .social-media li a {
        text-decoration: none;
        color: #999999;
        transition: 0.5s;

    }

    .social-media li a:hover {
        color: #000;
        font-weight: bold;
    }

    .footer {
        padding: 3em 0;
        font-weight: 400;
        font-size: 14px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    @media screen and (max-width: 840px) {

        .contact-mail {
            font-size: 8vw;
        }
    }
</style>
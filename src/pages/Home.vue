<template>
    <div class="body">
        <!-- <Nav ref="Nav" /> -->
        <ul ref="Nav" class="nav" v-scroll-spy-active="{class: 'is-active'}" v-scroll-spy-link>
            <li :key="item" v-for="item in titles" class="pdl2">
                <a>{{item}}</a>
            </li>
            <li class="pdl2">
                <a>

                    Blog
                </a>
            </li>


            <!-- <li class="is-active">Home</li>
            <li class="pdl2">Work</li>
            <li class="pdl2">Contact</li>
            <li class="pdl2">Blog</li> -->
        </ul>
        <div v-scroll-spy>

            <div>

                <Head ref="Head" />

            </div>


            <div>
                <h2 id="section7" class="subtitle" ref="Work">Work</h2>
                <section class="Cards" ref="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                </section>

            </div>

            <div>
                <section class="AboutSection">
                    <div class="bottomWave">

                        <Wave />
                    </div>
                    <div>
                        <About />

                    </div>

                </section>

            </div>
        </div>

    </div>
</template>

<script>
    import ScrollReveal from "scrollreveal";


    import Head from "../components/Head";
    import Card from "../components/Card";
    import Nav from "../components/Nav"
    import About from '../components/About';
    import Wave from '../components/Wave';


    export default {
        components: {
            Head,
            Card,
            Nav,
            About,
            Wave
        },


        data() {
            return {
                titles: [
                    'Home',
                    'Works',
                    'Contact',
                ],
                sr: null,
            };
        },
        mounted() {
            this.sr = new ScrollReveal({
                reset: true,
                duration: 1800,
            });
            this.reveal();
        },
        methods: {
            reveal() {
                const cardsLeft = this.$refs.cards.querySelectorAll('.Card');
                this.sr.reveal(cardsLeft, {
                    origin: 'left',
                    distance: '50px',
                    interval: 200,

                });

                this.sr.reveal(this.$refs.Work, {
                    origin: 'top',
                    distance: '50px',
                });
                this.sr.reveal(this.$refs.Head.$el, {
                    origin: 'top',
                    distance: '70px',
                    opacity: 1,
                    reset: false,

                });
                this.sr.reveal(this.$refs.Nav, {
                    origin: 'top',
                    distance: '70px',
                    opacity: 1,
                    delay: 1000,
                    reset: false,

                });


            },
        },
    };
</script>

<style scoped>
    .nav {
        position: fixed;
        z-index: 24;
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

    li a {
        cursor: pointer;
    }

    .pdl2 {
        margin-left: 2em;

    }

    .is-active {
        color: #6E7FF3;
    }









    .body {
        overflow-x: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: #232E4D;
    }

    .bottomWave {
        position: absolute;
        width: 100%;
        top: -6px;
        transform: rotate(180deg);
    }

    .Cards {
        display: flex;
        flex-wrap: wrap;
        padding-top: 3em;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
    }


    .subtitle {
        font-size: 96px;
        color: #fff;
        font-weight: 700;
        text-align: center;
    }

    .AboutSection {
        position: relative;
    }
</style>
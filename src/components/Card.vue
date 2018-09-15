<template>


    <div class="Card">
        <img src="../assets/img/bg2.jpg" />
        <h3>Title of project</h3>
        <p>type</p>
    </div>
    <!-- <div class="fix">
        <a href="">
            <div class="cardContainer">

                <div class="Card">
                    <p>type</p>
                    <h2>Title of preject</h2>
                    <div class="Card--Thumbnail">
                        <img class="Card--Image" src="../assets/img/test.png" alt="">

                    </div>
                </div>

            </div>
        </a>
    </div> -->

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

.Card {
  width: 300px;
  height: 225px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template: 1fr 1fr;
  margin: 20px;
  z-index: 2;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.Card:hover {
  transform: scale(1.1, 1.1) !important;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.Card:hover img {
  transform: translateY(-20px);
  height: 120%;
}

.Card img {
  position: absolute;
  top: 0;
  height: 110%;
  z-index: 3;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.Card h3 {
  color: white;
  font-size: 30px;
  width: 190px;
  z-index: 4;
}

.Card p {
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  align-self: end;
  z-index: 4;
}






    // .cardContainer {
    //     width: 80%;
    //     height: 480px;
    //     padding: 2.1rem;
    //     /* Rectangle: */
    //     background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
    //     padding-left: 3.15rem;
    //     padding-right: 3.15rem;
    //     box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    //     color: white;
    //     transition: 0.5s;



    // }

    // .cardContainer:hover {
    //     padding: 4em;
    //     margin: 0 auto;

    // }

    // .fix {
    //     padding: 2em 6em;
    //     margin: 0 auto;
    // }

    // a {
    //     display: inline-block;
    //     text-decoration: none;
    //     outline: none;
    //     width: 100%;
    //     height: 100%;
    // }

    // .Card {
    //     height: 100%;
    //     color: white;

    // }



    // .Card--Thumbnail {
    //     position: absolute;
    //     bottom: 0;
    //     right: -65px;
    // }

    // .Card--Image {
    //     width: 100%;


    // }
</style>
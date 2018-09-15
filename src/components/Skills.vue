<template>
    <div class="Skills">
        <div class="SkillContent">
            <div class="ColumnsSkills">
                <div class="ColumnSkill">
                    <div class="containerImg">
                        <img src="../assets/img/Group2.png" alt="">
                    </div>

                    <h3>Developpeur</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non totam similique, illum corporis sint nihil
                        id placeat eaque sequi. Magni pariatur consequuntur itaque hic adipisci magnam tempore quibusdam
                        unde rem!</p>
                    <h4>Languages</h4>
                    <p>HTML, CSS, JavaScript, PHP</p>
                    <h4>Tools</h4>
                    <ul>
                        <li>VSCode</li>
                        <li>Github</li>
                        <li>Bitbucket</li>
                        <li>CodeSandBox</li>
                        <li>Bulma</li>
                        <li>Bootstrap</li>
                        <li>Terminal</li>
                    </ul>
                </div>



                <div class="ColumnSkill">
                    <div class="containerImg">
                        <img src="../assets/img/Group.png" alt="">
                    </div>
                    <h3>Graphiste</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non totam similique, illum corporis sint nihil
                        id placeat eaque sequi. Magni pariatur consequuntur itaque hic adipisci magnam tempore quibusdam
                        unde rem!</p>
                    <h4>Languages</h4>
                    <p>HTML, CSS, JavaScript, PHP</p>
                    <h4>Tools</h4>
                    <ul>
                        <li>VSCode</li>
                        <li>Github</li>
                        <li>Bitbucket</li>
                        <li>CodeSandBox</li>
                        <li>Bulma</li>
                        <li>Bootstrap</li>
                        <li>Terminal</li>
                    </ul>
                </div>



                <div class="ColumnSkill">
                    <div class="containerImg">
                        <img src="../assets/img/Group3.png" alt="">
                    </div>
                    <h3>Formateur</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non totam similique, illum corporis sint nihil
                        id placeat eaque sequi. Magni pariatur consequuntur itaque hic adipisci magnam tempore quibusdam
                        unde rem!</p>
                    <h4>Languages</h4>
                    <p>HTML, CSS, JavaScript, PHP</p>
                    <h4>Tools</h4>
                    <ul>
                        <li>VSCode</li>
                        <li>Github</li>
                        <li>Bitbucket</li>
                        <li>CodeSandBox</li>
                        <li>Bulma</li>
                        <li>Bootstrap</li>
                        <li>Terminal</li>
                    </ul>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .SkillContent {
        width: 70%;
        margin: 0 auto;
        margin-top: -20rem;
        position: relative;

    }

    .ColumnsSkills {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        border-radius: 12px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        background-color: white;


    }

    .ColumnSkill {
        padding: 70px 45px;
        border-bottom: 0px solid #E6ECF8;
        border-right: 1px solid #E6ECF8;
        color: #293347;
        display: block;
        padding: 1.25rem;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        text-align: center;

    }


    .ColumnSkill:last-child {

        border-right: none;
    }

    .containerImg {
        width: 100%;
        text-align: center;
        margin: 0 auto
    }

    img {
        width: 25%;
        padding-top: 1em;
    }

    h3 {
        color: #6E7FF3;
    }

    p {
        font-weight: lighter;
        width: 70%;
        margin: 0 auto;
    }

    ul {
        padding: 0;

    }

    li {
        list-style: none;
        font-weight: lighter;
        line-height: 2rem;
    }
</style>
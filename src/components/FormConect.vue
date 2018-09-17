<template>
    <div class="form-container">
        <div class="form">
            <span class="title">Welcome</span>

            <form action="">
                <input type="text" name="email" id="email" placeholder="Email">
                <input type="password" name="password" id="password" placeholder="Password">
                <button type="submit">Login</button>
                <a class="" href="/">retour à l'accueil</a>

            </form>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .form-container {
        padding-top: 15px;
        background-color: #f2f2f2;
        min-height: 100vh;
        overflow: hidden;
    }

    .form {
        max-width: 390px;
        margin: 0 auto;
        border-radius: 10px;
        padding: 77px 55px 33px 55px;
        justify-content: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        background-color: white;
    }

    form {
        padding: 3em;
        display: flex;
        flex-direction: column;

    }

    .title {
        display: block;
        font-weight: bolder;
        font-size: 30px;
        text-align: center;
    }

    input {
        font-size: 15px;
        margin: 1em auto;
        color: #555555;
        line-height: 1.2;
        display: block;
        width: 100%;
        height: 45px;
        background: transparent;
        padding: 0 5px;
        outline: none;
        border: none;
        border-bottom: 1px solid #D2D0D2;
    }

    button {
        background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
        margin: 1em auto;
        width: 100%;
        text-align: center;
        color: white;
        padding: 1rem;
        font-size: 16px;
        border-radius: 30px;
        font-weight: bold;
        border: none;
        cursor: pointer;
    }

    a {
        font-size: 14px;
        color: #6E7FF3;
        display: inline-block;
        font-weight: normal;
        text-align: right;
        text-decoration: none;
    }
</style>
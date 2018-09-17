<template>
    <div class="container-login">
        <FormConect />

    </div>
</template>

<script>
    import Nav from "../components/Nav";
    import FormConect from "../components/FormConect";

    export default {


        components: {
            Nav,
            FormConect,

        },
    }
</script>

<style scoped>


    .container-login {
        overflow: hidden;
    }
</style>
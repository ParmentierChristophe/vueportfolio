<template>
    <div class="bg">

        <div class="board">
            <SideBarLeft class="sidebarLeft" />

            <div class="main-container">

                <AdminNavBar />

                <div class="view-container">
                    <h2 class="title-view"> Portfolio Overview</h2>
                    <AdminCardDashboard class="dash" />
                </div>

                <div>
                    <AdminProjectCard/>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import AdminNavBar from '../components/AdminComponents/AdminNavBar';
    import SideBarLeft from '../components/AdminComponents/SideBarLeft';
    import AdminCardDashboard from "../components/AdminComponents/AdminCardDashboard";
    import AdminProjectCard from "../components/AdminComponents/AdminProjectCard";


    export default {


        components: {
            AdminNavBar,
            AdminProjectCard,
            AdminCardDashboard,
            SideBarLeft

        },
    }
</script>
<style scoped>
    .bg {
        background-color: #F4F4F4;
        height: 100vh;
        overflow: auto;
    }

    .board {
        display: flex;
    }

    .sidebarLeft {
        width: 20%;
        background-color: #fff;
        box-shadow: 0 0.125rem 9.375rem rgba(90, 97, 105, .1), 0 0.25rem 0.5rem rgba(90, 97, 105, .12), 0 0.9375rem 1.375rem rgba(90, 97, 105, .1), 0 0.4375rem 2.1875rem rgba(165, 182, 201, .1);
        z-index: 1000;
    }

    .view-container {
        padding-left: 2rem;

    }

    .title-view {
        color: #6a6b6b;
        margin: 1em;
        text-transform: uppercase;
        font-weight: normal;
    }

    .dash {
        width: 100%;
    }


    .main-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
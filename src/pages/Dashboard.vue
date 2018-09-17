<template>
    <div class="bg">
        <DashboardSearchBar />

        <div class="board">
            <SideBarLeft class="sidebarLeft"/>
            <AdminCardDashboard class="dash" />

        </div>

    </div>
</template>

<script>
    import DashboardSearchBar from "../components/DashboardSearchBar";
    import AdminCardDashboard from '../components/AdminCardDashboard';  
    import SideBarLeft from '../components/SideBarLeft';

    export default {


        components: {
            DashboardSearchBar,
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
    }

    .dash {
        width: 100%;
    }
</style>
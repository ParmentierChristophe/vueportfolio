<template>
    <div class="bg">
        <DashboardSearchBar />

        <SidebarRight />
        <div class="board">
            <SideBarLeft class="sidebarLeft"/>
            <AdminCardDashboard class="dash" />

        </div>

    </div>
</template>

<script>
    import DashboardSearchBar from "../components/DashboardSearchBar";
    import SidebarRight from "../components/SidebarRight";
    import AdminCardDashboard from '../components/AdminCardDashboard';  
    import SideBarLeft from '../components/SideBarLeft';

    export default {


        components: {
            DashboardSearchBar,
            SidebarRight,
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
        width: 60%;
    }
</style>
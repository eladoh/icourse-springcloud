<template>
    <div>
        <h1>Welcome to Admin</h1>
    </div>
</template>

<script>
    export default {
        name: 'welcome',
        mounted: function(){
            this.$parent.activeSidebar("welcome-sidebar");
        },
        methods: {

        }
    }
</script>
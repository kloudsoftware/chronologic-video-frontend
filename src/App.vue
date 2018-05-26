<template>
    <div id="app">
        <navbar></navbar>
        <div class="flex min-h-screen">
            <div class="w-1/5">
            </div>
            <div class="bg-grey-lighter w-full min-h-screen h-full">
                <router-view/>
            </div>
        </div>
        <!--<Notification></Notification>-->
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Navbar from './components/partials/Navbar.vue';
    import Auth from './http/auth';

    @Component({
        components: {
            Navbar,
        }
    })

    export default class App extends Vue {
        created() {
            // noinspection TypeScriptUnresolvedVariable
            const key = this.$route.query.key;
            if (key) {
                Auth.setKey(key);
                this.$router.replace('/');
            }
        }
    }
</script>

<style lang="less">

</style>

<style src="./styles/main.css"></style>
<style src="./styles/table-component.css"></style>

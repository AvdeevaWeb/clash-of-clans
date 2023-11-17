<template>
    <header class="navbar">
        <div class="conteiner">
            <div class="navbar-content">
                <router-link class="navbar-logo" to="/">{{ app.title }}</router-link>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.title">
                    <router-link class="navbar-link" :to=" link.url">{{link.title}}</router-link></li>
                </ul> 
            </div>
        </div>
    </header>
</template>

<script>
import {app, links} from '@/components/_config'

export default {
    data(){
        return {
            app: app,
            links: links,
        }
    }
}
</script>

<style>

</style>
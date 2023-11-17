<template>
    <h1>В этом приложении:</h1>
    <ul v-for="item in aboutList" :key=item>
        <li>{{ item }}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            aboutList: ['полная настойка шаблона на Vue CLI;', 
            'установка и настройка Vue-router для Vue.js 3',
            'динамическая перерисовка без перезагрузки страницы',
            'динамический навбар и ссылки',
            'обработка несуществующих роутов',
            'хеши и моды для роутера',
            'настройка общего конфига']
        }
    }
}
</script>
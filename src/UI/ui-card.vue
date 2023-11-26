<template>
    <div class="card">
        <span class="card-name">{{name}}</span>
        <span class="card-title">{{ title }}</span>
        <span class="card-body">
            <slot>
            </slot>
        </span>

    </div>
</template>

<script>
export default {
    props:{
        name:{
            type: Number,
            required: true
        },
        title:{
            type: String,
            required: true
        },

    },
    data(){
        return{
        }
    }
}
</script>
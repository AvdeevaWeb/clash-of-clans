<template>
    <div>
        <h1>Home page</h1>
        <div class="card__wrapper" v-for="item in items" 
        :key="item.id">
            <cardUI 
            :name="item.lvl"
            :title="item.title">
            {{ item.descriptoin }}
            </cardUI>
        </div>

    </div>
</template>

<script>
import cardUI from '@/UI/ui-card.vue'
export default {
    components:{
        cardUI
    },
    data(){
        return{
            items: [
                {
                    id: 1,
                    title: 'Archer',
                    descriptoin: 'Archer Archer Archer ',
                    lvl: 3
                },
                {
                    id: 2,
                    title: 'Wizard',
                    descriptoin: 'Wizard Wizard Wizard ',
                    lvl: 5
                }
            ]
        }
    }
}
</script>
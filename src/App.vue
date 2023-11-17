<template>
  <div class="wrapper">
    <cHeader/>
    <div class="wrapper-content">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <cFooter/>
  </div>

</template>

<script>

import cFooter from '@/components/c-footer.vue'
import cHeader from '@/components/c-header.vue'

export default {
  name: 'App',
  components: {
    cFooter,
    cHeader
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div class="home">

    <AppProducts/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppProducts from '@/components/Products/AppProducts.vue';

export default {
  name: 'HomeView',
  components: {
    AppProducts
}
}
</script>

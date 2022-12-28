<template>
    <div class="container">
        <h1 class="text-center">Render Page</h1>
        <div v-for="(item, index) in fields" :key="index">
            <RenderFieldItem :index="index" :item="item" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import RenderFieldItem from "./RenderFieldItem.vue";

export default {
  name: 'RenderFields',
  components: {
    RenderFieldItem
  },
  mounted() {
    // console.log(this.fields)
  },
  methods: {
  },
  computed: {
    ...mapState(['fields'])
  }
}
</script>
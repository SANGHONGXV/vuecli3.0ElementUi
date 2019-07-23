<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{this.data}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as test from '@/api/test'
export default {
  name: 'home',
  data() {
    return {
      data:{}
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    test.test().then(res => {
      this.data = res
    })
  }
}
</script>

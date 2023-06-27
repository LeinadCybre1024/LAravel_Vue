<template>
  <h1> Count : {{ count }}</h1>
  <button @click="count++">
+
  </button>
  <button @click="count--">
    -
  </button>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)

    return{
        count
    }

   }
}
</script>
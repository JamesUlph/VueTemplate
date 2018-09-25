<template>
  <div>
  {{$attrs}}
  <input type="text" v-bind="$attrs" class="form-control" />
  </div>
</template>

<script>
export default {
  inheritAttrs:false,
  computed:{
    
  }
}
</script>

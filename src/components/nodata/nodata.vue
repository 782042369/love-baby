<template>
  <div class="th_nodata">
    {{words}}
  </div>
</template>

<script>
  export default {
    name: 'nodata',
    props: {
      words: {
        type: String
      }
    }
  }
</script>

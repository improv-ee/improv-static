<script setup>
import { Handle, Position, useVueFlow } from '@vue-flow/core'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true,
  },
})


</script>

<template>
  <div>
    <p class="text-center fs-5 mb-0">{{ name }}<br />
      <span class="text-secondary fs-6" v-if="props.data?.years">
        {{ props.data.years?.start }}
      </span>
    </p>
  </div>

  <Handle id="a" type="source" :position="Position.Bottom" />
  <Handle id="b" type="target" :position="Position.Top" />
</template>

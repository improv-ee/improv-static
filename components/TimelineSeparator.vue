<template>
    <li class="timeline-separator">
          <div class="timeline-badge">{{ label }}</div>
        </li>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        label: { type: String, required: true},
    }
})

</script>
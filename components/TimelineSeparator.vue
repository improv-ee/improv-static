<template>
    <li class="timeline-separator">
          <div :id="uid" class="timeline-badge">
          <a :href="'#'+uid" class="text-dark text-decoration-none">{{ label }}</a></div>
        </li>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        label: { type: String, required: true},
        linkId: {type: String, required: false, default: "year-"}
    },
     computed: {
    uid(){
      return this.linkId + '-' + this.label;
    }
     }
})

</script>
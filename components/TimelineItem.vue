<template>
  <li :class="invertedClass">
    <div class="timeline-badge"><i class="bi bi-calendar3"></i></div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h5 class="timeline-title">
          <slot name="title" />
        </h5>
        <p><small class="text-muted">
            <i class="bi bi-clock"></i> {{ date }} - <a :href="link" target="_blank">{{ publisher }}</a></small></p>
      </div>
      <div class="timeline-body">
        <img class="img-fluid mb-2" :src="imageUrl" v-if="image" />
        <slot name="body" />&nbsp;<a :href="link" target="_blank" class="stretched-link">loe edasi <i
            class="bi bi-chevron-double-right"></i></a>
      </div>
    </div>
  </li>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    inverted: { type: Boolean, default: false },
    date: { type: String, required: true },
    publisher: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: false }
  },
  computed: {
    invertedClass() {
      return this.inverted ? 'timeline-inverted' : '';
    },
    imageUrl() {
      return `/img/media/${this.image}`
    }
    
  }
})

</script>
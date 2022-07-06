<template>
<div>
    <a :href="link">
    <img :src="imgUrl" class="img-header rounded mt-4 mb-2"/>
    </a>
    <slot name="description"></slot>
    <a class="btn btn-primary col-8 offset-2 mb-5 mt-1" :href="link" target="_blank">
        Loe edasi - {{ cta }}
    </a>
</div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        link: { type: String, required: true },
        image: { type: String, required: true },
        cta: {type: String, required: true}
  },
  computed: {
    imgUrl() {
        return new URL(`../../assets/img/${this.image}`, import.meta.url);
    }
  }
})

</script>

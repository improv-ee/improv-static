<template>
<div>

    <h2 class="display-5 mt-3 text-center">{{ name }}</h2>
    <a :href="link">
    <img :src="image" class="img-header rounded mt-4 mb-2"/>
    </a>
    <slot name="description"></slot>
    <a class="btn btn-primary col-8 offset-2 mb-5 mt-1" :href="link" target="_blank">
        {{ cta }}
    </a>
</div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
// https://github.com/vitejs/vite/issues/1265#issuecomment-799669670
const images = import.meta.globEager("../img/*.jpg");
export default defineComponent({
    props: {
        link: { type: String, required: true },
        image: { type: String, required: true },
        cta: {type: String, required: true},
        name: {type: String, required: true}
  }
})

</script>

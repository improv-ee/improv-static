<template>
<img :src="imgUrl" class="col-md-12 img-grid" :alt="title" data-bs-toggle="modal" :data-bs-target="'#'+id"/>

<div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img :src="imgUrl" class="col-md-12" :alt="title" data-bs-toggle="modal" :data-bs-target="'#'+id"/>

      </div>
    </div>
  </div>
</div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        image: { type: String, required: true },
        title: { type: String, required: true },
        id: {type: String, required: true}
    },
    computed: {
    imgUrl() {
        return new URL(`../assets/img/${this.image}`, import.meta.url);
    }
    }
})

</script>
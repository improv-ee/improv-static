<template>
    <div class="col">
        <div class="card">
             <img :src="imgUrl" class="card-img-top" :alt="name"/>
            <div class="card-body">
                <h5 class="card-title text-center">{{ name }}</h5>
                <p class="card-text">
                    <slot name="description"></slot>
                </p>

            </div>
            <div class="card-footer text-center">
    <a :href="link" target="_blank" class="btn col-12 btn-outline-primary">{{ name }} veebileht</a>
  </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        link: { type: String, required: true },
        image: { type: String, required: true },
        name: {type: String, required: true}
  },
  computed: {
    imgUrl() {
        return new URL(`../../assets/img/${this.image}`, import.meta.url);
    }
  }
})

</script>

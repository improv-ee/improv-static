<template>
<div>
    <img :src="image" class="img-header rounded mt-4 mb-2"/>
    <slot name="description"></slot>
    <a class="btn btn-primary col-8 offset-2 mb-5 mt-3" :href="link" target="_blank">
        {{ linkTextPrefix }} {{ name }}
    </a>
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
        linkTextPrefix() {
            if (this.link.startsWith('mailto:')) {
                return 'Kirjuta pakkujale —';
            }
            return 'Loe edasi ja telli —';
        }
    }
})

</script>

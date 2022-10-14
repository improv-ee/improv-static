<template>
    <div>
        <a :href="link" target="_blank">
            <picture>
                <slot name="srcset"></slot>
                <img :src="image" class="img-header rounded mt-4 mb-2" />
            </picture>
        </a>
        <slot name="description"></slot>
        <a class="btn btn-primary col-8 offset-2 mb-5 mt-3" :href="link" target="_blank">
            <i class="bi bi-link-45deg"></i> {{ linkTextPrefix }} {{ name }}
        </a>
        <hr v-if="separators" />
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    props: {
        link: { type: String, required: true },
        image: { type: String, required: true },
        name: { type: String, required: true },
        separators: { type: Boolean, default: true }
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

<template>
    <div class="accordion-item">
        <h2 class="accordion-header" :id="headerId">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#' + collapseId" aria-expanded="false" :aria-controls="collapseId">
                {{ title }}
            </button>
        </h2>
        <div :id="collapseId" class="accordion-collapse collapse" :aria-labelledby="headerId"
            :data-bs-parent="'#' + parentId">
            <div class="accordion-body">
                <slot name="collapse-body" />
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        title: { type: String, required: true },
        parentId: { type: String, required: true },
    },
    methods: {
        slugify: function (stringToSlug) {
            return stringToSlug.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
        }
    },
    computed: {
        headerId() {
            return 'h-' + this.slugify(this.title);
        },
        collapseId() {
            return 'collapse-' + this.slugify(this.title);
        }
    },
})

</script>

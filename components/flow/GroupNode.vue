<script setup>
import { Handle, Position, useVueFlow } from '@vue-flow/core'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true,
    },
})


</script>
<style>
small {
    font-size: 0.7em;
}
</style>
<template>
    <div class="status-ended">
        <p class="text-center fs-5 mb-0">{{ name }}<br />
            <span v-if="props.data.otherNames">
                <small>(<span v-for="name in props.data.otherNames">{{ name }}</span>)</small><br />
            </span>
            <span class="text-secondary fs-6">
                {{ props.data.years?.start }} - {{ props.data.years?.end || '...' }}
            </span>
        </p>

        <span class="mt-3 badge text-bg-light"
            title="Improõppe grupid on kasvanud välja improkursuse raames, mida tüüpiliselt on juhendanud juba tegutseva grupi juhendaja/näitleja"
            v-if="props.data.badges?.isStudentGroup">#improõpe</span>
    </div>

    <Handle id="a" type="source" :position="Position.Bottom" />
    <Handle id="b" type="target" :position="Position.Top" />
</template>

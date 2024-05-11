<script setup>
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

const elements = ref([
    // nodes

    { id: 'rednar', type: 'input', label: 'Rednar Annus', position: { x: 300, y: 0 } },

    { id: 'rahel', label: 'Rahel Otsa', position: { x: 200, y: 100 } },
    { id: 'improteater', label: 'Eesti Improteater', position: { x: 450, y: 100 } },

    { id: 'jaa', label: 'Improgrupp Jaa!', position: { x: 0, y: 200 }, },
    { id: 'improkool', label: 'Rahel Otsa Improkool', position: { x: 200, y: 200 } },
    { id: 'impeerium', label: 'Improteater IMPEERIUM', position: { x: 400, y: 200 } },

    { id: 'ruutu10', label: 'Ruutu10', position: { x: 200, y: 300 } },
    { id: 'ehataht', label: 'Ehatäht', position: { x: 500, y: 350 } },
    { id: 'kimproose', label: 'kIMPROose', position: { x: 800, y: 300 } },

    
    {id: 'tonis-tanelita', label:'Tõnis (ilma Tanelita)', position: {x:0,y:500}},
    {id: 'marold', label:'Märold', position: {x:200,y:500}},
    {id: 'tr', label:'Toivo ja Rauno', position: {x:400,y:500}},
    {id: 'meelis', label:'Meelis', position: {x:600,y:500}},
    {id: 'kogumoos', label:'Kogu Moos', position: {x:800,y:500}},


    { id: 'e-rednar-improteater', source: 'rednar', target: 'improteater', animated: true },
    { id: 'e-rednar-rahel', source: 'rednar', target: 'rahel', animated: true },
    { id: 'e-rahel-kool', source: 'rahel', target: 'improkool', animated: true },
    { id: 'e-rahel-jaa', source: 'rahel', target: 'jaa', animated: true },
    { id: 'e-improteater-impeerium', source: 'improteater', target: 'impeerium', animated: true },
    { id: 'e-jaa-ruutu', source: 'jaa', target: 'ruutu10', animated: true },

    { id: 'e-ruutu-ope-tanel', source: 'ruutu10', target: 'tonis-tanelita', animated: true },
    { id: 'e-ope-marold', source: 'ruutu10', label:'Improõpe (juhendaja Märt Samma)', target: 'marold', animated: true },
    { id: 'e-tr', source: 'ruutu10', target: 'tr', animated: true },
    { id: 'e-ruutu10-meelis', source: 'ruutu10', target: 'meelis', animated: true },
    { id: 'e-ruutu10-kogumoos', source: 'ruutu10', target: 'kogumoos', animated: true },

    { id: 'e-impeerium-ehataht', source: 'impeerium', target: 'ehataht', label:'VGT improõpe (juhendaja Mairi Tikerpalu)', animated: true },
    { id: 'e-impeerium-kimproose', source: 'impeerium', target: 'kimproose', label:'Improõpe (juhendaja Marius Pärn)', animated: true },



])
</script>

<template>

    <div style="width: 100%; height: 700px;">
        <h2>Impropuu</h2>
        
        <p>Improgruppide ajalugu visuaalselt.</p>

        <VueFlow fit-view-on-init v-model="elements" :default-viewport="{ zoom: 1.5 }" :min-zoom="0.2" :max-zoom="4">
            <!-- bind your custom node type to a component by using slots, slot names are always `node-<type>` -->

            <Background />
        </VueFlow>
    </div>

</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>
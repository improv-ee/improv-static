<script setup>
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import OriginNode from '../components/flow/OriginNode.vue'
import GroupNode from '../components/flow/GroupNode.vue'
import { ControlButton, Controls } from '@vue-flow/controls'
import '@vue-flow/controls/dist/style.css'

const elements = ref([
    // nodes

    { type: 'origin', id: 'rednar', label: 'Rednar Annus', position: { x: 500, y: 0 }, data: { years: { start: 2008 } } },
    { type: 'origin', id: 'rahel', label: 'Rahel Otsa', position: { x: 200, y: 0 }, data: { years: { start: 2008 } } },

    { type: 'group', id: 'improteater', label: 'Eesti Improteater', position: { x: 450, y: 150 }, data: { years: { start: 2009 } } },
    { type: 'group', id: 'neljapaevane-annus', label: 'Neljapäevane Annus', position: { x: 1000, y: 250 }, data: { years: { start: 2016 } } },
    { type: 'archived', id: 'jaa', label: 'Improgrupp Jaa!', position: { x: 0, y: 300 }, data: { otherNames: ["Jaa Improteater"], years: { start: 2009, end: 2019 } } },
    { type: 'group', id: 'improkool', label: 'Rahel Otsa Improkool', position: { x: 200, y: 300 }, data: { years: { start: 2022 } } },

    { type: 'group', id: 'impeerium', label: 'Improteater IMPEERIUM', position: { x: 450, y: 300 }, data: { years: { start: 2013 } } },
    { type: 'group', id: 'ruutu10', label: 'Ruutu10', position: { x: 250, y: 1200 }, data: { otherNames: ["Improkraatia"], years: { start: 2013 } } },
    { type: 'archived', id: 'raheljatimo', label: 'Rahel ja Timo', position: { x: 0, y: 500 }, data: { years: { start: 2017,end:2018 } } },

    { type: 'group', id: 'ehataht', label: 'Ehatäht', position: { x: 1000, y: 400 }, data: { years: { start: 2016 } } },
    { type: 'group', id: 'jargmisekorrani', label: 'Järgmise Korrani', position: { x: 600, y: 500 }, data: { years: { start: 2019 } } },
    { type: 'group', id: 'smuuti', label: 'Smuuti', position: { x: 1100, y: 600 }, data: { years: { start: 2021 } } },
    { type: 'archived', id: 'paavst', label: 'Paavst tuleb homme', position: { x: 350, y: 500 }, data: { years: { start: 2020, end:2022 } } },
    { type: 'group', id: 'kimproose', label: 'kIMPROose', position: { x: 400, y: 730 }, data: { years: { start: 2022 } } },
    { type: 'group', id: 'improovijad', label: 'Improovijad', position: { x: 800, y: 550 }, data: { years: { start: 2023 } } },

    { type: 'group', id: 'marold', label: 'Märold', position: { x: 200, y: 1500 }, data: { years: { start: 2022 } } },
    { type: 'group', id: 'tr', label: 'Toivo ja Rauno', position: { x: 350, y: 1400 }, data: { years: { start: 2017 } } },
    { type: 'group', id: 'kahevahel', label: 'Kahe Vahel', position: { x: 0, y: 1500 }, data: { years: { start: 2018 } } },
    { type: 'archived', id: 'meelis', label: 'Meelis', position: { x: 200, y: 450 }, data: { years: { start: 2019, end: 2022 } } },
    { type: 'archived', id: 'kogumoos', label: 'Kogu Moos', position: { x: 650, y: 1100 }, data: { years: { start: 2015, end: 2017 } } },
    { type: 'archived', id: 'improssiivne', label: 'Improssiivne', position: { x: 600, y: 1600 }, data: { years: { start: 2015, end: 2016 } } },
    { type: 'archived', id: 'esimeneklass', label: 'Esimene Klass', position: { x: 1000, y: 1600 }, data: { years: { start: 2014, end: 2016 } } },
    { type: 'archived', id: 'komejant', label: 'Komejant', position: { x: 1200, y: 1600 }, data: { years: { start: 2016, end: 2017 } } },
    { type: 'archived', id: 'koosen', label: 'Koosen', position: { x: 0, y: 1300 }, data: { years: { start: 2014, end: 2016 } } },
    { type: 'archived', id: 'suhtepundar', label: 'Suhtepundar', position: { x: 600, y: 1500 }, data: { years: { start: 2021, end: 2023 } } },

    { type: 'group', id: 'tonis-tanelita', label: 'Tõnis', position: { x: 200, y: 600 }, data: { otherNames: ["Tõnis ilma Tanelita"], years: { start: 2019 } } },
    { type: 'group', id: 'kartoffel', label: 'Kartoffel', position: { x: 600, y: 1280 }, data: { otherNames: ["Toivo ja Karolina"], years: { start: 2022 } } },
    
    { type: 'group', id: 'greenlight', label: 'Green Light Comedy', position: { x: 1000, y: 1100 }, data: { years: { start: 2024 } } },
    { type: 'group', id: 'improviisor', label: 'Improviisor', position: { x: 800, y: 1100 }, data: { years: { start: 2024 } } },


    { id: 'e-rednar-improteater', label: 'asutas', source: 'rednar', target: 'improteater', animated: true },
    { id: 'e-rahel-kool', label: 'asutas', source: 'rahel', target: 'improkool', animated: true },
    { id: 'e-rahel-jaa', label: 'asutas', source: 'rahel', target: 'jaa', animated: true },
    { id: 'e-improteater-impeerium', label: 'hargnes', source: 'improteater', target: 'impeerium', animated: true },
    { id: 'e-improteater-neljapaevane-annus', label: 'juhendas', source: 'improteater', target: 'neljapaevane-annus', animated: true },
    { id: 'e-jaa-ruutu', source: 'jaa', label: 'hargnes', target: 'ruutu10', animated: true },
    { id: 'e-jaa-raheltimo', source: 'jaa', label: 'duo', target: 'raheljatimo', animated: true },

    { id: 'e-tonis-meelis', label:'muutus', source: 'meelis', target: 'tonis-tanelita', animated: true },
    { id: 'e-ope-marold', source: 'ruutu10', label: 'juhendas', target: 'marold', animated: true },
    { id: 'e-tr', source: 'ruutu10', label: 'duo', target: 'tr', animated: true },
    { id: 'e-kahe-vahel', source: 'ruutu10', label: 'duo', target: 'kahevahel', animated: true },
    { id: 'e-jaa-meelis', source: 'jaa', target: 'meelis', animated: true },
    { id: 'e-ruutu10-kogumoos', source: 'ruutu10', target: 'kogumoos', animated: true },
    { id: 'e-ruutu10-suhtepundar', source: 'ruutu10', target: 'suhtepundar', label:'juhendas', animated: true },
    { id: 'e-ruutu10-esimeneklass', label:'juhendas', source: 'ruutu10', target: 'esimeneklass', animated: true },
    { id: 'e-ruutu10-koosen', label:'juhendas', source: 'ruutu10', target: 'koosen', animated: true },
    { id: 'e-ruutu10-komejant', label:'juhendas', source: 'ruutu10', target: 'komejant', animated: true },
    { id: 'e-ruutu10-improssiivne', label:'juhendas', source: 'ruutu10', target: 'improssiivne', animated: true },

    { id: 'e-impeerium-ehataht', source: 'impeerium', target: 'ehataht', label: 'juhendas', animated: true },
    { id: 'e-impeerium-improovijad', source: 'impeerium', target: 'improovijad', label: 'juhendas', animated: true },
    { id: 'e-ehataht-smuuti', source: 'ehataht', target: 'smuuti', label: 'juhendas', animated: true },
    { id: 'e-impeerium-paavst', source: 'impeerium', target: 'paavst', label: 'juhendas', animated: true },
    { id: 'e-paavst-kimproose', source: 'paavst', target: 'kimproose', label: 'muutus', animated: true },
    { id: 'e-impeerium-jargmisekorrani', source: 'impeerium', target: 'jargmisekorrani', label: 'juhendas', animated: true },
    { id: 'e-ruutu10-kartoffel', source: 'ruutu10', target: 'kartoffel', label: 'duo', animated: true },

])

useSeoMeta({
  title: 'Impropuu - Improviseeritud teater Eestis',
  ogTitle:'Impropuu - Improviseeritud teater Eestis',
  description: 'Info Eestis impromaastiku kohta - tegutsevad improtrupid, impro õppimine, impro tellimine üritustele või koolituseks, impro viited ja ajalugu.',
  ogDescription: 'Info Eestis impromaastiku kohta - tegutsevad improtrupid, impro õppimine, impro tellimine üritustele või koolituseks, impro viited ja ajalugu.',
})

</script>

<style>
.vue-flow__node-group {
    background: #fffbd4;

    padding: 10px;
    border-radius: 0.4rem;
}

.vue-flow__node-archived {
    color: #999;
    background: #e9edf2;

    padding: 10px;
    border-radius: 0.4rem;
}

.vue-flow__node-origin {
    background: #b7f7c2;
    padding: 10px;
}
</style>
<template>
    <div>
        <div style="width: 100%; height: 50rem;">
            <h2 class="text-center display-3 mb-4">Impropuu</h2>

            <p>Improgruppide ajalugu visuaalselt. Gruppidena arvestatakse koos regulaarselt improviseerivaid
                kollektiive, kes esinevad improõppe väliselt. Loe kollektiividest lähemalt 
                <NuxtLink to="/trupid">Trupid</NuxtLink> lehelt.
            </p>

            <VueFlow fit-view-on-init v-model="elements" :default-viewport="{ zoom: 1.5 }" :min-zoom="0.2"
                :max-zoom="4">
                <Background />
                <template #node-origin="{ label, data }">
                    <OriginNode :name="label" :data="data" />
                </template>
                <template #node-group="{ label, data }">
                    <GroupNode :name="label" :data="data" />
                </template>
                <template #node-archived="{ label, data }">
                    <GroupNode :name="label" :data="data" />
                </template>
                <Controls position="top-right">
                </Controls>

            </VueFlow>

        </div>
        <p style="margin-top: 10em">Info ebaõige või grupp puudu? Kirjuta või saada <a href="https://github.com/improv-ee/improv-static/blob/main/pages/impropuu.vue">muudatusettepanek</a>.</p>
    </div>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>
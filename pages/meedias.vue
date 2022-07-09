<template>
    <div>
        <div class="d-flex justify-content-center" v-if="pending">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <ul class="timeline" v-else>

            <template v-for="year in Object.keys(news).reverse()" :key="'year-'+year" >
            <TimelineSeparator :label="year"></TimelineSeparator>
           <TimelineItem v-for="(article, index) in news[year]" :image="article.image"
            :link="article.link" :date="article.date" :publisher="article.publisher"
            :key="article.date" :inverted="index % 2 == 0">
                <template #title>{{ article.title }}</template>
                <template #body>{{ article.description }}</template>
            </TimelineItem>

</template>

        </ul>
    </div>

</template>


<script setup>
const { pending, data: news } = useLazyFetch('/media.json')
</script>

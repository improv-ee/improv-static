<template>
    <ul class="timeline">

        <template v-for="year in Object.keys(news).reverse()" :key="'year-'+year">
            <TimelineSeparator :label="year"></TimelineSeparator>
            <TimelineItem v-for="(article, index) in news[year]" :image="article.image" :link="article.link"
                :date="article.date" :publisher="article.publisher" :key="article.date" :inverted="index % 2 == 0">
                <template #title>{{ article.title }}</template>
                <template #body>{{ article.description }}</template>
            </TimelineItem>

        </template>

    </ul>
</template>

<script setup>
import news from '~/data/media.json';
</script>

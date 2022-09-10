<template>
    <div>
    
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <NuxtLink to="/tellimine">Tellimine</NuxtLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Õhtujuhtimine</li>
            </ol>
        </nav>

            <p class="lead">Improviseerijast õhtujuht paneb sinu ürituse oma muheda oleku ning huumorisoonega elama.</p>
            <p>Võid
                kindel olla, et ta suudab ootamatute arengutega hetkeliselt kohaneda, ning osalejatega kiirelt suhestuda.
            Õhtujuhtimist pakuvad järgmised tegijad - võrdle pakkumisi <i class="bi bi-caret-down"></i>, ning võta tegijaga otse ühendust.</p>
            <hr />
    
            <GigAd image="/img/gig/impeerium.jpg" name="Improteater IMPEERIUM"
            link="https://improimpeerium.ee/tellimused/" :separators="false">
                <template #description>
                    <p>Kogu sündmuse muretuks läbiviimiseks leiad imperaalide hulgast ka inimese, kes sujuvalt ja
                        meeleolukalt köidab Su erilise päeva ühtseks tervikuks.</p>
    
                </template>
                <template #srcset>
                     <source srcset="/img/gig/impeerium-md.jpg" media="(min-width: 768px)">
                     <source srcset="/img/gig/impeerium-sm.jpg" media="(min-width: 576px)">
                </template>
            </GigAd>
    </div></template>
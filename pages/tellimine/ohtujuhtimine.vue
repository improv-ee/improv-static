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
            Õhtujuhtimist pakuvad järgmised tegijad - võrdle pakkumisi <i class="bi bi-caret-down"></i>, ning võta
            tegijaga otse ühendust.</p>
        <hr />

        <GigAd image="/img/gig/impeerium.jpg" name="Improteater IMPEERIUM" link="https://improimpeerium.ee/tellimused/">
            <template #description>
                <p>Kogu sündmuse muretuks läbiviimiseks leiad imperaalide hulgast ka inimese, kes sujuvalt ja
                    meeleolukalt köidab Su erilise päeva ühtseks tervikuks.</p>

            </template>
            <template #srcset>
                <source srcset="/img/gig/impeerium-md.jpg" media="(min-width: 768px)">
                <source srcset="/img/gig/impeerium-sm.jpg" media="(min-width: 576px)">
            </template>
        </GigAd>
        <GigAd image="/img/gig/ruutu10-ohtujuht.jpg" name="Ruutu10" link="" :separators="false">
            <template #description>
                <p>Ruutu10 improviseerijatest õhtu- ja päevajuhid lisavad su sündmusele koomilisust ja naeru.</p>

                <p>Meie improviseerijad võtavad su külalised lõbusalt vastu, juhivad sisse ja viivad läbi erinevaid
                    kokku lepitud tegevusi ning seda kõike mahlakalt vaimukas võtmes.</p>

                <p>Toivo ja Rauno tandemõhtujuhtimine toob su sündmusele koomilisust ja vahetut suhtlust.

                    Peo kultuuriprogrammi täiendame improkomöödia etendusega.

                    Meie jaoks on oluline, et sündmus kulgeks sujuvalt ning peo atmosfäär oleks lõbus ja vahetu.</p>
                <p>
                    Võta meiega ühendsust ja loome koos vägevaid emotsioone.</p>
            </template>
        </GigAd>
    </div>
</template>
<script>

export default {
    head() {
        return {
            title: 'Improviseerijast õhtujuht sinu üritusele',
            meta: [
                { name: 'description', content: 'Vajad üritusele õhtujuhti? Improviseerijast õhtujuht paneb sinu ürituse oma muheda oleku ning huumorisoonega elama.' },
                { name: 'keywords', content: 'improteater,impro,improv,õhtujuht, õhtujuht üritusele, ürituse moderaator, peo juhtimine, peo korraldus' }
            ],
        }
    }
}
</script>
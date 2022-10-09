<template>
    <div>
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <NuxtLink to="/tellimine">Tellimine</NuxtLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Etendused</li>
            </ol>
        </nav>

        <p class="lead">Improviseeritud teatrietendus on suurepärane naerurikas ja energiat tõstev vahepala sinu
            üritusele.</p>

        <p>Kogenud näitlejad pakuvad korraldajaga koostöös meeleolukat, humoorikat ning personaalset etendust sinu
            üritusel.
            Improteater on hetkeline kunstivorm, mis tähendab, et etendus sünnib just sinu ürituse jaoks ning
            kontekstis, ning ei
            kordu. Paku oma publikule meeldejääv ja lõbus elamus.</p>

        <p>Tellimusesinemisi pakuvad järgmised trupid - võrdle pakkumisi <i class="bi bi-caret-down"></i>, ning võta
            valitud trupiga ühendust.</p>
        <hr />
        <GigAd image="/img/gig/ruutu10-tellimus.jpg" name="Ruutu10" link="https://www.ruutu10.ee/tellimeid.html">
            <template #description>
                <p>Ruutu10 pakub humoorikat improteatri etendust, mis on ​personaalne. Teemad, mida puudutame on mõeldud
                    ainult sinu publikule. Pärast meie etteastet on sul tekkinud uued seltskonnasisesed naljad, mis
                    meenutavad sinu pidu pikalt.
                    Etendus on tavaliselt 30-45 minutit pikk ja 2-4 esinejaga.</p>
            </template>
            <template #srcset>
                <source srcset="/img/gig/ruutu10-tellimus-lg.jpg" media="(min-width: 992px)">
            </template>
        </GigAd>

        <GigAd image="/img/gig/impeerium.jpg" name="Improteater IMPEERIUM" 
         link="https://improimpeerium.ee/tellimused/">
            <template #description>
                <p>Kas otsid meelelahutajat/esinejat sünnipäevale, pulma, suvepäevadele, jõulupeole, aktusele või
                    ükskõik mis üritusele, kus soovid inimesi rõõmustada ja elevust tekitada?</p>

                <p>Pakume huvitavat ja uudset, humoorikat ning personaalselt Sinu publikule mõeldud meelelahutust.
                    Improetenduse võlu peitub ootamatuses, situatsioonikoomikas ning artistide leidlikkuses. Keegi ei
                    tea, mis juhtuma hakkab, kõik on võimalik ning see on meelierutavalt vaimukas!</p>

                <p>Meil on Sulle pakkuda selleks põnevaid võimalusi!</p>
            </template>
            <template #srcset>
                <source srcset="/img/gig/impeerium-md.jpg" media="(min-width: 768px)">
                <source srcset="/img/gig/impeerium-sm.jpg" media="(min-width: 576px)">
            </template>
        </GigAd>
        <GigAd image="/img/gig/kimproose-etendus.jpg" name="kIMPROose" :separators="false" link="https://www.facebook.com/kimproose">
            <template #description>
                <p>Sinu ürituse muudab eriliseks ja kordamatuks kIMPROose lustakas improetendus.
                    Kuna nii tegelaskujud kui ka kogu sisu valmib kohapeal Sinu publiku abiga,
                    siis on iga kIMPROose etendus kui rätsepa eritellimus Sinu üritusele.
                    Üks mis aga kindel - naerda saab!</p>
<p>Etendus kestab tavaliselt 20-30 min ning kohal on 4-5 improviseerijat.</p>
            </template>
        </GigAd>


    </div>
</template>
<script>

    export default {
        head() {
            return {
                title: 'Improviseeritud etendus sinu üritusele',
                meta: [
                    { name: 'description', content: 'Improviseeritud teatrietendus on suurepärane naerurikas ja energiat tõstev vahepala sinu üritusele.' },
                    { name: 'keywords', content: 'improteater,impro,improv,etendus üritusele, ürituse vahepala, sündmuse sisustus, meelelahutus üritusel' }
                ],
            }
        }
    }
    </script>
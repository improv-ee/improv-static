<template>
    <div>
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <NuxtLink to="/tellimine">Tellimine</NuxtLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Töötoad</li>
            </ol>
        </nav>

        <p class="lead">Improteatri töötuba arendab osalejate suhtlemis- ning esinemisoskust, ning teeb seda lõbusas ja
            loovas keskkonnas.</p>

            <p>Iga töötuba on erinev ning vastavalt osalejate vajadustele. Meelelahutuslikud töötoad sobivad hästi
            üritustele, suhtlemisoskuse töötoad kollektiivile ning teatrile keskenduvad töötoad õpetavad
            improviseerimisoskusi.</p>

            <p>Tellimustöötubasid pakuvad järgmised trupid - võrdle pakkumisi <i class="bi bi-caret-down"></i>, ning võta valitud trupiga ühendust.
        </p>
        <hr />

        <GigAd image="/img/gig/ruutu10-koolitus.jpg" name="Ruutu10"
         link="https://www.ruutu10.ee/tellimeid.html">
            <template #description>
                Ruutu10 pakub lõbusat improtöötuba, mis ei vaja eelnevat kokkupuudet näitlemisega. Sõprade ja
                kolleegidega mänge tehes näed sa neid uue nurga alt. Kogemusest võime kinnitada, et see on hea võimalus
                igas vanuses inimestel lõbutseda.
                ​Töötuba kestab 60-90 minutit ja kuni 20 liikmelist seltskonda juhendab üks improviseerija.
                Töötoaks on vajalik ruum, kus saab takistusteta liikuda. Taustmüra, jutusumin ja muud valjud üritused
                samas asukohas raskendavad töötoas osalemist.
            </template>
             <template #srcset>
                 <source srcset="/img/gig/ruutu10-koolitus-xl.jpg" media="(min-width: 1200px)">
                 <source srcset="/img/gig/ruutu10-koolitus-lg.jpg" media="(min-width: 992px)">
                 <source srcset="/img/gig/ruutu10-koolitus-md.jpg" media="(min-width: 768px)">
                 <source srcset="/img/gig/ruutu10-koolitus-sm.jpg" media="(min-width: 576px)">
            </template>
        </GigAd>

        <GigAd image="/img/gig/impeerium.jpg" name="Improteater IMPEERIUM"
        link="https://improimpeerium.ee/tellimused/">
            <template #description>
                <p>Meie näitlejad on professionaalsed ja kogenud koolitajad.
                    Improteatri rakendamiseks on mitmeid põnevaid võimalusi.
                    Koolitus sobib hästi:</p>
                <ul>
                    <li>neile, keda huvitab esinemine või näitlemine</li>
                    <li>team building koolituseks kollektiivi ühtekuuluvustunde ja koostöö arendamiseks</li>
                    <li>põnevaks tegevuseks sünnipäeval</li>
                    <li>õpilastele enesekindluse ja keskendumisvõime parandamiseks</li>
                </ul>
            </template>
            <template #srcset>
                 <source srcset="/img/gig/impeerium-md.jpg" media="(min-width: 768px)">
                 <source srcset="/img/gig/impeerium-sm.jpg" media="(min-width: 576px)">
            </template>
        </GigAd>
        <GigAd image="/img/gig/elamuskirss.png" name="Elamuskirss" link="mailto:kairivilu@gmail.com?subject=%5BElamuskirss%5D%20%5Bimprov.ee%5D%20T%C3%B6%C3%B6toa%20p%C3%A4ring">
            <template #description>
                <p>Elamuskirss OÜ pakub mängulist improteatri töötuba noortele vanuses 10+ ja täiskasvanutele.
                Töötuba sobib hästi klassidele ja töökollektiividele või erinevatele seltskondadele (max 20 inimest).
                Juhendaja Kairi Vilu (Von Glehni Teatri näitleja, improtrupp Ehatäht improviseerija).</p>
                
                <p>Töötoa kestus 90 minutit. Huvi korral kiri kairivilu@gmail.com</p>
            </template>
            <template #srcset>
                 <source srcset="/img/gig/elamuskirss-xl.png" media="(min-width: 1200px)">
                 <source srcset="/img/gig/elamuskirss-lg.png" media="(min-width: 992px)">
                 <source srcset="/img/gig/elamuskirss-md.png" media="(min-width: 768px)">
                 <source srcset="/img/gig/elamuskirss-sm.png" media="(min-width: 576px)">
            </template>
        </GigAd>
        <GigAd image="/img/gig/bewise.jpg" name="BeWise" link="https://www.bewise.ee/" :separators="false">
            <template #description>
                <p>Rakendusimpro koolitused. Suhtluse, avaliku esinemise ja ​meeskonnatöö koolitused ettevõtetele.</p>
                <p>BeWise koolitused annavad osalejatele võimaluse kogeda suhtluse põhitõdesid.
                    Laialdasest uskumusest, et mõned inimesed lihtsalt on sündinud parema suhtlusoskusega kui teised,
                    usume meie suhtlusoskuse õpitavusse. 
                    </p>
            </template>
            <template #srcset>
                 <source srcset="/img/gig/bewise-md.jpg" media="(min-width: 768px)">
                 <source srcset="/img/gig/bewise-sm.jpg" media="(min-width: 576px)">
            </template>
        </GigAd>
    </div>
</template>
<script>

    export default {
        head() {
            return {
                title: 'Improvisatsiooni töötuba sinu üritusele',
                meta: [
                    { name: 'description', content: 'Improteatri töötuba arendab osalejate suhtlemis- ning esinemisoskust, ning teeb seda lõbusas ja loovas keskkonnas.' },
                    { name: 'keywords', content: 'improteater,impro,improv,töötuba,töötuba üritusele' }
                ],
            }
        }
    }
    </script>
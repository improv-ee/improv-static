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
         link="https://ruutu10.ee/improteatri-tootuba-meeskonnauritusel/">
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
        <GigAd image="/img/gig/rahel-sq.jpg" name="Rahel Otsa"
        link="https://rahelotsa.ee/menuu/meeskonnakoolitused/">
            <template #description>
                <p>Tahad meeskonnale uut hingamist anda?
Olemasolevatest suhtlusmustritest lahti raputada?
Uusi teadmisi õppida või lihtsalt kollektiiviga mõnusalt aega veeta?
Otsid lihtsalt seekord üht veidi teistsugust meeskonnakoolitust?</p>
               <p>Improteatripõhine meeskonnakoolitus aitab tuua selles osalejad välja rutiinsetest käitumismallidest ning pakub võimalust omavahelist suhtlemist ümber mõtestada. Koolitusvahendina kasutatakse improteatri harjutusi ja mänge.</p>
            </template>
            <template #srcset>
                 <source srcset="/img/gig/rahel-sq.jpg" media="(min-width: 768px)">
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
        <GigAd image="/img/gig/bewise.jpg" name="BeWise" link="https://www.bewise.ee/">
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
        <GigAd image="/img/gig/kimproose-tootuba.jpg" name="kIMPROose" link="https://www.facebook.com/kimproose" :separators="false">
            <template #description>
                <p>Improteatriga tegelemiseks ei pea olema professionaal või kogenud näitleja.
                    Oleme meiegi elav tõestus sellest. Meie juhendajate eesmärk on üks - kõigil peab lõbus olema.
                    Töötuba on hea võimalus improteatri tegemist turvalises ja rõõmsameelses seltskonnas proovida.
                    Aga ole ettevaatlik! Kes kord näpu improle andnud, sel raske enam kätt tagasi saada.</p>

<p>Töötoa suuruseks on max 20 inimest ning seltskonda juhendavad 2-3 impronäitlejat.</p>
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
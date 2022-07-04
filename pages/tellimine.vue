<template>
    <div>
        <p class="lead">
            Improviseerijad on loomult head esinejad, ning tulevad meeleldi appi sinu
            era- või tööüritustele toredat sisu looma.</p>

        <p>improv.ee vahendab erinevate pakkujate kuulutusi.
            Pakkumise saamiseks palun külasta enda poolt valitud tegija kodulehte, ning kontakteeru nendega otse.
        </p>
        <div class="accordion accordion-flush" id="gigs-accordion">
            <AccordionItem headerId="h-shows" title="Etendused sinu üritusele" collapseId="collapse-shows"
                parentId="gigs-accordion">
                <template #collapse-body>
                    <PageGigShow />
                </template>
            </AccordionItem>
            <AccordionItem headerId="h-workshops" title="Töötoad üritustele ja ettevõtetele"
                collapseId="collapse-workshops" parentId="gigs-accordion">
                <template #collapse-body>
                    <PageGigWorkshop />
                </template>
            </AccordionItem>
            <AccordionItem headerId="h-hosting" title="Õhtujuhtimine" collapseId="collapse-hosting"
                parentId="gigs-accordion">
                <template #collapse-body>
                    <PageGigHosting />
                </template>
            </AccordionItem>
        </div>
    </div>
</template>
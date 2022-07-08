<template>
    <div>
        <p class="lead">
            Improviseerijad on loomult head esinejad, ning tulevad meeleldi appi sinu
            era- või tööüritustele toredat sisu looma.</p>

        <p>improv.ee vahendab erinevate pakkujate kuulutusi.
            Pakkumise saamiseks palun külasta enda poolt valitud tegija kodulehte, ning kontakteeru nendega otse.
        </p>
        <div class="accordion accordion-flush" id="gigs-accordion">
            <AccordionItem title="Etendused sinu üritusele" parentId="gigs-accordion">
                <template #collapse-body>
                    <PageGigShow />
                </template>
            </AccordionItem>
            <AccordionItem title="Töötoad üritustele ja ettevõtetele" parentId="gigs-accordion">
                <template #collapse-body>
                    <PageGigWorkshop />
                </template>
            </AccordionItem>
            <AccordionItem title="Õhtujuhtimine" parentId="gigs-accordion">
                <template #collapse-body>
                    <PageGigHosting />
                </template>
            </AccordionItem>
        </div>
    </div>
</template>
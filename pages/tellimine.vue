<template>
    <div>
        <p class="lead">
            Improviseerijad on loomult head esinejad, ning tulevad meeleldi appi sinu
            era- või tööüritustele toredat sisu looma.</p>

        <p>improv.ee vahendab erinevate pakkujate kuulutusi.
            Pakkumise saamiseks palun külasta enda poolt valitud tegija kodulehte, ning kontakteeru nendega otse.
        </p>
        <div class="accordion accordion-flush" id="gigs-accordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="h-shows">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-shows" aria-expanded="false" aria-controls="collapse-shows">
                        Etendused sinu üritusele
                    </button>
                </h2>
                <div id="collapse-shows" class="accordion-collapse collapse" aria-labelledby="h-shows"
                    data-bs-parent="#gigs-accordion">
                    <div class="accordion-body">
                        <PageGigShow />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="h-workshops">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-workshops" aria-expanded="false" aria-controls="collapse-workshops">
                        Töötoad üritustele ja ettevõtetele
                    </button>
                </h2>
                <div id="collapse-workshops" class="accordion-collapse collapse" aria-labelledby="h-workshops"
                    data-bs-parent="#gigs-accordion">
                    <div class="accordion-body">
                        <PageGigWorkshop />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="h-hosting">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-hosting" aria-expanded="false" aria-controls="collapse-hosting">
                        Õhtujuhtimine
                    </button>
                </h2>
                <div id="collapse-hosting" class="accordion-collapse collapse" aria-labelledby="h-hosting"
                    data-bs-parent="#gigs-accordion">
                    <div class="accordion-body">
                        <PageGigHosting />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
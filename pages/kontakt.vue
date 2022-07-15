<template>
    <div>
        <p>
            Soovid improv.ee lehe haldajaga ühendust võtta? Kasuta allolevat vormi, või kirjuta
            meile e-mailile <code>support&#64;improv.ee</code>.
        </p>

        <p>N.B! - improv.ee kaudu ei saa tellida etendusi ega töötubasid - neid
            vahendavad teenusepakkujad ise. Vaata alamlehele
            "<NuxtLink to="/tellimine">tellimine</NuxtLink>".
        </p>


        <form class="row g-3 mt-4" data-static-form-name="contact">
            <div class="row">
                <div class="col-6 offset-3">
                    <label for="email" class="form-label">Sinu e-mail (valikuline)</label>
                    <input type="email" class="form-control" id="email">
                </div>
            </div>
            <div class="row">
                <div class="col-6 offset-3">
                    <label for="message-body" class="form-label">Kirja sisu</label>
                    <textarea class="form-control" id="message-body"  required rows="8"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-6 offset-3 mt-3">
                    <button type="submit" class="btn col-12 btn-primary">Saada kiri</button>
                </div>
            </div>
        </form>
    </div>
</template>

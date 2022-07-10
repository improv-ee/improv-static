<template>
    <div>
        <p>
            Soovid improv.ee lehe haldajaga ühendust võtta? Kasuta allolevat vormi, või kirjuta
            meile e-mailile <code>{{ contactEmail }}</code>.
        </p>

        <p>N.B! - improv.ee kaudu ei saa tellida etendusi ega töötubasid - neid
            vahendavad teenusepakkujad ise. Vaata alamlehele
            <NuxtLink to="/tellimine">Tellimine</NuxtLink>.
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
<script>
export default {
    computed: {
        contactEmail() {
            return this.hex2a('737570706f727440696d70726f762e6565')
        }
    },
    methods: {
        hex2a: function (hex) {
            var str = '';
            for (var i = 0; i < hex.length; i += 2)
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            return str;
        }
    },
}
</script>
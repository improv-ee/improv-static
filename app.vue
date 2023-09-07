<template>
  <div class="col-lg-8 mx-auto p-3 py-md-5">
    <div class="container">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-center py-3 mb-5 border-bottom">
        <NuxtLink to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          title="improv.ee">
          <picture>
            <source media="(min-width:992px)" srcset="~/assets/img/logo.png" />
            <source media="(min-width:767px)" srcset="~/assets/img/logo-notext.png" />
            <img src="~/assets/img/logo-800px-notext.png" alt="improv.ee logo"
              class="img-fluid col-4 offset-4 col-sm-4 offset-sm-4 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2" />
          </picture>
        </NuxtLink>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NuxtLink to="/" class="nav-link px-2 link-dark" activeClass="active">Algus</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/trupid" class="nav-link px-2 link-dark" activeClass="active">Trupid</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tellimine" class="nav-link px-2 link-dark" activeClass="active">Tellimine</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/oppimine" class="nav-link px-2 link-dark" activeClass="active">Õppimine</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/meedias" class="nav-link px-2 link-dark" activeClass="active">Meedias</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/viited" class="nav-link px-2 link-dark" activeClass="active">Viited</NuxtLink>
          </li>
        </ul>

        <div class="col-md-3 text-end">
        </div>
      </header>
    </div>

    <main>
      <NuxtPage />

    </main>
    <footer class="pt-5 my-5 text-muted text-center border-top">
      improv.ee &copy; 2023 | kirjuta meile: support&#64;improv.ee | <a
        href="https://github.com/improv-ee/improv-static">GitHub</a>
    </footer>
  </div>
</template>
<script>
import appleTouchIcon from '~/assets/img/apple-touch-icon.png';
import favicon512 from '~/assets/img/android-chrome-512x512.png';
import favicon192 from '~/assets/img/android-chrome-192x192.png';
import favicon32 from '~/assets/img/favicon-32x32.png';
import favicon16 from '~/assets/img/favicon-16x16.png';

useSeoMeta({
  title: 'Improviseeritud teater Eestis - tegijad, tellimine, ajalugu, viited',
  ogTitle: 'Improviseeritud teater Eestis - tegijad, tellimine, ajalugu, viited',
  description: 'Info Eestis impromaastiku kohta - tegutsevad improtrupid, impro õppimine, impro tellimine üritustele või koolituseks, impro viited ja ajalugu.',
  ogDescription: 'Info Eestis impromaastiku kohta - tegutsevad improtrupid, impro õppimine, impro tellimine üritustele või koolituseks, impro viited ja ajalugu.',
})

useHead({
  htmlAttrs: {
    lang: 'ee'
  },
  meta: [
    { name: 'keywords', content: 'improteater,impro,improv,impro eestis,improvisatsioon,improetendus' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: "16x16", href: favicon16 },
    { rel: 'icon', type: 'image/png', sizes: "32x32", href: favicon32 },
    { rel: 'icon', type: 'image/png', sizes: "192x192", href: favicon192 },
    { rel: 'icon', type: 'image/png', sizes: "512x512", href: favicon512 },
    { rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon }
  ]
})

</script>
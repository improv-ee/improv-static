<template>
  <div class="col-lg-8 mx-auto p-3 py-md-5">
    <div class="container">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-5 border-bottom">
        <NuxtLink to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          improv.ee
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
      improv.ee &copy; 2022
    </footer>
  </div>




</template>
<script>
export default {
  head() {
    return {
      title: 'improv.ee',
      meta: [
        { name: 'description', content: 'improv.ee koondab infot Eestis tegutsevate improtruppid kohta' },
        { name: 'keywords', content: 'improteater,impro,improv,impro eestis,improvisatsioon,improetendus'}
      ],
      link: [
        {rel: 'icon', type: 'image/png', href:'/assets/img/favicon.png'}
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ]
    }
  }
}
</script>
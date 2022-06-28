<template>
<div class="col-lg-8 mx-auto p-3 py-md-5">
   <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NuxtLink to="/" class="nav-link px-2 link-dark">Algus</NuxtLink></li>
        <li><NuxtLink to="/trupid" class="nav-link px-2 link-dark">Trupid</NuxtLink></li>
        <li><NuxtLink to="/tellimine" class="nav-link px-2 link-dark">Tellimine</NuxtLink></li>
        <li><NuxtLink to="/viited" class="nav-link px-2 link-dark">Viited</NuxtLink></li>
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
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        },
      ]
    }
  }
}
</script>
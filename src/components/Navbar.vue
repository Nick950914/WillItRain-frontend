<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Will It Rain?</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="ml-auto navbar-nav">
<!--        <a class="nav-item nav-link active" href="#"-->
<!--          >Home <span class="sr-only">(current)</span></a-->
<!--        >-->
        <a class="nav-item nav-link" href="#">Login</a>
        <a class="nav-item nav-link" href="#">Sign Up</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
    nav a {
        font-size: 1.2em;
    }
</style>
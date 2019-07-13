<script>
  import SideNav from "./components/NavBar.svelte";
</script>

<style>
  main {
    /* 340px is the width of the navbar */
    padding-left: 340px;
  }
  @media only screen and (max-width: 992px) {
    main {
      padding-left: 0;
    }
  }
</style>

<div class="app row">
  <SideNav />
  <main>
    <!-- all content should be put here -->
    <h1>content to be added</h1>
  </main>
</div>

<script>
  import SideNav from "./components/NavBar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import MyWork from "./components/MyWork.svelte";
</script>

<style>
  main {
    /* 320px is the width of the navbar */
    padding-left: 320px;
  }
  @media only screen and (max-width: 992px) {
    main {
      padding-left: 0;
    }
  }
</style>

<div>
  <SideNav />
  <main>
    <Home />
    <About />
    <MyWork />
  </main>
</div>

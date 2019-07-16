<script>
  import { onMount } from "svelte";
  import SideNav from "./components/NavBar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import MyWork from "./components/MyWork.svelte";
  import Contact from "./components/Contact.svelte";

  onMount(() => {
    const sections = [
      document.querySelector("#home"),
      document.querySelector("#about"),
      document.querySelector("#my-work"),
      document.querySelector("#contact"),
    ]
    // const home = document.querySelector("#home");
    // const about = document.querySelector("#about");
    // const work = document.querySelector("#my-work");
    // const contact = document.querySelector("#contact");
    window.addEventListener("scroll", e => {
      sections
        .map(section => window.scrollY - section.offsetTop)
        .filter(el => el > 0);
      console.log(
        window.scrollY,
        about.offsetTop,
        window.scrollY - about.offsetTop
      );
    });

    // console.log(home, about, work, contact);
  });
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
    <Contact />
  </main>
</div>

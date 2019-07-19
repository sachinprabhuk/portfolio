<script>
  import { onMount } from "svelte";
  import SideNav from "./components/NavBar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import MyWork from "./components/MyWork.svelte";
  import Contact from "./components/Contact.svelte";

  let activeID = null;
  onMount(() => {
    const home = document.querySelector("#home");
    const about = document.querySelector("#about");
    const work = document.querySelector("#my-work");
    const contact = document.querySelector("#contact");

    const io = new IntersectionObserver(
      (entries, io) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activeID = entry.target.id;
        });
      },
      {
        threshold: 0.51
      }
    );
    io.observe(home);
    io.observe(about);
    io.observe(work);
    io.observe(contact);
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
  <SideNav {activeID} />
  <main>
    <Home />
    <About />
    <MyWork />
    <Contact />
  </main>
</div>

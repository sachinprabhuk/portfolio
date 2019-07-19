<script>
  import { onMount } from "svelte";
  import SideNav from "./components/NavBar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import MyWork from "./components/MyWork.svelte";
  import Contact from "./components/Contact.svelte";

  let activeID = null;
  onMount(() => {
    const sections = [
      document.querySelector("#home"),
      document.querySelector("#about"),
      document.querySelector("#my-work"),
      document.querySelector("#contact")
    ];

    const io = new IntersectionObserver(
      (entries, io) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) activeID = entry.target.id;
        });
      },
      { threshold: 0.51 }
    );
    sections.forEach(section => io.observe(section));

    const cardIO = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("dim");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll("#my-work .card").forEach(card => {
      cardIO.observe(card);
    });
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

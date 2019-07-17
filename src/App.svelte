<script>
  import { onMount } from "svelte";
  import SideNav from "./components/NavBar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import MyWork from "./components/MyWork.svelte";
  import Contact from "./components/Contact.svelte";

  let activeID = null;
  onMount(() => {
    const scrollHanlder = (function() {
      const sections = [
        {
          id: "#home",
          node: document.querySelector("#home"),
          offsetTop: 0
        },
        {
          id: "#about",
          node: document.querySelector("#about"),
          offsetTop: 0
        },
        {
          id: "#my-work",
          node: document.querySelector("#my-work"),
          offsetTop: 0
        },
        {
          id: "#contact",
          node: document.querySelector("#contact"),
          offsetTop: 0
        }
      ].map(el => {
        el.offsetTop = el.node.offsetTop;
        return el;
      });

      return e => {
        let scrollDist = window.scrollY;
        if (scrollDist < sections[1].offsetTop) activeID = sections[0].id;
        else if (scrollDist < sections[2].offsetTop) activeID = sections[1].id;
        else if (scrollDist < sections[3].offsetTop) activeID = sections[2].id;
        else activeID = sections[3].id;
      };
    })();

    window.addEventListener("scroll", scrollHanlder);
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

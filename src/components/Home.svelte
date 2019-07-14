<script>
  import Canvas from "./Canvas.svelte";
  import Divider from "./Divider.svelte";
</script>

<style>
  #home img {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0px;
    top: 0px;
    /* filter: blur(2px); */
  }

  #home {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    font-family: Playfair, display;
  }

  section#home .container {
    height: max-content;
    z-index: 99;
    margin-top: 160px;
  }
  section .name {
    font-family: "palanquin-dark-bold";
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto 0px auto;
  }

  section.page .description {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  section.page .description :nth-child(1) {
    border-left: 2px solid #aaa;
  }
  section.page .description * {
    font-family: "roboto-thin";
    font-size: 16px;
    padding: 2px 10px;
    border-right: 2px solid #afafaf;
  }

  .container span {
    font-size: 26px;
    font-weight: 600;
    line-height: 26px;
  }

  .more-about-me {
    padding: 8px 28px;
    background: transparent;
    border: 2px solid var(--theme-primary);
    border-radius: 2px;
    cursor: pointer;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color: var(--theme-primary);
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }

  .more-about-me:hover {
    color: white;
    background: var(--theme-primary);
  }
</style>

<section class="page" id="home">
  <!-- <Canvas style="position: absolute;left: 0px;top: 0px" /> -->
  <!-- <img src="/images/lap2.jpg" alt="error" /> -->
  <div class="container center-align">
    <span>Hello, world</span>
    <h2 class="name theme-primary-text">
      <!-- <i class="material-icons large">chevron_left</i> -->
      I'm Sachin Prabhu K
      <!-- <i class="material-icons large">chevron_right</i> -->
    </h2>
    <div class="description">
      <h5>Full stack web developer</h5>
      <h5>Programmer</h5>
      <h5>Problem solver</h5>
    </div>
    <a class="more-about-me" href="#about">
      More about me
      <i class="material-icons right">arrow_downward</i>
    </a>
  </div>

</section>

<!-- <Divider /> -->

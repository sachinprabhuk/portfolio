<style>
  #home {
    overflow: hidden;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    transform: translateY(-10%);
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
    color: var(--theme-primary);
    border-radius: 2px;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }

  .more-about-me:hover {
    color: white;
    background: var(--theme-primary);
  }
</style>

<section class="page" id="home">

  <div class="container">
    <span>Hello, world</span>
    <h2 class="name theme-primary-text">I'm Sachin Prabhu K</h2>
    <div class="description">
      <h5>Full stack web developer</h5>
      <h5>Programmer</h5>
      <h5>Problem solver</h5>
    </div>
    <a
      style="display: inline-flex;align-items: center;"
      class="more-about-me"
      href="#about">
      More about me
      <i class="material-icons">arrow_downward</i>
    </a>
  </div>

</section>

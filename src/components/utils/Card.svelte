<script>
  export let title = "";
  export let description = "";
  export let techs = [];
  export let githubLink = "https://github.com/sachinprabhuk";
  export let id = "";
</script>

<style>
  .card .card-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
  }
  .card .card-content .techs {
    justify-self: center;
  }
  .card .card-action a img {
    width: 20px;
    height: auto;
    margin-right: 12px;
  }
  .col {
    padding-left: 0px;
  }
  .card .card-title {
    font-size: 20px;
    line-height: 22px;
  }
  /* .tech::before {
    content: "<";
  }
  .tech::after {
    content: "/>";
  } */
  .techs {
    position: absolute;
    bottom: 56px;
    left: 24px;
  }
  .tech:not(:last-child)::after {
    content: "  +  ";
  }
  .card {
    transition: transform 0.5s ease-in, opacity 0.8s ease-in;
  }
  .card.dim {
    transform: translateY(100px);
    opacity: 0;
  }
</style>

<div class="col s12 m6 l4">
  <div class="card small dim">
    <div class="card-content black-text">
      <span class="card-title">{title}</span>
      <p class="grey-text">{description}</p>
      <p class="techs">
        {#each techs as tech (id)}
          <span class="tech">{tech}</span>
        {/each}
      </p>
    </div>
    <div class="card-action">
      <a
        href={githubLink}
        target="_blank"
        class="valign-wrapper theme-primary-text">
        <img src="/images/GitHub-Mark-32px.png" alt="" />
        Github
      </a>
    </div>
  </div>
</div>

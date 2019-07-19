<script>
  export let activeID = null;

  const navOps = [
    {
      key: 1,
      link: "home",
      icon: "home",
      text: "Welcome"
    },
    {
      key: 2,
      link: "about",
      icon: "person_outline",
      text: "About me"
    },
    {
      key: 3,
      link: "my-work",
      icon: "developer_mode",
      text: "Work"
    },
    {
      key: 4,
      link: "contact",
      icon: "devices",
      text: "Contact me"
    }
  ];
</script>

<style>
  #side-nav {
    width: 320px;
  }
  #side-nav .user-view img {
    width: 100%;
    height: 100%;
  }
  #side-nav .user-view .circular {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    overflow: hidden;
    border: 4px solid white;
    display: flex;
    justify-content: center;
    place-items: center;
  }
  .user-view .name {
    font-size: 28px;
    font-weight: 600;
  }
  .user-view .email {
    font-weight: 550;
  }
  #side-nav li:not(:first-child) a {
    font-size: 16px;
  }
  #side-nav li:not(:first-child):hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>

<ul id="side-nav" class="sidenav sidenav-fixed">
  <li>
    <div class="user-view">
      <div class="circular">
        <img src="/images/user.png" alt="error" />
      </div>
      <span class="name">Sachin Prabhu K</span>
      <span class="email">Full stack web developer/programmer.</span>
    </div>
  </li>
  {#each navOps as navOp (navOp.key)}
    {#if navOp.link === activeID}
      <li class="active">
        <a href={`#${navOp.link}`}>
          <i class="material-icons grey-text">{navOp.icon}</i>
          {navOp.text}
        </a>
      </li>
    {:else}
      <li>
        <a href={`${navOp.link}`}>
          <i class="material-icons grey-text">{navOp.icon}</i>
          {navOp.text}
        </a>
      </li>
    {/if}
  {/each}
</ul>

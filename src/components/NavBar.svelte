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
  <li>
    <a href="#home">
      <i class="material-icons grey-text">home</i>
      Welcome
    </a>
  </li>
  <li>
    <a href="#about">
      <i class="material-icons grey-text">person_outline</i>
      About me
    </a>
  </li>
  <li>
    <a href="#my-work">
      <i class="material-icons grey-text">developer_mode</i>
      My works
    </a>
  </li>
  <li>
    <a href="#contact">
      <i class="material-icons grey-text">devices</i>
      Contact me
    </a>
  </li>
</ul>

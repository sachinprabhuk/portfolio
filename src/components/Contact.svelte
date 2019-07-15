<style>
  section#contact {
    position: relative;
  }
  .title {
    font-size: 2.28rem;
    justify-content: center;
    font-weight: 600;
  }

  footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: block;
    width: 100%;
    padding: 25px 20px;
    text-align: center;
  }
  footer .cpr {
    display: flex;
    justify-content: center;
  }

  .input-field input[type="text"] + label,
  .input-field input[type="email"] + label,
  .input-field textarea + label {
    color: #dfdfdf;
    /* color: var(--theme-primary); */
    font-size: 16px;
  }
  .input-field input[type="text"],
  .input-field input[type="email"],
  .input-field textarea {
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0 1px 0 0 #dfdfdf;
    color: #dfdfdf;
    /* color: var(--theme-primary); */
    font-size: 16px;
  }

  .input-field input[type="email"]:focus + label,
  .input-field input[type="text"]:focus + label,
  .input-field textarea:focus + label {
    color: #fff;
    font-size: 16px;
    /* color: var(--theme-primary); */
  }

  .input-field input[type="email"]:focus,
  .input-field input[type="text"]:focus,
  .input-field textarea:focus {
    border-bottom: 1px solid #fff;
    box-shadow: 0 1px 0 0 #fff;
    /* border-bottom: 1px solid var(--theme-primary);
    box-shadow: 0 1px 0 0 var(--theme-primary); */
  }

  button {
    /* display: block; */
    padding: 10px 25px;
    border: 2px solid white;
    background: white;
    color: var(--theme-primary);
    font-size: 20px;
    cursor: pointer;
  }
</style>

<section class="page theme-primary align-center" id="contact">
  <br />
  <span class="title white-text">I'd love to hear from you.</span>
  <form class="valign-wrapper">
    <div class="row" style="padding: 0px;margin: 0px;">
      <div class="input-field col s12 m8 l6 offset-m2 offset-l3">
        <input id="name" type="text" />
        <label for="name">name</label>
      </div>

      <div class="input-field col s12 m8 l6 offset-m2 offset-l3">
        <input id="name" type="email" />
        <label for="name">email</label>
      </div>
      <div class="input-field col s12 m8 l6 offset-m2 offset-l3">
        <input id="name" type="text" />
        <label for="name">subject</label>
      </div>

      <div class="input-field col s12 m8 l6 offset-m2 offset-l3">
        <textarea id="message" class="materialize-textarea" />
        <label for="message">message</label>
      </div>
      <div class="input-field col s12 center-align">
        <button>
          Send message
          <i class="material-icons right">send</i>
        </button>
      </div>

    </div>
  </form>
  <footer class="black-text grey lighten-4">
    <p>Designed and developed by: sachin prabhu K</p>
    <p class="cpr">
      <i class="material-icons">copyright</i>
      copyright 2019
    </p>
  </footer>
</section>

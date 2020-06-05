<script>
  import firebase from "firebase/app";
  import "firebase/firestore";

  let form = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  let submitting = false;
  let submitResp = "";
  async function handleSubmit(e) {
    e.preventDefault();
    submitting = true;
    try {
      await firebase
        .firestore()
        .collection("Messages")
        .add({
          ...form
        });
      submitResp = {
        success: true,
        message: "Thanks for the message. Talk to you soon :)"
      };
    } catch (e) {
      submitResp = {
        success: false,
        message: "Oops!!something went wrong. Please try again in sometime"
      };
    }
    setTimeout(() => {
      submitResp = "";
    }, 7000);
    submitting = false;
  }
</script>

<style>
  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.4);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  div.submit-msg {
    animation-name: fade;
    animation-duration: 0.6s;
  }
  div.submit-msg h6 {
    margin: 0px;
    padding: 0px;
  }
  section#contact {
    position: relative;
  }
  .title {
    font-size: 2.28rem;
    justify-content: center;
    font-weight: 600;
  }

  footer {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }

  .input-field input[type="text"] + label,
  .input-field input[type="email"] + label,
  .input-field textarea + label {
    color: #dfdfdf;
    /* color: var(--theme-primary); */
    font-size: 16px;
  }
  :global(.input-field input[type="text"] + label.active, .input-field
      input[type="email"]
      + label.active, .input-field textarea + label.active) {
    color: #fff;
    /* color: var(--theme-primary); */
    font-size: 16px;
  }

  .input-field input[type="text"],
  .input-field input[type="email"],
  .input-field textarea {
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0 1px 0 0 #dfdfdf;
    color: #fff;
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
  }

  button {
    /* display: block; */
    padding: 10px 25px;
    border: none;
    background: white;
    color: var(--theme-primary);
    font-size: 20px;
    cursor: pointer;
    transition: 0.4s;
  }
  button:disabled {
    background-color: #dfdfdf;
  }

  form {
    margin: 57px 0px 70px 0px;
  }
</style>

<section class="theme-primary align-center " id="contact">
  <br />
  <form on:submit={handleSubmit}>
    <span class="title white-text">I'd love to hear from you.</span>
    <div class="row valign-center" style="padding: 0px;margin: 0px;">
      <div class="col s12 m8 l6 offset-m2 offset-l3">
        <div class="input-field">
          <input
            id="name"
            type="text"
            name="name"
            required
            bind:value={form.name} />
          <label for="name">name</label>
        </div>
        <div class="input-field">
          <input
            id="email"
            type="email"
            name="email"
            required
            bind:value={form.email} />
          <label for="name">email</label>
        </div>
        <div class="input-field">
          <input
            id="subject"
            type="text"
            name="subject"
            required
            bind:value={form.subject} />
          <label for="name">subject</label>
        </div>
        <div class="input-field">
          <textarea
            id="message"
            class="materialize-textarea"
            name="message"
            bind:value={form.message}
            required />
          <label for="message">message</label>
        </div>
        {#if typeof submitResp === 'object'}
          <div class="input-field center-align submit-msg">
            {#if submitResp.success}
              <h6 class="white-text">{submitResp.message}</h6>
            {:else}
              <h6 class="red-text">{submitResp.message}</h6>
            {/if}
          </div>
        {/if}
        <div class="input-field center-align">
          <button disabled={submitting} type="submit">
            {submitting ? 'Sending...' : 'Send message'}
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  </form>
  <footer class="black-text grey lighten-4 page-footer">
    <p>
      Designed and developed by:
      <b class="theme-primary-text">
        <span>&lt;</span>
        Sachin Prabhu K
        <span>/&gt;</span>
      </b>
    </p>
    <!-- <p class="cpr">
      <i class="material-icons">copyright</i>
      copyright 2019
    </p> -->
  </footer>
</section>

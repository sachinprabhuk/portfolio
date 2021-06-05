<script>

  let form = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  let submitting = false;
  let submitResp = "";
  async function handleSubmit(e) {
    e.preventDefault();
    submitting = true;
    try {
      await window.fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      submitResp = {
        success: true,
        message: "Thanks for the message. Talk to you soon :)"
      };
    } catch(e) {
       submitResp = {
        success: false,
        message: "Oops! Something went wrong!"
      };
    } finally {
      submitting = false;
      setTimeout(() => {
        submitResp = "";
      }, 3000);
    }
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
    font-size: 16px;
    margin-bottom: 25px;
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
    width: 100%;
    min-height: 87vh;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 100%;
    height: 13vh;
  }
</style>

<section class="theme-primary align-center " id="contact">
  <br />
  <form on:submit={handleSubmit} class="valign-wrapper">
    <div class="row" style="margin: 0px;width: 100%">
      <div class="col s12 m8 l6 offset-m2 offset-l3">
        <span class="title white-text">I'd love to hear from you.</span>
        <div class="input-field">
          <input
            id="name"
            type="text"
            name="name"
            required
            autocomplete="off"
            bind:value={form.name} />
          <label for="name">name</label>
        </div>
        <div class="input-field">
          <input
            id="email"
            type="email"
            name="email"
            required
            autocomplete="off"
            bind:value={form.email} />
          <label for="name">email</label>
        </div>
        <div class="input-field">
          <input
            id="subject"
            type="text"
            name="subject"
            required
            autocomplete="off"
            bind:value={form.subject} />
          <label for="name">subject</label>
        </div>
        <div class="input-field">
          <textarea
            id="message"
            class="materialize-textarea"
            name="message"
            autocomplete="off"
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

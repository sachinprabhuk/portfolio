<script>
  import Divider from "./Divider.svelte";
</script>

<style>
  #about .title {
    font-family: "palanquin";
    display: flex;
    align-items: center;
  }
  .title i.material-icons {
    font-size: 100%;
    margin-top: 8px;
    margin-right: 15px;
  }

  /* #about #skills div.col > h6 {
    text-decoration: underline;
  } */
  #about #skills ul {
    display: flex;
    flex-wrap: wrap;
  }
  #about #skills ul li {
    margin: 6px 10px 6px 0px;
    border: 1px solid #9e9e9e;
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 20px;
  }

  #about div.main {
    font-size: 17px;
  }
</style>

<section class="page grey lighten-4" id="about">
  <div class="row">
    <div class="col s12 m10 offset-m1">
      <h3 class="title">
        <i class="material-icons theme-primary-text">person_outline</i>
        About me
      </h3>
    </div>
  </div>
  <div class="row">
    <div class="col s12 m10 offset-m1 main grey-text description">
      I'm a curious minded developer and a tireless seeker of knowledge,
      interested in learning the latest technologies and techniques for building
      elegant softwares.
      <br />
      Writing Efficient, Elegant and Clean code is my motto.
      <!-- Writing
      <span class="highlight black-text">Efficient</span>
      ,
      <span class="highlight black-text">Elegant</span>
      and
      <span class="highlight black-text">Readable</span>
      code is my motto. -->
    </div>
  </div>
  <div class="row" id="skills">
    <div class="col s12 m10 offset-m1">
      <h4 class="title valign-wrapper">
        <i class="material-icons theme-primary-text">desktop_mac</i>
        Technical skills
      </h4>
      <div class="row">
        <div class="col s12 m6">
          <h6>Languages</h6>
          <ul class="grey-text">
            <li>Javascript</li>
            <li>C++</li>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div class="col s12 m6">
          <h6>Frameworks</h6>
          <ul class="grey-text">
            <li>React</li>
            <li>Svelte</li>
            <li>Nest JS</li>
            <li>Express JS</li>
          </ul>
        </div>
        <div class="col s12 m6">
          <h6>Compute Science concepts</h6>
          <ul class="grey-text">
            <li>Data structure</li>
            <li>Algorithms</li>
            <li>RDBMS and SQL</li>
            <li>MonogDB</li>
          </ul>
        </div>
        <div class="col s12 m6">
          <h6>Other tools</h6>
          <ul class="grey-text">
            <li>Typescript</li>
            <li>Materialize CSS</li>
            <li>Semantic UI react</li>
          </ul>
        </div>
        <!-- <div class="col s12 m6 l4" /> -->
      </div>
    </div>
  </div>
</section>

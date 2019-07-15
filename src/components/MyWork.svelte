<script>
  import Card from "./utils/Card.svelte";
  const Project = (function() {
    let id = 1;
    return function Project(title, description, techs, link) {
      this.id = id++;
      this.title = title;
      this.description = description;
      this.techs = techs;
      this.githubLink = link;
    };
  })();
  const projects = [
    new Project(
      "Exam duty selection",
      `Web app for faculties to choose exam duty`,
      ["ReactJS", "NestJS", "SQL"],
      "https://github.com/sachinprabhuk/eda-backend"
    ),
    new Project(
      "Photoshop lite",
      `A photo editing app, which implements a wide variety of 
      image processing algorithms`,
      ["HTML", "CSS", "Javascript"],
      "https://github.com/sachinprabhuk/photoshop-lite"
    ),
    new Project(
      "Enhanced DES",
      `A cryptography project, which enchanced a security of standard 
      DES algorithm`,
      ["C++"],
      "https://github.com/suddu619/Data-Encryption-Standard-DES"
    ),
    new Project(
      "Inventory management system",
      `A simple E-commerce like application for managing as well selling
      inventory products`,
      ["ReactJS", "ExpressJS"],
      "https://github.com/sachinprabhuk/inventoryapp"
    )
  ];
</script>

<style>

</style>

<section id="my-work" class="page theme-secondary">
  <div class="row">
    <div class="col s12 m10 offset-m1">
      <h4 class="title">
        <i class="material-icons theme-primary-text">desktop_windows</i>
        My work
      </h4>
    </div>
  </div>
  <div class="row">
    <div class="col s12 m10 offset-m1">
      {#each projects as project (project.id)}
        <Card {...project} id={project.id} />
      {/each}
    </div>
  </div>
</section>

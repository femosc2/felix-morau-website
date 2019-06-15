<template>
    <div>
          <h2 class="projectsH2">Projects</h2>
          <section>
            <li v-for="(project, index) in projects" :key="index">
              {{ project.projectName}}
            </li>
          </section>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ["currentSection", "projects"]
}
</script>

<style lang="scss">

</style>

<template>
  <div id="app">

    <section v-if="showMainNav">
      <app-header />

      <div class="router-view-container">
        <router-view v-show="!error" />
        <ui-error />
      </div>

      <app-footer />
    </section>

    <section class="about-page" v-else-if="isAbout">
      <router-view/>
      <app-footer /> 
    </section>

    <section v-else>
      <router-view/>
    </section>

  </div>  
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from '@/components/ui/Header';
import AppFooter from '@/components/ui/Footer';
import UiError from '@/components/ui/Error';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    UiError,
  },
  computed: {
    ...mapGetters({
      error: 'error',
    }),
    showMainNav() {
      const name = this.$route.name;
      return name === 'home' || name === 'regions';
    },
    isAbout() {
      return this.$route.name === 'about';
    },
    isWidget() {
      return this.$route.name === 'widget';
    },
    isNotFound() {
      return this.$route.name === '404';
    },
  },
};
</script>

<style lang="scss">
// Vue Transitions
@import "styles/variables.scss";
@import "styles/vue-transitions.css";
@import "styles/logo.scss";
@import "styles/chart.scss";
@import "styles/table.scss";
@import "styles/dropdown.scss";

/** Bulma SCSS customisation **/
// 1. Import the initial variables
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../node_modules/bulma/sass/utilities/functions.sass";
@import "styles/bulma-derived-variables.scss";
@import "../node_modules/bulma/sass/utilities/derived-variables.sass";
@import "../node_modules/bulma/bulma.sass";

#app {
  font-family: $primary-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
section {
  @include widescreen {
    margin-top: 2rem;
  }

  &.notfound-page {
    margin-top: 0;
  }
}
.router-view-container {
  max-width: 1400px;
  min-height: 500px;
  margin: 0.5rem auto;
  padding: 0 1rem;
}
</style>

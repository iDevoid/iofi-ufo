<template>
  <div class="about">
    <v-main>
      <AboutCard />
      <ContributorsCard v-bind:contributors="contributors" />
    </v-main>
  </div>
</template>

<script>
import AboutCard from '../components/cards/AboutCard';
import ContributorsCard from '../components/cards/ContributorsCard';

export default {
  name : 'About',
  components : {
    AboutCard,
    ContributorsCard,
  },
  computed: {
    contributors() {
      var vc = this.$root.$t("voice-clip");
      return [
        {
          name: "Raktea",
          desc: "K-word " + vc
        },
        {
          name: "Toastie",
          desc: "Goodnight muah " + vc
        }
      ]
    }
  }
}
</script>
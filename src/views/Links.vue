<template>
    <v-main>
        <LinksCard 
            v-for="link in links" 
            :key="link.name" 
            v-bind:links="link.list" 
            v-bind:title="link.title"
        />
    </v-main>
</template>

<script>
import LinksCard from '../components/cards/LinksCard';

export default {
  name : 'Links',
  components : {
    LinksCard,
  },
  computed: {
    links() {
        return [
            // this is the hololive member links
            {
                "name": "hololivelinks",
                "title": this.$root.$t('links'),
                "list": [
                    { name: "moona", title: this.$root.$t('moona'), url: "https://moona.moe", color: "purple" },
                    { name: "risu", title: this.$root.$t('risu'), url: "https://ayundarisu.moe", color: "brown darken-1" },
                ]
            }
        ]
    }
  }
}
</script>
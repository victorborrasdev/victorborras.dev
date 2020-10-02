<template>
  <a :href="currentLink.to">
    <component :is="currentLink.icon" class="icon" />
    {{ currentLink.label }}
  </a>
</template>

<script>
import { LINKS } from '@/constants'

export default {
  name: 'SocialLink',
  props: {
    destination: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentLink() {
      return LINKS[this.destination]
    },
  },
}
</script>

<style scoped>
a {
  display: inline-flex;
  align-items: center;
}

.icon {
  height: 1.2rem;
  margin-right: 5px;
}
</style>

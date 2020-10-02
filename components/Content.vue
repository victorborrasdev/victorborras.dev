<template>
  <main>
    <div class="container">
      <p>
        Hi! My name's Victor and I'm a front end web developer from
        <a
          href="https://www.google.com/maps/place/12500+Vinaroz,+Castell%C3%B3n/@40.4699668,0.4490862,14z/data=!3m1!4b1!4m5!3m4!1s0x12a04fe40076ed75:0x11209302b14c1a2a!8m2!3d40.4679855!4d0.4747301"
          >Vinaròs</a
        >.
      </p>
      <p>
        Some day I'll start a blog here. In the meantime, you can take a look at
        what I'm up to through the links below. See you around!
      </p>
      <section class="links">
        <SocialLink class="link" :destination="TWITTER" />
        <SocialLink class="link" :destination="GITHUB" />
      </section>
    </div>
  </main>
</template>

<script>
import SocialLink from '@/components/SocialLink'
import { GITHUB, TWITTER } from '@/constants'

export default {
  name: 'Content',
  components: { SocialLink },
  data() {
    return {
      TWITTER,
      GITHUB,
    }
  },
}
</script>

<style scoped>
main {
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.links {
  display: flex;
  flex-flow: column;
  margin-top: 2rem;
}

.link {
  margin-bottom: 2rem;
}

@media (min-width: 500px) {
  .links {
    flex-flow: row;
    justify-content: center;
  }

  .link {
    margin: 0 2rem;
  }
}
</style>

<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Content from '@/components/Content'
import Header from '~/components/Header'

export default {
  name: 'HomePage',
  components: {
    Content,
    Header,
  },
}
</script>

<template>
  <header class="header">
    <h1 class="header__title">Victor Borràs Castell</h1>
    <TheNavbar />
  </header>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar'
export default {
  name: 'TheHeader',
  components: { TheNavbar },
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: var(--primary);
  color: var(--white);
}

.header__title {
  margin-left: 1rem;
  font-family: var(--font-title);
  font-size: 2.5rem;
  line-height: 1;
  flex: 0 0 auto;
}
</style>

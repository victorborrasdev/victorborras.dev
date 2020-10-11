<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title">Victor Borràs Castell</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
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

<template>
  <header class="header">
    <div class="header__container">
      <img
        src="~/assets/images/victor.jpg"
        alt="Victor Borràs Castell"
        class="header__picture"
      />
      <h1 class="header__title">Victor Borràs Castell</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: var(--primary);
  color: white;
}

.header__container {
  --title-width: 170px;

  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 170px;
  justify-content: flex-start;
  align-items: center;
}

.header__picture {
  height: 100%;
  width: auto;
  object-fit: cover;
  flex: 0 1 auto;
  max-width: calc(100% - var(--title-width));
}

.header__title {
  margin-left: 1rem;
  font-family: var(--font-title);
  font-size: 48px;
  line-height: 1;
  flex: 0 0 auto;
  width: var(--title-width);
}

@media (min-width: 560px) {
  .header__title {
    width: auto;
  }
}

@media (min-width: 675px) {
  .header__title {
    font-size: 64px;
  }
}

@media (min-width: 810px) {
  .header__title {
    font-size: 80px;
  }
}
</style>

<template>
  <nav>
    <ul>
      <li
        v-for="menuItem in menuItems"
        :key="menuItem.path"
        class="navbar-item"
      >
        <nuxt-link :to="menuItem.path" class="navbar-item__link">{{
          menuItem.title
        }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      menuItems: [{ title: 'about', path: '/about' }],
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
ul {
  list-style: none;
}

.navbar-item {
  margin: 0 1rem;
}

.navbar-item__link {
  color: var(--white);
  text-decoration: none;
}

.navbar-item__link:hover {
  text-decoration: underline;
}
</style>

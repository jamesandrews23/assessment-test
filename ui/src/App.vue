<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav style="text-align: center">
        <RouterLink class="nav-button" to="/">Assessment Test</RouterLink>
        <RouterLink class="nav-button" to="/reports">Reports</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.nav-button {
  font-size: 1.5em;
  text-decoration: none;
  padding: 10px;
  border: none;
  border-radius: 6px;
  margin: 0 10px;
  background-color: #3185c1;
  color: white;
}
</style>

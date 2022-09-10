<template>
  <header>
    <nav>
      <RouterLink to="/" class="router-link">Home</RouterLink>
      <div class="vertical-line"></div>
      <RouterLink to="/about" class="router-link">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  max-width: 100px;
  width: 100%;
  margin: 20px auto;
  font-size: 1.3em;
}

.router-link {
  text-decoration: none;
  color: black;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
}

.router-link:hover {
  background-color: aliceblue;
}

.vertical-line {
  border-left: 3px solid black;
  height: 30px;
}
</style>

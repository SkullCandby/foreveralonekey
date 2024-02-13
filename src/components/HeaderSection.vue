<template>
  <header class="site-header">
    <nav>
      <ul>
        <li><a href="https://twitter.com/alone_solana" target="_blank">💔 Twitter</a></li>
        <li><a href="https://dexscreener.com/solana/2YXsqzb5WiQkMtmhRKC79bCbqsZB3g4RW3mz25srMvnM" target="_blank">💔 Chart</a></li>
        <li><a href="https://t.me/+twjxg3br6spkZWNi" target="_blank">💔 Telegram</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
}
</script>

<style scoped>
.site-header {
  background-color: #FFA7FF; /* Pink color */
  padding: 1rem;
}

.site-header nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

.site-header nav ul li a {
  color: white;
  text-decoration: none;
  /* Add some spacing around the emoji for better visual appearance */
  padding: 0 0.5rem;
  font-weight: bold; /* Make link text bold */
}
</style>

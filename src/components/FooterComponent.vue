<template>
  <footer class="footer">
    <a href="https://t.me/your_telegram" target="_blank">Telegram</a>
    <a href="https://your_chart_link" target="_blank">Chart</a>
    <a href="https://twitter.com/your_twitter" target="_blank">Twitter</a>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  text-align: center;
  padding: 1rem 0;
}

.footer a {
  margin: 0 15px;
  color: #333;
  text-decoration: none;
}
</style>

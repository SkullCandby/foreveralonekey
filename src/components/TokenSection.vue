<template>
  <section class="token-section">
    <h2 style="font-size: 2em;">Forever Alone Info</h2>
    <div class="content-wrapper">
      <div class="text-content">
        <p>
          FUCK 14th of February! We don't have bitches. Fuck them, we have solana. Forever alone. 
        </p>
      </div>
      <img :src="imagePath" alt="Forever Alone Meme Image" class="token-image">
    </div>
  </section>
</template>

<script>
export default {
  name: 'TokenSection',
  computed: {
    imagePath() {
      // Ensure the file name matches the asset in your project's src/assets directory
      return require('@/assets/meme.png');
    }
  }
}
</script>

<style scoped>
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.token-section {
  background-color: #FFA7FF; /* A common shade of pink */
  padding: 2rem;
  text-align: center;
  overflow-x: hidden; /* Prevent horizontal scrollbar due to animation */
}

.token-section h2 {
  font-size: 2em;
  animation: slideIn 5s linear infinite;
  display: inline-block; /* Required for transform to work */
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left; /* Align text to the left within the text-content */
}

.text-content {
  font-size: 3em; /* Larger font size, adjust as needed */
  color: red; /* This will make the text red */
  margin: 1rem 0;
  max-width: 50%; /* Adjust the width as needed */
}

.token-image {
  max-width: 50%; /* Adjust the width as needed */
  margin-left: 2rem; /* Add some space between the text and image */
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }

  .token-image,
  .text-content {
    max-width: 100%;
    margin-left: 0;
  }
}
</style>


<template>
  <section class="tokenomics-section">
    <h2 style="font-weight: bold;">Tokenomics</h2>
    <div class="content-flex">
      <ul>
        <li>0% tax</li>
        <li>100% LP burnt</li>
        <li>Ownership is renounced.</li>
      </ul>
      <!-- Adjust the path to your image or gif -->
    </div>
    <div>
    <img :src="imagePath" alt="Tokenomics Image" class="tokenomics-image">
    <img :src="imagePath2" alt="Tokenomics Image2" class="tokenomics-image">
  </div>
  </section>
</template>

<script>
export default {
  name: 'TokenomicsSection',
  computed: {
    imagePath() {
      // Ensure the file name matches the asset in your project's src/assets directory
      return require('@/assets/images.jpeg');
    },
    imagePath2() {
      // Ensure the file name matches the asset in your project's src/assets directory
      return require('@/assets/forever-alone.gif');
    }
  }
}
</script>

<style scoped>
.tokenomics-section {
  background-color: #e06be0; /* Pink color */
  padding: 2rem;
  text-align: center;
}

.content-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; /* Space between the list and the image */
}

.tokenomics-section ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 3em; /* Larger font size for list items */
}

.tokenomics-image {
  max-width: 50%;
  margin-right: 1rem; /* Adds space on the right of the first image */
}

.tokenomics-image:last-child {
  margin-right: 0; /* Removes the right margin from the last image */
  margin-left: 1rem; /* Adds space on the left of the second image */
}
</style>


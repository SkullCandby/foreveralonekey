<template>
    <div class="header-title">
      <img :src="imageTitle" alt="Token Image" class="header-image">
      <p style="font-weight: bold; font-size: 1.5em;"> It is almost 14th of February again. You are alone again... But solana loves you ❤️</p>
      <img :src="imagePath" alt="Title Image" class="header-image">
      <p style="font-weight: bold; color:black; font-size: 2em;"> CA: 2YXsqzb5WiQkMtmhRKC79bCbqsZB3g4RW3mz25srMvnM </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderTitleSection',
    computed: {
      imagePath() {
        // The require function will tell Webpack to process this image
        return require('@/assets/troll-forever-alone.gif');
      },
      imageTitle() {
        // The require function will tell Webpack to process this image
        return require('@/assets/title-forever-alone.gif');
      }
    }
  }
  </script>
  
  <style scoped>
  .header-title {
    background-color: #e06be0; /* This is a purple color; adjust as needed */
    color: white;
    text-align: center;
    padding: 1rem 0;
  }
  
  .title-content {
    display: inline-block;
    padding: 0.5rem 1rem;
    /* Additional styling to match your specific design requirements */
  }
  
  .title-content h1 {
    font-size: 2em; /* Adjust the size as needed */
    margin: 0.5rem 0;
  }
  
  .title-content p {
    font-size: 2.2em; /* Adjust the size as needed */
    margin: 0.5rem 0;
    color: pink;
  }
  </style>
  
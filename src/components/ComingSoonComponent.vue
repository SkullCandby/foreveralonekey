<template>
  <div class="custom-color text-center">
    Coming soon<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
  </div>
</template>

<script>
export default {
  name: "ComingSoonComponent"
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.custom-color {
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0em;
}

.dot {
  animation: appear 1s infinite;
}

/* Define the keyframes for the appearance of the dots */
@keyframes appear {
  0%, 20% {
    color: transparent;
  }
  40% {
    color: #000;
  }
  100% {
    color: #000;
  }
}

/* Delay the animation for each dot */
.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}
</style>

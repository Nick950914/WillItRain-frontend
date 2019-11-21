<template>
  <div class="flex-container" style="--image-url: url(https://desktopwallpaper.live/wp-content/uploads/2019/07/japan-rain-wallpapers-2.jpg)">
    <div class="flex-item">
      <img alt="Vue logo" src="../assets/logo.png"/>
      <HelloWorld msg="Will It Rain or Will I Train? ¯\_(ツ)_/¯"/>
    </div>
  </div>
</template>

<!--"&#45;&#45;image-url: url(https://picsum.photos/3000/2000)"-->
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    }
};
</script>

<style scoped>
  .flex-container {
    /* Here's the trick */
    box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.5);

    /* Basic background styles */
    background: var(--image-url) center center no-repeat;
    background-size: cover;

    height: 91.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: white;
    /*min-height: 100vh;*/
  }




</style>

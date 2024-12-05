<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
</script>

<template>
   <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
         <HelloWorld msg="You did it!" />
      </div>
   </header>

   <main>
      <TheWelcome />
      <div ref="bellIcon">Notifications</div>
   </main>
</template>

<script type="module" lang="ts">
import { render } from '@engagespot/client';

export default {
   name: 'Notifications',
   mounted: function () {
      const options = {
         apiKey: 'API_KEY',
         userId: 'USER_ID',
      };
      render(this.$refs.bellIcon, options);
   },
};
</script>

<style scoped>
header {
   line-height: 1.5;
}

.logo {
   display: block;
   margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
   header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
   }

   .logo {
      margin: 0 2rem 0 0;
   }

   header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
   }
}
</style>

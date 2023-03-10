
<template>
  <Navbar />
  <MainComponent />
  <PanduanComponent />
  <CategoryComponent />
</template>

<script>
import Navbar from './components/NavbarComponent.vue';
import MainComponent from './components/MainComponent.vue'
import PanduanComponent from './components/PanduanComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MainComponent,
    PanduanComponent,
    CategoryComponent,
  }
}
</script>
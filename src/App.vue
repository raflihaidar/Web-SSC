
<template>
  <Navbar />
  <MainComponent />
  <PanduanComponent />
  <CategoryComponent />
  <ServiceComponent />
</template>

<script>
//Components
import Navbar from './components/NavbarComponent.vue';
import MainComponent from './components/MainComponent.vue'
import PanduanComponent from './components/PanduanComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import ServiceComponent from './components/ServiceComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MainComponent,
    PanduanComponent,
    CategoryComponent,
    ServiceComponent
  },
}
</script>
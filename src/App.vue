
<template>
  <Navbar />
  <MainComponent />
  <PanduanComponent />
  <CategoryComponent />
  <ServiceComponent />
  <InformationComponent />
  <FooterComponent />
</template>

<script>
//Components
import Navbar from './components/NavbarComponent.vue';
import MainComponent from './components/MainComponent.vue'
import PanduanComponent from './components/PanduanComponent.vue';
import CategoryComponent from './components/CategoryComponent.vue';
import ServiceComponent from './components/ServiceComponent.vue';
import InformationComponent from './components/InformationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MainComponent,
    PanduanComponent,
    CategoryComponent,
    ServiceComponent,
    InformationComponent,
    FooterComponent
  },
}
</script>
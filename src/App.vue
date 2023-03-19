
<template>
  <div class="selection:bg-custom-red selection:text-white font-openSans">
    <Navbar />
    <MainComponent />
    <PanduanComponent />
    <ButtonToTop />
    <CategoryComponent />
    <ServiceComponent />
    <InformationComponent />
    <FooterComponent />
  </div>
</template>

<script>
//Components
import ButtonToTop from './components/buttonToTop.vue'
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
    ButtonToTop,
    CategoryComponent,
    ServiceComponent,
    InformationComponent,
    FooterComponent
  },
}
</script>
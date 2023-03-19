<template>
    <div class="xl:w-[85%] px-5 w-full mx-auto mb-56 tracking-wider">
        <TitleComponent msg="Panduan" msg2="Pengajuan Layanan" />
        <TimelinesComponent />
    </div>
</template>

<script>
import TitleComponent from './TitleComponent.vue'
import TimelinesComponent from './TimelinesComponent.vue';
export default {
    name: 'PanduanComponent',
    components: {
        TitleComponent,
        TimelinesComponent
    }
}
</script>
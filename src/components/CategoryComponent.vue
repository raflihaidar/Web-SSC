<template>
    <div class="w-[85%] mx-auto mb-20 tracking-wider" id="layanan">
        <div>
            <TitleComponent msg="Kategori" msg2="Layanan" />
        </div>

        <div class="grid xl:grid-cols-4">
            <div v-for="(item, index) in category" :key="index">
                <div class='xl:w-[312px] border-2 rounded-[0.5rem] mt-5 p-5 card' :class="{ active: item.isActive }"
                    @click="addToSelectedItem(item)">
                    <figure class="text-center font-bold" @click="addActive($event)">
                        <lord-icon v-if="item.isActive" trigger="morph" :src="item.icon" class="w-[100px] h-[100px]"
                            colors="primary:#fff,secondary:#fff"></lord-icon>
                        <lord-icon v-else trigger="morph" :src="item.icon" class="w-[100px] h-[100px]"
                            colors="primary:#121331,secondary:#aa0000"></lord-icon>
                        <p>{{ item.nama }}</p>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleComponent from './TitleComponent.vue';
import { mapGetters } from 'vuex';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);

export default {
    name: 'CategoryComponent',
    components: {
        TitleComponent
    },
    methods: {
        addToSelectedItem(item) {
            this.$store.dispatch('addToSelectedItem', item)
        },
    },
    computed: {
        ...mapGetters(['category', 'selectedItem'])
    },
}
</script>

<template>
    <div class="w-[85%] mx-auto mb-20 tracking-wider">
        <div>
            <TitleComponent msg="Kategori" msg2="Layanan" />
        </div>

        <div class="grid grid-cols-4">
            <div v-for="item in category" :key="item.id" class="">
                <div class="w-[312px] border-2 rounded-[0.5rem] mt-5" @click="addToSelectedItem(item)">
                    <figure class="text-center font-bold">
                        <lord-icon trigger="morph" :src="item.icon" class="w-[100px] h-[100px]"></lord-icon>
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
        }
    },
    computed: {
        ...mapGetters(['category', 'selectedItem'])
    },
}
</script>

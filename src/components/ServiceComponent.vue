<template>
    <div class="w-[85%] mx-auto mb-20" v-if="selectedItem && selectedItem.layanan">
        <section class="flex items-center text-[26px] text-custom-red gap-x-8 font-semibold tracking-wider mb-14">
            <div class="w-[7%] h-[1.2rem] bg-custom-red rounded-[0.3rem]"></div>
            <p class="w-[75%]">Layanan {{ selectedItem.nama }}</p>
        </section>

        <section class="w-full flex gap-y-5 flex-col xl:flex-row justify-between items-start">
            <div class="xl:w-[35%] w-full border rounded-[0.5rem]">
                <div v-for="(item, index) in selectedItem.layanan" :key="index">
                    <div class="border-b-[1px] py-[15px] px-[30px] text-[14px] cursor-pointer "
                        :class="{ active: item.status }" @click="switchStatus(item)">
                        <div class="flex items-center gap-x-1">
                            <IconCheckList />
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xl:w-[63%] w-full border rounded-[0.5rem]">
                <div v-for="(item, index) in selectedItem.layanan" :key="index">
                    <div v-if="item.status" class="animate-opacity">
                        <div class="w-full border-b-[1px] text-sm p-[1rem]">
                            <p>{{ item.name }}</p>
                        </div>
                        <div class="p-[1rem]">
                            <img :src="item.icon" alt="krs" class="w-[15rem] mx-auto">
                            <p>{{ item.notion }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IconCheckList from '../assets/IconCheckList.vue'

export default {
    name: 'ServiceComponent',
    components: {
        IconCheckList
    },
    methods: {
        switchStatus(item) {
            this.$store.dispatch('switchStatus', item)
        }
    },
    computed: {
        ...mapGetters(['selectedItem'])
    }
}
</script>
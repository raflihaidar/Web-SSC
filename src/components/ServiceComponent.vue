<template>
    <div class="w-[85%] mx-auto">
        <section v-if="selectedItem"
            class="flex items-center text-[26px] text-custom-red gap-x-8 font-semibold tracking-wider mb-14">
            <div class="w-[7%] h-[1.2rem] bg-custom-red rounded-[0.3rem]"></div>
            <p class="w-[75%]">{{ selectedItem.nama }}</p>
        </section>

        <section v-if="selectedItem && selectedItem.layanan" class="w-full flex justify-between">
            <div class="w-[35%] border rounded-[0.5rem]">
                <div v-for="(item, index) in selectedItem.layanan" :key="index">
                    <div class="border-b-[1px] py-[15px] px-[30px] text-[14px]" @click="switchStatus(item)">
                        <div class="flex items-center gap-x-1">
                            <IconCheckList />
                            <p>{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[63%] border rounded-[0.5rem]">
                <div v-for="(item, index) in selectedItem.layanan" :key="index">
                    <div v-if="item.status">
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
        switchStatus(index) {
            this.$store.dispatch('switchStatus', index)
        }
    },
    computed: {
        ...mapGetters(['selectedItem'])
    }
}
</script>
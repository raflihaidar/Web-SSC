<template>
    <div class="flex items-center gap-x-2">
        <TitleIcon />
        <p class="text-[22px] font-semibold"><span class="text-custom-red">{{ msg }}</span> {{ msg2 }}</p>
    </div>
</template>

<script>
import TitleIcon from '../assets/TitleIcon.vue'
export default {
    name: 'TitleComponent',
    props: {
        msg: {
            type: String
        },
        msg2: {
            type: String,
        },
    },
    components: {
        TitleIcon
    }
}
</script>
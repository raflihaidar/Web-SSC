<template>
    <div v-if="isScrolledDown">
        <div
            class="fixed w-[40px] h-[40px] bg-custom-red right-[30px] bottom-[30px] rounded-[5px] hover:bottom-[40px] transition-all">
            <a href="#top" class="text-white flex justify-center items-center">
                <ArrowUp />
            </a>
        </div>
    </div>
</template>
  
<script>
import ArrowUp from '../assets/ArrowUpIcon.vue'
export default {
    data() {
        return {
            isScrolledDown: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 400) {
                this.isScrolledDown = true
            } else {
                this.isScrolledDown = false
            }
        }
    },
    components: {
        ArrowUp
    }
}
</script>
  
  
  
  
  
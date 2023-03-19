
<template id="top">
    <nav :class="scrollStatus ? 'w-full fixed flex shadow-lg z-10 bg-white pt-5 pb-4' : 'border-b-2 pt-5 pb-4 flex'">
        <div class="w-[85%] mx-auto">
            <div class="w-[120px] hidden xl:block">
                <img src="https://ssc.ittelkom-sby.ac.id/assets-home/imgs/icon/logo-basic.png" class="w-full"
                    alt="logo campus">
            </div>
        </div>
        <div class="relative w-[30px] mr-10 block xl:hidden" @click="handleModal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd" />
            </svg>
        </div>
    </nav>

    <div class="bg-black bg-opacity-60 w-full h-full z-20 top-0" :class="modalActive ? 'fixed' : 'hidden '">
        <div class="fixed z-30 right-0 top-0 w-1/2 h-screen border-2 px-4 py-3 bg-white"
            :class="modalActive ? 'animate-slideIn' : ''">
            <div class="flex w-full justify-between items-center">
                <div class="w-[100px] h-[60px]">
                    <img src="https://ssc.ittelkom-sby.ac.id/assets-home/imgs/icon/logo-basic.png" class="w-full"
                        alt="logo campus">
                </div>
                <div class="cursor-pointer" @click="handleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            <ul class="mt-10">
                <li class="py-2 border-b-[1px]">Home</li>
                <li class="py-2 border-b-[1px]">Admin Page</li>
                <li class="py-2 border-b-[1px]">Services List</li>
                <li class="py-2">Log Ticket</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        return {
            scrollStatus: false,
            modalActive: false
        }
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 100) {
                this.scrollStatus = true
            } else {
                this.scrollStatus = false
            }
        },
        handleModal() {
            this.modalActive = !this.modalActive
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

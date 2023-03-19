<template>
    <main
        class="w-[100%] xl:w-[85%] mx-auto mb-20 flex flex-col xl:flex-row xl:justify-between justify-center items-center py-7 tracking-wider">
        <section class="w-[100%] xl:w-[20%] text-center xl:text-left leading-none xl:pl-10  pt-10">
            <div class="xl:text-[46px] text-lg xl:leading-[60px] xl:font-medium font-semibold">
                <p>
                    <span class="text-custom-red ">S</span>tudent
                </p>
                <p>
                    <span class="text-custom-red">S</span>ervice
                </p>
                <p>
                    <span class="text-custom-red">C</span>enter
                </p>
            </div>
            <p class="opacity-70 text-[15px] mt-3 mb-5">Datang.Buat Tiket.Proses</p>
            <a href="#layanan">
                <div
                    class="bg-[#AA0000] block hover:bg-red-600 text-white text-center xl:w-4/6 w-[150px] mx-auto xl:m-0 py-[16px] px-4 rounded-[4px] font-semibold text-[14px] cursor-pointer transition">
                    Lihat Layanan
                </div>
            </a>
        </section>
        <section class="xl:w-[57%] w-[90%] mt-5">
            <img src="https://ssc.ittelkom-sby.ac.id/assets-home/imgs/slider/slider-6.png" class="w-full" alt="image">
        </section>
    </main>
</template>

<script>
export default {
    name: 'MainComponent'
}
</script>
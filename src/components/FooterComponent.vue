<template>
    <div class="bg-[#1a1a1a] text-white py-10 leading-[1.2]">

        <div class="grid xl:grid-cols-3 w-[85%] mx-auto items-center gap-x-6 gap-y-5">
            <div>
                <div class="text-3xl font-semibold mr-[123px]">
                    <p>Student Service Center</p>
                </div>
                <p class="text-lg text-[#6c757d]">Contact</p>
                <div class="text-[1rem] grid gap-y-[1rem]">
                    <p>Address: Jl. Ketintang No.156, Gayungan, Surabaya, Jawa Timur 60231</p>
                    <p>Phone: (+6231) 8280800</p>
                    <p>Email: humas@ittelkom-sby.ac.id</p>
                </div>
            </div>

            <div>
                <div class="font-semibold mb-6 text-xl">
                    <p>Aplikasi Student Service Center</p>
                </div>
                <div class="text-[#6c757d] italic">
                    Ditunjukkan untuk mempermudah perangkat kerja serta mahasiswa Institut
                    Teknologi
                    Telkom Surabaya untuk
                    melakukan pelaporan pemintaan bantuan, demi terciptanya lingkungan kerja serta perkuliahan yang
                    lebih
                    baik
                    dan efisien.
                </div>
            </div>

            <div class="flex flex-col gap-y-5 text-sm">
                <div class="text-[18px] font-semibold">My Account</div>
                <div class="group">
                    <a href="https://ssc.ittelkom-sby.ac.id/operator-sign-in" target="_blank"
                        class="block group-hover:text-custom-red group-hover:ml-2 ease-in transition-all">My
                        History</a>
                </div>
                <div class="group">
                    <a href="https://ssc.ittelkom-sby.ac.id/operator-sign-in" target="_blank"
                        class="block group-hover:text-custom-red group-hover:ml-2 ease-in transition-all">Services
                        List</a>
                </div>
                <div class="group">
                    <a href="https://ssc.ittelkom-sby.ac.id/operator-sign-in" target="_blank"
                        class="block group-hover:text-custom-red group-hover:ml-2 ease-in transition-all">Sign
                        Out</a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex w-[85%] mx-auto justify-between text-[14px] py-5 text-[#8e8e90]">
        <p>© 2023, <span class="text-custom-red font-semibold">IT Telkom Surabaya</span> Student Service Center</p>
        <a href="https://ittelkom-sby.ac.id/" target="_blank"><span class="text-custom-red">IT Telkom Surabaya</span>. All
            rights
            reserved</a>
    </div>
</template>


<script>
export default {
    name: 'FooterComponent'
}
</script>
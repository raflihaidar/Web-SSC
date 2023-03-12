<template>
    <div class=" bg-[#1a1a1a] text-white py-[25px] leading-[1.2]">
        <div class=" w-[85%] mx-auto flex justify-between pt-[15px] pb-[20px]">
            <div class="w-[30%] p-3">
                <div class="text-[24px] font-semibold">
                    <p>Student Service Center</p>
                </div>
                <div>
                    <p class="text-[14px] text-[#6c757d]">Contact</p>
                    <div class="text-[1rem] grid gap-y-[0.5rem]">
                        <p>Address: Jl. Ketintang No.156, Gayungan, Surabaya, Jawa Timur 60231</p>
                        <p>Phone: (+6231) 8280800</p>
                        <p>Email: humas@ittelkom-sby.ac.id</p>
                    </div>
                </div>
            </div>

            <div class="w-[40%] p-3">
                <div class="text-[18px] font-semibold">
                    <p>Aplikasi Student Service Center</p>
                </div>
                <p class="text-[#6c757d]">Ditunjukkan untuk mempermudah perangkat kerja serta mahasiswa Institut Teknologi
                    Telkom Surabaya untuk
                    melakukan pelaporan pemintaan bantuan, demi terciptanya lingkungan kerja serta perkuliahan yang lebih
                    baik
                    dan efisien.
                </p>
            </div>

            <div class=" w-[25%] p-3 flex flex-col ">
                <div class="text-[18px] font-semibold">My Account</div>
                <a href="">My History</a>
                <a href="">Services List</a>
                <a href="">Sign Out</a>
            </div>
        </div>
    </div>
    <div class="flex w-[85%] mx-auto justify-between font-semibold text-[14px] p-7">
        <p>© 2023, <span class="text-custom-red">IT Telkom Surabaya</span> Student Service Center</p>
        <p><span class="text-custom-red">IT Telkom Surabaya</span>. All rights reserved</p>
    </div>
</template>


<script>
export default {
    name: 'FooterComponent'
}
</script>
export default {
  state: {
    category: [
      {
        isActive: true,
        nama: 'Akademik',
        icon: 'https://cdn.lordicon.com/wxnxiano.json',
        layanan: [
          {
            name: 'Registrasi KRS',
            notion: 'Merupakan registrasi mahasiswa pada setiap semester awal perkuliahan',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/registrasi-krs.png',
            status: true
          },
          {
            name: 'Ujian (UTS & UAS)',
            notion:
              'Layanan pengumuman jadwal kegiatan ujian akademik yang bertujuan untuk melakukan pengukuran dan penilaian kompetensi peserta didik, sebagai dasar kegiatan evaluasi pembelajaran perkuliahan.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/uts-uas.png',
            status: false
          },
          {
            name: 'Surat Keterangan Aktif',
            notion:
              'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/surat-keterangan-aktif.png',
            status: false
          },
          {
            name: 'Layanan Perkuliahan',
            notion:
              'Layanan panduan mengenai proses pelayanan perkuliahan yang ada di IT Telkom Surabaya.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/layanan-perkuliahan.png',
            status: false
          },
          {
            name: 'Ijazah dan Transkrip Nilai',
            notion:
              'Layanan mengenai proses penerbitan transkrip dan ijazah kepada calon lulusan dan pihak terkait sehingga proses penerbitan transkrip dapat terkendali.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/ijazah.png',
            status: false
          }
        ],
        informasi: {
          nama: 'Informasi Akademik',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi akademik yang mencakup kegiatan layanan administrasi akademik, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Akademik, silakan kunjungi:',
          ig: 'akademikitts',
          web: 'https://akademik.ittelkom-sby.ac.id/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-academic.png'
        }
      },
      {
        isActive: false,
        nama: 'PuTi',
        icon: 'https://cdn.lordicon.com/qhgmphtg.json',
        layanan: [
          {
            name: 'Manajemen Akun (iGracias, eLearning, WiFi)',
            notion:
              'Layanan untuk permintaan akun Email, iGracias, e-Learning, WiFi, Office365 untuk menunjang keberlangsungan kegiatan akademik.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/manajemen-akun.png',
            status: true
          },
          {
            name: 'Akses Internet',
            notion:
              'Layanan untuk mengatasi aplikasi (iGracias, Elearning dsb) yang terkena masalah seperti bug dan error yang berdampak terhadap keberlangsungan kegiatan akademik.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/layanan-aplikasi.png',
            status: false
          },
          {
            name: 'Layanan aplikasi',
            notion:
              'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/surat-keterangan-aktif.png',
            status: false
          },
          {
            name: 'Layanan Hosting',
            notion:
              'Layanan untuk memenuhi permintaan domain dan VPS untuk keperluan hosting aplikasi atau website',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/layanan-hosting.png',
            status: false
          },
          {
            name: 'Pengembangan aplikasi',
            notion:
              'Layanan pembuatan solusi sistem informasi untuk memenuhi kebutuhan proses bisnis.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/pengembangan-app.png',
            status: false
          }
        ],
        informasi: {
          nama: 'Informasi PuTi',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi puti yang mencakup kegiatan layanan administrasi puti, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit PuTi, silakan kunjungi::',
          ig: 'puti.ittelkomsby',
          web: 'https://puti.ittelkom-sby.ac.id/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-puti.png'
        }
      },
      {
        isActive: false,
        nama: 'Kemahasiswaan',
        icon: 'https://cdn.lordicon.com/uukerzzv.json',
        layanan: [
          {
            name: 'Transkrip Aktivitas Kemahasiswaan (TAK)',
            notion:
              'Layanan approval sertifikat TAK sebagai syarat untuk mengikuti sidang tugas akhir/skripsi/proyek akhir, mendapatkan beasiswa, dan mengikuti seleksi mahasiswa berprestasi.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-dispen.png',
            status: true
          },
          {
            name: 'Surat Tugas/Dispensasi',
            notion: 'Layanan pembuatan surat tugas atau dispensasi untuk kebutuhan presensi.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/uts-uas.png',
            status: false
          },
          {
            name: 'Surat Keterangan Beasiswa',
            notion:
              'Layanan pembuatan surat keterangan tidak menerima beasiswa dari kampus untuk keperluan tertentu.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-beasiswa.png',
            status: false
          },
          {
            name: 'KTM, Jas Almamater dan Vest',
            notion:
              'Layanan pendataan, penerimaan jas almamater & vest serta KTM mahasiswa Institut Teknologi Telkom Surabaya.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/ktm.png',
            status: false
          },
          {
            name: 'Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM',
            notion:
              'Layanan terkait pelaksanaan pengusulan & pendanaan program kegiatan ormawa dan UKM.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/proposal-pengajuan.png',
            status: false
          },
          {
            name: 'Asuransi dan Layanan Kesehatan Telkomedika',
            notion: 'Layanan terkait pelaksanaan pengajuan klaim & asuransi kesehatan mahasiswa.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/asuransi.png'
          }
        ],
        informasi: {
          nama: 'Informasi Kemahasiswaan',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi kemahasiswaan yang mencakup kegiatan layanan administrasi kemahasiswaan, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Kemahasiswaan, silakan kunjungi:',
          ig: 'kemahasiswaanitts',
          web: 'https://www.instagram.com/kemahasiswaan.ittelkomsby/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-kemahasiswaan.png'
        }
      },
      {
        isActive: false,
        nama: 'Logistik',
        icon: 'https://cdn.lordicon.com/sbiheqdr.json',
        layanan: [
          {
            name: 'Peminjaman Asset',
            notion:
              'Layanan peminjaman asset seperti ruangan kuliah, aula rapat, serta perlengkapan audio & video.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/logistik/peminjaman.png',
            status: true
          },
          {
            name: 'Pemeliharaan Asset Rusak/Hilang',
            notion:
              'Layanan pemeliharaan asset mengenai kelistrikan, air, gedung, audio & video yang rusak atau hilang.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/logistik/pemeliharaan.png',
            status: false
          }
        ],
        informasi: {
          nama: 'Informasi Logistik',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi logistik yang mencakup kegiatan layanan administrasi logistik, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Logistik, silakan kunjungi:',
          ig: 'logistik.ittelkomsby',
          web: 'https://logistik.ittelkom-sby.ac.id/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-academic.png'
        }
      },
      {
        isActive: false,
        nama: 'Keuangan',
        icon: 'https://cdn.lordicon.com/vaeagfzc.json',
        layanan: [
          {
            name: 'Pembayaran BPP Semester',
            notion: 'Panduan pembayaran Biaya Penyelenggaraan Pendidikan setiap semester.',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Pembayaran_BPP_Semester.png',
            status: true
          },
          {
            name: 'Pengajuan Angsuran',
            notion:
              'Pengajuan keringanan bagi mahasiswa yang belum dapat melakukan pelunasan pembayaran BPP',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Pengajuan_Angsuran.png',
            status: false
          },
          {
            name: 'Permintaan Bukti Pembayaran/Kuitansi Pembayaran Biaya Pendidikan',
            notion:
              'Permintaan bukti pembayaran biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Bukti_Pembayaran.png',
            status: false
          },
          {
            name: 'Permintaan Surat Tagihan/ Invoice Biaya Pendidikan',
            notion:
              'Permintaan surat tagihan atau invoice biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Bukti_Pembayaran.png',
            status: false
          },
          {
            name: 'Permintaan Surat Keterangan Bebas Administrasi Keuangan',
            notion:
              'Permintaan surat keterangan yang menyatakan bahwa mahasiswa sudah tidak memiliki piutang biaya pendidikan. Surat tersebut digunakan untuk keperluan mengurus proses kelulusan dan proses undur diri',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Bukti_Pembayaran.png',
            status: false
          }
        ],
        informasi: {
          nama: 'Informasi Keuangan',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi keuangan yang mencakup kegiatan layanan administrasi keuangan, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Keuangan, silakan kunjungi:',
          ig: 'keuangan.ittelkomsby',
          web: 'https://keuangan.ittelkom-sby.ac.id/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-keuangan.png'
        }
      },
      {
        isActive: false,
        nama: 'Pusat Bahasa & Perpustakaan',
        icon: 'https://cdn.lordicon.com/gdjyhaga.json',
        informasi: {
          nama: 'Informasi Pusat Bahasa & Perpustakaan',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi perpus yang mencakup kegiatan layanan administrasi perpus, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Pusat Bahasa & Perpustakaan, silakan kunjungi:',
          ig: 'akademikitts',
          web: 'https://perpus.ittelkom-sby.ac.id/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-perpus.png'
        }
      },
      {
        isActive: false,
        nama: 'FTIB',
        icon: 'https://cdn.lordicon.com/nobciafz.json',
        layanan: [
          {
            name: 'Surat Keterangan Aktif Mahasiswa di Fakultas',
            notion:
              'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: true
          },
          {
            name: 'Surat Pengantar dari Kampus untuk Tugas MK dan TA',
            notion:
              'Surat pengantar yang dikeluarkan untuk Tugas Mata Kuliah dan Tugas Akhir untuk observasi ke suatu Instansi/perusahaan',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Surat Dispensasi',
            notion: 'Surat resmi untuk keperluan meminta keringanan atau pemakluman dari suatu hal',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Surat Rekomendasi',
            notion:
              'Surat yang merekomendasikan mahasiswa atau disebut juga sebagai surat referensi yang membantu pihak ketiga mengetahui dan memahami lebih lanjut tentang mahasiswa tersebut',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Residensi TA (menginap di kampus)',
            notion:
              'Surat keterangan dengan kepentingan menginap di kampus untuk keperluan Tugas Akhir',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Proposal Dana Kegiatan',
            notion:
              'Sebuah dokumen rencana acara yang ditulis dengan tujuan permohonan izin dan dukungan berupa dana atau sponsor',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Proposal_Dana_Kegiatan.png',
            status: false
          },
          {
            name: 'Legalisir KHS & Transkrip',
            notion:
              'Pembubuhan cap stempel dan tanda tangan asli oleh pihak yang berwenang pada lembar fotokopi Kartu Hasil Studi & Transkrip',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Legalisir_KHS.png',
            status: false
          }
        ],
        informasi: {
          nama: 'Informasi FTIB',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi ftib yang mencakup kegiatan layanan administrasi ftib, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit FTIB, silakan kunjungi:',
          ig: 'ftib.ittelkomsby',
          web: 'https://ftib.ittelkom-sby.ac.id/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-ftib.png'
        }
      },
      {
        isActive: false,
        nama: 'FTEIC',
        icon: 'https://cdn.lordicon.com/ckuogwdx.json',
        layanan: [
          {
            name: 'Surat Keterangan Aktif Mahasiswa di Fakultas',
            notion:
              'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: true
          },
          {
            name: 'Surat Pengantar dari Kampus untuk Tugas MK dan TA',
            notion:
              'Surat pengantar yang dikeluarkan untuk Tugas Mata Kuliah dan Tugas Akhir untuk observasi ke suatu Instansi/perusahaan',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Surat Dispensasi',
            notion: 'Surat resmi untuk keperluan meminta keringanan atau pemakluman dari suatu hal',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Surat Rekomendasi',
            notion:
              'Surat yang merekomendasikan mahasiswa atau disebut juga sebagai surat referensi yang membantu pihak ketiga mengetahui dan memahami lebih lanjut tentang mahasiswa tersebut',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Surat Peminjaman Lab dan Perlengkapannya',
            notion: 'Surat peminjaman ruangan atau inventaris laboratorium',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Residensi TA (menginap di kampus)',
            notion:
              'Surat keterangan dengan kepentingan menginap di kampus untuk keperluan Tugas Akhir',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            status: false
          },
          {
            name: 'Proposal Dana Kegiatan',
            notion:
              'Sebuah dokumen rencana acara yang ditulis dengan tujuan permohonan izin dan dukungan berupa dana atau sponsor',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Proposal_Dana_Kegiatan.png',
            status: false
          },
          {
            name: 'Legalisir KHS & Transkrip',
            notion:
              'Pembubuhan cap stempel dan tanda tangan asli oleh pihak yang berwenang pada lembar fotokopi Kartu Hasil Studi & Transkrip',
            icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Legalisir_KHS.png',
            status: false
          }
        ],
        informasi: {
          nama: 'Informasi FTEIC',
          notion:
            'Merupakan unit yang bertugas mengelola administrasi fteic yang mencakup kegiatan layanan administrasi fteic, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit FTEIC, silakan kunjungi:',
          ig: 'fteic.ittelkomsby',
          web: 'https://fteic.ittelkom-sby.ac.id/',
          img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-ftib.png'
        }
      }
    ],
    selectedItem: {
      isActive: true,
      nama: 'Akademik',
      icon: 'https://cdn.lordicon.com/wxnxiano.json',
      layanan: [
        {
          name: 'Registrasi KRS',
          notion: 'Merupakan registrasi mahasiswa pada setiap semester awal perkuliahan',
          icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/registrasi-krs.png',
          status: true
        },
        {
          name: 'Ujian (UTS & UAS)',
          notion:
            'Layanan pengumuman jadwal kegiatan ujian akademik yang bertujuan untuk melakukan pengukuran dan penilaian kompetensi peserta didik, sebagai dasar kegiatan evaluasi pembelajaran perkuliahan.',
          icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/uts-uas.png',
          status: false
        },
        {
          name: 'Surat Keterangan Aktif',
          notion:
            'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.',
          icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/surat-keterangan-aktif.png',
          status: false
        },
        {
          name: 'Layanan Perkuliahan',
          notion:
            'Layanan panduan mengenai proses pelayanan perkuliahan yang ada di IT Telkom Surabaya.',
          icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/layanan-perkuliahan.png',
          status: false
        },
        {
          name: 'Ijazah dan Transkrip Nilai',
          notion:
            'Layanan mengenai proses penerbitan transkrip dan ijazah kepada calon lulusan dan pihak terkait sehingga proses penerbitan transkrip dapat terkendali.',
          icon: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/ijazah.png',
          status: false
        }
      ],
      informasi: {
        nama: 'Informasi Akademik',
        notion:
          'Merupakan unit yang bertugas mengelola administrasi akademik yang mencakup kegiatan layanan administrasi akademik, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Akademik, silakan kunjungi:',
        ig: 'akademikitts',
        web: 'https://akademik.ittelkom-sby.ac.id/',
        img: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-academic.png'
      }
    }
  },
  getters: {
    category: (state) => state.category,
    selectedItem: (state) => state.selectedItem
  },
  actions: {
    addToSelectedItem({ commit }, payload) {
      commit('SET_SELECTED_ITEM', payload)
    },
    switchStatus({ commit }, payload) {
      commit('TOGGLE_STATUS', payload)
    }
  },
  mutations: {
    SET_SELECTED_ITEM: (state, payload) => {
      state.selectedItem = payload
      let status = state.category
      status.forEach((item) => {
        if (item === payload) {
          item.isActive = true
        } else {
          item.isActive = false
        }
      })
    },
    TOGGLE_STATUS: (state, payload) => {
      state.selectedItem.layanan.forEach((item) => {
        if (item === payload) {
          item.status = true
        } else {
          item.status = false
        }
      })
    }
  }
}

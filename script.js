/* script.js  (Afrilia & Ghalia)
   
*/

/* ==================================================
   STRUKTUR DATA MODUL PELAJARAN (BARU)
   Semua materi Kelas X, XI, dan XII telah diintegrasikan.
   ================================================== */
const MODULE_DATA = {
  "X": {
    "Kimia": [
      {
        semester: 1,
        title: "Hakikat Ilmu Kimia",
        content: `
          <h3>Definisi dan Objek Kajian</h3>
          <p>Kimia adalah ilmu yang mempelajari materi (struktur, komposisi, sifat, dan perubahan) serta energi yang menyertai perubahan materi.</p>
          <h3>Perubahan Materi</h3>
          <p>Perbedaan mendasar antara perubahan fisika (reversibel, tidak ada zat baru) dan perubahan kimia (irreversibel, menghasilkan zat baru).</p>
          <h3>Peranan</h3>
          <p>Kontribusi Kimia dalam berbagai bidang, seperti kesehatan (obat-obatan), pertanian (pupuk dan pestisida), dan industri.</p>
          <h3>Metode Ilmiah</h3>
          <p>Langkah-langkah dasar dalam penelitian ilmiah (observasi, hipotesis, eksperimen, kesimpulan).</p>
        `
      },
      {
        semester: 1,
        title: "Keselamatan Kerja di Laboratorium",
        content: `
          <h3>Aturan Dasar</h3>
          <p>Tata tertib wajib di lab (penggunaan jas lab, tidak makan/minum, larangan mencampur zat sembarangan).</p>
          <h3>Pengenalan Alat</h3>
          <p>Fungsi spesifik dari alat-alat utama (buret, pipet, labu ukur, gelas kimia) dan cara penggunaannya yang benar.</p>
          <h3>Bahan Kimia</h3>
          <p>Simbol-simbol bahaya pada kemasan (toksik, korosif, mudah meledak/terbakar) dan prosedur penyimpanan yang aman.</p>
          <h3>Penanganan Limbah dan Kecelakaan</h3>
          <p>Prosedur pembuangan limbah sesuai jenisnya dan tindakan pertolongan pertama saat terjadi insiden.</p>
        `
      },
      {
        semester: 1,
        title: "Struktur Atom dan Sistem Periodik",
        content: `
          <h3>Model Atom</h3>
          <p>Perkembangan teori atom dari Dalton hingga Model Mekanika Kuantum.</p>
          <h3>Partikel Dasar</h3>
          <p>Penjelasan tentang proton (muatan positif), neutron (netral), dan elektron (muatan negatif), serta konsep Nomor Atom dan Nomor Massa.</p>
          <h3>Konfigurasi Elektron</h3>
          <p>Pengaturan elektron dalam kulit atom (Bohr) dan dalam orbital atom (aturan Aufbau, Hund, Pauli).</p>
          <h3>Sistem Periodik Unsur (SPU)</h3>
          <p>Penempatan unsur berdasarkan jumlah kulit (Periode) dan elektron valensi (Golongan) serta pemahaman sifat-sifat keperiodikan (jari-jari atom, energi ionisasi, keelektronegatifan, afinitas elektron).</p>
        `
      },
      {
        semester: 1,
        title: "Ikatan Kimia",
        content: `
          <h3>Kestabilan Atom</h3>
          <p>Kecenderungan atom untuk mencapai konfigurasi gas mulia (aturan oktet dan duplet).</p>
          <h3>Ikatan Ion</h3>
          <p>Terbentuk akibat serah terima elektron (umumnya logam dan nonlogam), menghasilkan senyawa dengan daya hantar listrik baik dalam lelehan atau larutan.</p>
          <h3>Ikatan Kovalen</h3>
          <p>Terbentuk akibat pemakaian pasangan elektron bersama (umumnya antar nonlogam).</p>
          <ul>
            <li>Dibedakan menjadi kovalen tunggal, rangkap, dan koordinasi.</li>
            <li>Klasifikasi berdasarkan kepolaran (polar vs. nonpolar).</li>
          </ul>
          <h3>Ikatan Logam</h3>
          <p>Ikatan khusus antar atom-atom logam.</p>
        `
      },
      {
        semester: 1,
        title: "Senyawa dan Tata Nama Kimia",
        content: `
          <h3>Rumus Kimia</h3>
          <p>Penulisan rumus empiris dan rumus molekul.</p>
          <h3>Tata Nama Senyawa Ion</h3>
          <p>Penamaan kation diikuti anion, menggunakan angka Romawi untuk logam transisi.</p>
          <h3>Tata Nama Senyawa Kovalen Biner</h3>
          <p>Menggunakan awalan Yunani (mono, di, tri, dst.) untuk menunjukkan jumlah atom.</p>
          <h3>Senyawa Khusus</h3>
          <p>Penamaan asam (HX), basa (MOH), dan garam.</p>
        `
      },
      {
        semester: 2,
        title: "Bentuk Molekul",
        content: `
          <h3>Teori VSEPR (Domain Elektron)</h3>
          <p>Penentuan geometri molekul berdasarkan tolakan Pasangan Elektron Ikatan (PEI) dan Pasangan Elektron Bebas (PEB) di sekitar atom pusat.</p>
          <h3>Hibridisasi</h3>
          <p>Pencampuran orbital atom untuk membentuk orbital hibrida baru (sp, sp^2, sp^3) yang menentukan bentuk molekul.</p>
          <h3>Kepolaran Molekul</h3>
          <p>Penentuan apakah suatu molekul polar atau nonpolar berdasarkan bentuk geometri dan momen dipol ikatan.</p>
        `
      },
      {
        semester: 2,
        title: "Stoikiometri",
        content: `
          <h3>Massa Atom dan Molekul Relatif (Ar dan Mr)</h3>
          <p>Perhitungan massa atom/molekul relatif berdasarkan massa atom standar.</p>
          <h3>Konsep Mol</h3>
          <p>Satuan jumlah zat (Bilangan Avogadro) dan hubungannya dengan massa (g), volume gas (L), dan jumlah partikel.</p>
          <p>Perhitungan volume gas pada keadaan STP, RTP, dan kondisi non-standar (PV=nRT).</p>
          <h3>Rumus Empiris dan Molekul</h3>
          <p>Penentuan perbandingan mol paling sederhana (RE) dan rumus sesungguhnya (RM) dari suatu senyawa.</p>
          <h3>Perhitungan Reaksi</h3>
          <p>Menggunakan koefisien reaksi yang setara untuk menghitung massa atau volume zat pereaksi/hasil reaksi. Termasuk penentuan Pereaksi Pembatas.</p>
        `
      },
      {
        semester: 2,
        title: "Larutan Elektrolit & Nonelektrolit",
        content: `
          <h3>Pengertian</h3>
          <p>Perbedaan larutan yang dapat menghantarkan listrik (elektrolit) dan yang tidak (nonelektrolit).</p>
          <h3>Ionisasi</h3>
          <p>Proses zat terlarut pecah menjadi ion bebas.</p>
          <ul>
            <li>Elektrolit kuat (α = 1, terionisasi sempurna).</li>
            <li>Elektrolit lemah (0 < α < 1, terionisasi sebagian).</li>
          </ul>
          <h3>Identifikasi</h3>
          <p>Pengujian daya hantar listrik (nyala lampu dan gelembung gas).</p>
        `
      },
      {
        semester: 2,
        title: "Reaksi Redoks",
        content: `
          <h3>Bilangan Oksidasi (Biloks)</h3>
          <p>Aturan penentuan Biloks setiap unsur dalam senyawa/ion.</p>
          <h3>Oksidasi dan Reduksi</h3>
          <ul>
            <li>Oksidasi: Kenaikan Biloks (pelepasan elektron).</li>
            <li>Reduksi: Penurunan Biloks (penangkapan elektron).</li>
          </ul>
          <h3>Oksidator dan Reduktor</h3>
          <p>Zat yang menyebabkan reduksi (dirinya teroksidasi) dan zat yang menyebabkan oksidasi (dirinya tereduksi).</p>
          <h3>Penyetaraan Reaksi</h3>
          <p>Teknik menyetarakan persamaan redoks yang kompleks (Metode Biloks atau Metode Setengah Reaksi) dalam suasana asam dan basa.</p>
        `
      },
      {
        semester: 2,
        title: "Hukum Dasar Kimia",
        content: `
          <h3>Hukum Kekekalan Massa (Lavoisier)</h3>
          <p>Massa sebelum dan sesudah reaksi selalu sama.</p>
          <h3>Hukum Perbandingan Tetap (Proust)</h3>
          <p>Perbandingan massa unsur dalam suatu senyawa selalu tetap.</p>
          <h3>Hukum Perbandingan Berganda (Dalton)</h3>
          <p>Jika dua unsur membentuk lebih dari satu senyawa, perbandingan massa salah satu unsur yang berikatan dengan massa tetap unsur lain akan berupa bilangan bulat sederhana.</p>
          <h3>Hukum Gay-Lussac</h3>
          <p>Perbandingan volume gas-gas yang bereaksi dan hasil reaksi pada suhu dan tekanan yang sama berbanding sebagai bilangan bulat sederhana.</p>
          <h3>Hipotesis Avogadro</h3>
          <p>Volume gas yang sama pada kondisi (T, P) yang sama mengandung jumlah molekul yang sama.</p>
        `
      }
    ],
    "Matematika": [
      {
        semester: 1,
        title: "Bilangan Real",
        content: `
          <h3>Himpunan Bilangan</h3>
          <p>Memahami hierarki bilangan (Asli, Cacah, Bulat, Rasional, Irasional) yang semuanya termasuk dalam Bilangan Real.</p>
          <h3>Operasi Aljabar</h3>
          <p>Aturan dasar penjumlahan, pengurangan, perkalian, dan pembagian, termasuk sifat komutatif, asosiatif, dan distributif.</p>
          <h3>Pangkat dan Akar</h3>
          <p>Sifat-sifat eksponen (a^m * a^n = a^(m+n)), bilangan berpangkat pecahan, dan cara merasionalkan penyebut bentuk akar.</p>
          <h3>Logaritma</h3>
          <p>Definisi logaritma sebagai invers dari eksponen (Jika a^c = b maka ^a log b = c) dan sifat-sifat dasar logaritma.</p>
        `
      },
      {
        semester: 1,
        title: "Persamaan & Pertidaksamaan Linear",
        content: `
          <h3>Persamaan Linear Satu Variabel (PLSV)</h3>
          <p>Menentukan nilai variabel yang memenuhi persamaan berpangkat satu.</p>
          <h3>Pertidaksamaan Linear Satu Variabel (PtLSV)</h3>
          <p>Menentukan interval nilai variabel yang memenuhi, dengan fokus pada perubahan tanda ketidaksamaan saat dikalikan atau dibagi bilangan negatif.</p>
          <h3>Persamaan Nilai Mutlak</h3>
          <p>Menyelesaikan persamaan yang melibatkan nilai mutlak, |ax+b|=c, dengan menggunakan definisi nilai mutlak (|x|=x jika x >= 0 dan |x|=-x jika x < 0).</p>
          <h3>Pertidaksamaan Nilai Mutlak</h3>
          <p>Menyelesaikan bentuk |ax+b|<c dan |ax+b|>c.</p>
        `
      },
      {
        semester: 1,
        title: "Persamaan & Pertidaksamaan Kuadrat",
        content: `
          <h3>Bentuk Umum Persamaan Kuadrat (PK)</h3>
          <div class="formula">ax² + bx + c = 0 (a ≠ 0)</div>
          <h3>Metode Penyelesaian PK</h3>
          <ul>
            <li>Pemfaktoran: Mengubah bentuk ax² + bx + c menjadi (px+q)(rx+s).</li>
            <li>Melengkapi Kuadrat Sempurna: Mengubah bentuk ax² + bx + c menjadi (x+p)² = q.</li>
            <li>Rumus ABC (Kuadratis): x₁,₂ = [-b ± √(b²-4ac)] / 2a</li>
          </ul>
          <h3>Diskriminan (D)</h3>
          <div class="formula">D = b² - 4ac</div>
          <p>Untuk menentukan jenis akar (D>0 dua akar real berbeda, D=0 satu akar real/kembar, D<0 akar imajiner).</p>
          <h3>Pertidaksamaan Kuadrat</h3>
          <p>Menentukan daerah penyelesaian pada garis bilangan setelah mencari akar-akar persamaannya dan melakukan uji titik.</p>
        `
      },
      {
        semester: 1,
        title: "Fungsi Kuadrat",
        content: `
          <h3>Bentuk Umum Fungsi Kuadrat</h3>
          <div class="formula">f(x) = y = ax² + bx + c</div>
          <h3>Karakteristik Grafik</h3>
          <p>Pengaruh nilai a (membuka ke atas jika a>0, ke bawah jika a<0).</p>
          <h3>Titik Penting</h3>
          <ul>
            <li>Titik Potong Sumbu X: Diperoleh saat y=0.</li>
            <li>Titik Potong Sumbu Y: Diperoleh saat x=0.</li>
            <li>Sumbu Simetri: Garis vertikal pada x = -b / 2a.</li>
            <li>Titik Puncak (Ekstrem): Koordinat puncak (x_p, y_p) di mana x_p = -b / 2a dan y_p adalah f(x_p).</li>
          </ul>
          <h3>Menyusun Fungsi Kuadrat</h3>
          <p>Menentukan persamaan fungsi kuadrat jika diketahui titik potong sumbu, titik puncak, atau tiga titik sembarang.</p>
        `
      },
      {
        semester: 1,
        title: "Persamaan Garis",
        content: `
          <h3>Gradien (m)</h3>
          <p>Kemiringan garis, m = Δy / Δx, atau m dari y=mx+c.</p>
          <h3>Menentukan Gradien</h3>
          <ul>
            <li>Dua titik (x₁, y₁) dan (x₂, y₂): m = (y₂-y₁) / (x₂-x₁).</li>
            <li>Persamaan umum Ax+By+C=0: m = -A / B.</li>
          </ul>
          <h3>Hubungan Antar Garis</h3>
          <ul>
            <li>Sejajar: m₁ = m₂.</li>
            <li>Tegak Lurus: m₁ * m₂ = -1.</li>
          </ul>
          <h3>Menyusun Persamaan Garis</h3>
          <ul>
            <li>Melalui satu titik (x₁, y₁) dengan gradien m: y - y₁ = m(x - x₁).</li>
            <li>Melalui dua titik (x₁, y₁) dan (x₂, y₂).</li>
          </ul>
        `
      },
      {
        semester: 2,
        title: "Sistem Persamaan Linear",
        content: `
          <h3>Sistem Persamaan Linear Dua Variabel (SPLDV)</h3>
          <p>Mencari pasangan nilai (x, y) yang memenuhi dua persamaan linear.</p>
          <p>Metode Penyelesaian: Substitusi, Eliminasi, dan Gabungan.</p>
          <h3>Sistem Persamaan Linear Tiga Variabel (SPLTV)</h3>
          <p>Mencari tripel nilai (x, y, z) yang memenuhi tiga persamaan linear.</p>
          <p>Biasanya diselesaikan dengan metode eliminasi-substitusi secara bertahap.</p>
          <h3>Aplikasi</h3>
          <p>Menyelesaikan masalah kontekstual yang dapat dimodelkan menjadi SPLDV atau SPLTV.</p>
        `
      },
      {
        semester: 2,
        title: "Fungsi Eksponen",
        content: `
          <h3>Sifat Eksponen</h3>
          <p>Menguatkan pemahaman sifat-sifat pangkat (misalnya a^m : a^n = a^(m-n)) yang digunakan dalam fungsi.</p>
          <h3>Fungsi Eksponen</h3>
          <div class="formula">f(x) = b * a^x (a>0, a ≠ 1)</div>
          <h3>Grafik Fungsi Eksponen</h3>
          <p>Menggambar grafik, identifikasi asimtot datar (y=0 untuk fungsi dasar), dan analisis pertumbuhan atau peluruhan (tergantung nilai a).</p>
          <h3>Persamaan Eksponen</h3>
          <p>Menyelesaikan persamaan yang melibatkan eksponen dengan menyamakan basis atau menyamakan pangkat.</p>
        `
      },
      {
        semester: 2,
        title: "Fungsi Logaritma",
        content: `
          <h3>Hubungan dengan Eksponen</h3>
          <p>Logaritma adalah invers dari eksponen, sehingga f(x) = ^a log x.</p>
          <h3>Sifat Logaritma</h3>
          <p>Penggunaan sifat-sifat untuk menyederhanakan perhitungan (misalnya log(A * B) = log A + log B).</p>
          <h3>Grafik Fungsi Logaritma</h3>
          <p>Menggambar grafik, yang merupakan pencerminan grafik eksponen terhadap garis y=x. Identifikasi asimtot tegak (x=0 untuk fungsi dasar).</p>
          <h3>Persamaan Logaritma</h3>
          <p>Menyelesaikan persamaan dengan memastikan basis sama dan memperhatikan syarat numerus (x>0).</p>
        `
      },
      {
        semester: 2,
        title: "Trigonometri Dasar",
        content: `
          <h3>Sudut</h3>
          <p>Pengenalan satuan sudut (derajat dan radian) dan konversinya.</p>
          <h3>Perbandingan Trigonometri Segitiga Siku-siku</h3>
          <p>Definisi sin, cos, tan, csc, sec, cot (Sisi Depan/Miring, Sisi Samping/Miring, dll.).</p>
          <h3>Sudut Istimewa</h3>
          <p>Nilai trigonometri untuk 0°, 30°, 45°, 60°, 90°.</p>
          <h3>Kuadran</h3>
          <p>Menentukan tanda positif atau negatif perbandingan trigonometri di Kuadran I, II, III, dan IV, dan menggunakan Relasi Sudut untuk sudut lebih dari 90°.</p>
        `
      },
      {
        semester: 2,
        title: "Statistika Dasar",
        content: `
          <h3>Populasi dan Sampel</h3>
          <p>Membedakan antara keseluruhan objek yang diteliti (populasi) dan bagian dari populasi (sampel).</p>
          <h3>Penyajian Data</h3>
          <p>Cara menyajikan data tunggal melalui tabel, diagram batang, diagram lingkaran, dan piktogram.</p>
          <h3>Ukuran Pemusatan Data Tunggal</h3>
          <ul>
            <li>Mean (Rata-rata): Jumlah semua data dibagi banyak data.</li>
            <li>Median (Nilai Tengah): Nilai data yang berada tepat di tengah setelah data diurutkan.</li>
            <li>Modus: Nilai data yang paling sering muncul.</li>
          </ul>
          <h3>Ukuran Letak Data Tunggal</h3>
          <p>Pengenalan Kuartil (membagi data menjadi empat bagian), Desil (sepuluh bagian), dan Persentil (seratus bagian).</p>
        `
      }
    ],
    "Fisika": [
      {
        semester: 1,
        title: "Besaran & Satuan",
        content: `
          <h3>Besaran Pokok</h3>
          <p>Tujuh besaran dasar yang satuannya telah didefinisikan secara internasional (panjang, massa, waktu, suhu, kuat arus listrik, intensitas cahaya, dan jumlah zat).</p>
          <h3>Besaran Turunan</h3>
          <p>Besaran yang diturunkan dari besaran pokok melalui perkalian atau pembagian (misalnya luas, volume, kecepatan, gaya).</p>
          <h3>Satuan SI (Sistem Internasional)</h3>
          <p>Penggunaan satuan baku yang konsisten secara global (meter, kilogram, sekon, dll.).</p>
          <h3>Analisis Dimensi</h3>
          <p>Teknik memeriksa kebenaran suatu persamaan fisika dengan memastikan dimensi di kedua ruas persamaan adalah sama.</p>
        `
      },
      {
        semester: 1,
        title: "Vektor",
        content: `
          <h3>Besaran Skalar vs. Vektor</h3>
          <p>Perbedaan antara besaran yang hanya memiliki nilai (skalar, misal: massa) dan yang memiliki nilai dan arah (vektor, misal: gaya).</p>
          <h3>Penggambaran Vektor</h3>
          <p>Representasi vektor menggunakan anak panah, di mana panjangnya menunjukkan nilai (besar) dan arahnya menunjukkan arah kerja.</p>
          <h3>Penjumlahan Vektor</h3>
          <ul>
            <li>Metode Grafis: Menggunakan metode Jajar Genjang, Segitiga, dan Poligon.</li>
            <li>Metode Analitis: Menguraikan vektor ke dalam komponen sumbu-x dan sumbu-y, lalu menjumlahkan komponen yang sejenis.</li>
          </ul>
          <h3>Selisih Vektor</h3>
          <p>Sama dengan penjumlahan vektor negatif (A - B = A + (-B)).</p>
        `
      },
      {
        semester: 1,
        title: "Gerak Lurus (GLB & GLBB)",
        content: `
          <h3>Konsep Dasar Kinematika</h3>
          <p>Posisi, Jarak, Perpindahan (vektor), Kelajuan (skalar), Kecepatan (vektor), dan Percepatan (vektor).</p>
          <h3>Gerak Lurus Beraturan (GLB)</h3>
          <p>Gerak dengan kecepatan konstan (percepatan a=0). Persamaan dasar:</p>
          <div class="formula">s = v * t</div>
          <h3>Gerak Lurus Berubah Beraturan (GLBB)</h3>
          <p>Gerak dengan percepatan konstan (a ≠ 0). Persamaan:</p>
          <div class="formula">
            v_t = v₀ + a * t<br>
            s = v₀ * t + ½ * a * t²<br>
            v_t² = v₀² + 2 * a * s
          </div>
          <h3>Gerak Vertikal</h3>
          <p>Aplikasi GLBB, termasuk Gerak Jatuh Bebas (v₀ = 0) dan Gerak Vertikal ke Atas/Bawah (a = -g atau a = +g).</p>
        `
      },
      {
        semester: 1,
        title: "Gerak Melingkar",
        content: `
          <h3>Besaran Sudut</h3>
          <p>Posisi Sudut (θ), Kecepatan Sudut (ω), dan Percepatan Sudut (α).</p>
          <h3>Hubungan Linear dan Sudut</h3>
          <p>Keterkaitan antara besaran linear (v, a, s) dan besaran sudut (ω, α, θ) melalui jari-jari (r), contoh:</p>
          <div class="formula">v = ω * r</div>
          <h3>Gerak Melingkar Beraturan (GMB)</h3>
          <p>Gerak dengan kecepatan sudut konstan (α = 0). Fokus pada gaya sentripetal (F_s) dan percepatan sentripetal (a_s) yang selalu menuju pusat lingkaran.</p>
        `
      },
      {
        semester: 1,
        title: "Hukum Newton",
        content: `
          <h3>Hukum I Newton (Inersia)</h3>
          <p>Kecenderungan benda mempertahankan keadaan geraknya (diam atau bergerak lurus beraturan) jika ΣF = 0.</p>
          <h3>Hukum II Newton</h3>
          <p>Hubungan antara Gaya (F), Massa (m), dan Percepatan (a):</p>
          <div class="formula">ΣF = m * a</div>
          <p>Gaya adalah penyebab perubahan gerak.</p>
          <h3>Hukum III Newton (Aksi-Reaksi)</h3>
          <p>Setiap gaya aksi selalu ada gaya reaksi yang besarnya sama, arahnya berlawanan, dan bekerja pada benda yang berbeda (F_aksi = -F_reaksi).</p>
          <h3>Penerapan Gaya</h3>
          <p>Analisis Gaya Berat, Gaya Normal, Gaya Tegangan Tali, dan Gaya Gesek (Statis dan Kinetis) pada berbagai kasus (bidang datar, bidang miring, sistem katrol).</p>
        `
      },
      {
        semester: 2,
        title: "Usaha & Energi",
        content: `
          <h3>Usaha (W)</h3>
          <p>Hasil kali gaya dengan perpindahan yang sejajar dengan arah gaya:</p>
          <div class="formula">W = F * s * cos(θ)</div>
          <h3>Energi Kinetik (Ek)</h3>
          <p>Energi yang dimiliki benda karena geraknya:</p>
          <div class="formula">Ek = ½ * m * v²</div>
          <h3>Energi Potensial (Ep)</h3>
          <p>Energi yang dimiliki benda karena kedudukannya (posisi/ketinggian), terutama Energi Potensial Gravitasi:</p>
          <div class="formula">Ep = m * g * h</div>
          <h3>Hukum Kekekalan Energi Mekanik</h3>
          <p>Jumlah Energi Kinetik dan Potensial selalu konstan jika hanya ada gaya konservatif yang bekerja (Em₁ = Em₂).</p>
          <h3>Daya (P)</h3>
          <p>Laju usaha yang dilakukan per satuan waktu:</p>
          <div class="formula">P = W / t</div>
        `
      },
      {
        semester: 2,
        title: "Momentum & Impuls",
        content: `
          <h3>Momentum (p)</h3>
          <p>Ukuran kuantitas gerak benda (p = m * v). Momentum adalah besaran vektor.</p>
          <h3>Impuls (I)</h3>
          <p>Perubahan momentum (Δp) yang disebabkan oleh gaya yang bekerja dalam waktu singkat (I = F * Δt).</p>
          <h3>Hukum Kekekalan Momentum</h3>
          <p>Total momentum sistem sebelum dan sesudah tumbukan selalu tetap jika tidak ada gaya luar yang bekerja (Σp_sebelum = Σp_sesudah).</p>
          <h3>Tumbukan</h3>
          <p>Dibedakan menjadi:</p>
          <ul>
            <li>Lenting Sempurna: Energi kinetik kekal, koefisien restitusi e = 1.</li>
            <li>Lenting Sebagian: Energi kinetik tidak kekal, 0 < e < 1.</li>
            <li>Tidak Lenting Sama Sekali: Setelah tumbukan benda menyatu, e = 0.</li>
          </ul>
        `
      },
      {
        semester: 2,
        title: "Fluida Statis",
        content: `
          <h3>Tekanan</h3>
          <p>Gaya per satuan luas (P = F / A), termasuk tekanan atmosfer dan tekanan total.</p>
          <h3>Tekanan Hidrostatis</h3>
          <p>Tekanan zat cair pada kedalaman tertentu (P_h = ρ * g * h).</p>
          <h3>Hukum Pascal</h3>
          <p>Tekanan yang diberikan pada fluida tertutup diteruskan sama rata ke segala arah (prinsip dongkrak hidrolik).</p>
          <h3>Hukum Archimedes</h3>
          <p>Gaya angkat (Gaya Apung) yang dialami benda di dalam fluida (F_A = ρ_fluida * g * V_celup). Menjelaskan benda terapung, melayang, dan tenggelam.</p>
          <h3>Fenomena Permukaan</h3>
          <p>Tegangan Permukaan, Kapilaritas, dan Viskositas (kekentalan).</p>
        `
      },
      {
        semester: 2,
        title: "Fluida Dinamis",
        content: `
          <h3>Karakteristik Fluida Ideal</h3>
          <p>Tidak kompresibel (volume tetap), tidak viskos (tidak kental), alirannya stasioner (tetap), dan non-rotasional.</p>
          <h3>Persamaan Kontinuitas</h3>
          <p>Kekekalan massa fluida, Debit (Q) konstan:</p>
          <div class="formula">A₁ * v₁ = A₂ * v₂</div>
          <h3>Persamaan Bernoulli</h3>
          <p>Hukum kekekalan energi mekanik pada aliran fluida, yang menghubungkan tekanan, kecepatan, dan ketinggian (P + ρgh + ½ρv² = konstan).</p>
          <h3>Aplikasi Bernoulli</h3>
          <p>Torricelli (kecepatan aliran dari lubang), Venturimeter, dan Gaya Angkat Sayap Pesawat.</p>
        `
      },
      {
        semester: 2,
        title: "Suhu & Kalor",
        content: `
          <h3>Suhu dan Termometer</h3>
          <p>Definisi suhu sebagai derajat panas, dan skala suhu yang digunakan (Celcius, Reamur, Fahrenheit, Kelvin) serta konversinya.</p>
          <h3>Kalor (Q)</h3>
          <p>Energi panas yang berpindah karena perbedaan suhu.</p>
          <ul>
            <li>Kalor Sensibel: Kalor untuk menaikkan suhu (Q = m * c * ΔT).</li>
            <li>Kalor Laten: Kalor untuk mengubah wujud (Q = m * L atau m * U).</li>
          </ul>
          <h3>Asas Black</h3>
          <p>Kalor yang dilepaskan zat bersuhu lebih tinggi sama dengan kalor yang diterima zat bersuhu lebih rendah (Q_lepas = Q_terima).</p>
          <h3>Perpindahan Kalor</h3>
          <p>Mekanisme perpindahan energi panas: Konduksi (melalui sentuhan), Konveksi (melalui aliran zat), dan Radiasi (melalui gelombang elektromagnetik).</p>
        `
      }
    ],
    "Ekonomi": [
      {
        semester: 1,
        title: "Konsep Ilmu Ekonomi",
        content: `
          <h3>Definisi Ekonomi</h3>
          <p>Ilmu yang mempelajari perilaku manusia dalam memilih dan menciptakan kemakmuran, berfokus pada alokasi sumber daya yang terbatas untuk memenuhi kebutuhan yang tidak terbatas.</p>
          <h3>Pembagian Ilmu Ekonomi</h3>
          <ul>
            <li>Ekonomi Deskriptif: Menggambarkan fakta ekonomi yang ada (misalnya, data inflasi).</li>
            <li>Teori Ekonomi: Terbagi menjadi Ekonomi Mikro (mempelajari unit ekonomi kecil: konsumen, produsen, pasar) dan Ekonomi Makro (mempelajari unit ekonomi besar: PDB, inflasi, pengangguran).</li>
            <li>Ekonomi Terapan: Penggunaan teori ekonomi untuk memecahkan masalah praktis.</li>
          </ul>
          <h3>Masalah Ekonomi Modern (What, How, For Whom)</h3>
          <p>Menentukan barang apa yang diproduksi, bagaimana cara memproduksinya, dan untuk siapa barang tersebut diproduksi.</p>
        `
      },
      {
        semester: 1,
        title: "Kebutuhan, Kelangkaan, dan Pengambilan Keputusan",
        content: `
          <h3>Kebutuhan Manusia</h3>
          <p>Klasifikasi kebutuhan berdasarkan intensitas (primer, sekunder, tersier), subjek (individu, kolektif), waktu (sekarang, masa depan), dan sifat (jasmani, rohani).</p>
          <h3>Kelangkaan (Scarcity)</h3>
          <p>Kondisi di mana sumber daya yang tersedia tidak cukup untuk memenuhi semua kebutuhan dan keinginan. Kelangkaan adalah inti masalah ekonomi.</p>
          <h3>Alat Pemuas Kebutuhan</h3>
          <p>Klasifikasi barang (ekonomi, bebas, illith, subtitusi, komplementer).</p>
          <h3>Biaya Peluang (Opportunity Cost)</h3>
          <p>Nilai dari kesempatan terbaik berikutnya yang hilang karena telah memilih suatu alternatif. Ini adalah kunci dalam pengambilan keputusan rasional.</p>
          <h3>Skala Prioritas</h3>
          <p>Penyusunan daftar kebutuhan berdasarkan tingkat kepentingan untuk mengelola kelangkaan.</p>
        `
      },
      {
        semester: 1,
        title: "Pelaku Ekonomi",
        content: `
          <h3>Rumah Tangga Konsumen (RTK)</h3>
          <p>Pemilik faktor produksi (tenaga kerja, modal, tanah, keahlian) dan pengguna akhir barang/jasa.</p>
          <h3>Rumah Tangga Produsen (RTP)</h3>
          <p>Pengguna faktor produksi dan penghasil barang/jasa.</p>
          <h3>Rumah Tangga Pemerintah (RTG)</h3>
          <p>Berfungsi sebagai regulator (pembuat kebijakan), konsumen (pengguna barang/jasa), dan produsen (penyedia layanan publik).</p>
          <h3>Masyarakat Luar Negeri (MLN)</h3>
          <p>Peran dalam kegiatan ekspor, impor, investasi, dan pertukaran tenaga kerja.</p>
          <h3>Circular Flow Diagram</h3>
          <p>Model sederhana yang menggambarkan arus uang dan arus barang/faktor produksi yang mengalir antar pelaku ekonomi (terutama antara RTK dan RTP).</p>
        `
      },
      {
        semester: 1,
        title: "Sistem Ekonomi",
        content: `
          <h3>Definisi</h3>
          <p>Cara suatu negara mengatur alokasi sumber daya dan kegiatan ekonomi untuk memecahkan masalah dasar ekonomi.</p>
          <h3>Jenis-jenis Sistem Ekonomi</h3>
          <ul>
            <li>Tradisional: Berbasis kebiasaan, produksi sederhana, tidak ada pembagian kerja yang jelas.</li>
            <li>Komando (Terpusat): Keputusan ekonomi ditentukan sepenuhnya oleh pemerintah.</li>
            <li>Pasar (Liberal): Keputusan ekonomi didasarkan pada mekanisme pasar (harga), peran pemerintah minim.</li>
            <li>Campuran: Gabungan dari sistem pasar dan komando, di mana interaksi pasar tetap berjalan dengan adanya regulasi pemerintah.</li>
          </ul>
          <h3>Sistem Ekonomi Indonesia</h3>
          <p>Mengacu pada Sistem Ekonomi Pancasila atau Demokrasi Ekonomi, yang berlandaskan asas kekeluargaan dan prinsip gotong royong.</p>
        `
      },
      {
        semester: 2,
        title: "Permintaan & Penawaran",
        content: `
          <h3>Permintaan (Demand)</h3>
          <p>Jumlah barang/jasa yang ingin dibeli konsumen pada berbagai tingkat harga. Hukum Permintaan: Harga naik, jumlah diminta turun (ceteris paribus).</p>
          <h3>Penawaran (Supply)</h3>
          <p>Jumlah barang/jasa yang ingin dijual produsen pada berbagai tingkat harga. Hukum Penawaran: Harga naik, jumlah ditawarkan naik (ceteris paribus).</p>
          <h3>Faktor Penentu</h3>
          <p>Selain harga barang itu sendiri, faktor lain seperti pendapatan, selera, harga barang subtitusi/komplementer, dan teknologi.</p>
          <h3>Keseimbangan Pasar (Equilibrium)</h3>
          <p>Titik potong antara kurva permintaan dan penawaran, di mana jumlah yang diminta sama dengan jumlah yang ditawarkan.</p>
          <h3>Elastisitas</h3>
          <p>Konsep yang mengukur kepekaan (respons) jumlah yang diminta atau ditawarkan terhadap perubahan harga (elastis, inelastis, uniter).</p>
        `
      },
      {
        semester: 2,
        title: "Pasar & Struktur Pasar",
        content: `
          <h3>Fungsi Pasar</h3>
          <p>Fungsi distribusi, fungsi pembentukan harga, dan fungsi promosi.</p>
          <h3>Struktur Pasar</h3>
          <p>Klasifikasi pasar berdasarkan jumlah penjual, jenis produk, dan kemudahan keluar masuk pasar.</p>
          <ul>
            <li>Pasar Persaingan Sempurna: Jumlah penjual dan pembeli banyak, barang homogen, tidak ada hambatan masuk/keluar. Harga ditentukan pasar (price taker).</li>
            <li>Pasar Persaingan Tidak Sempurna:</li>
            <ul>
              <li>Monopoli: Satu penjual menguasai pasar.</li>
              <li>Oligopoli: Sedikit penjual (terdapat ketergantungan antar perusahaan).</li>
              <li>Monopolistik: Banyak penjual, barang terdiferensiasi (sedikit berbeda).</li>
            </ul>
          </ul>
        `
      },
      {
        semester: 2,
        title: "Lembaga Keuangan",
        content: `
          <h3>Lembaga Keuangan Bank</h3>
          <p>Meliputi Bank Sentral (pengatur kebijakan moneter), Bank Umum (menghimpun dana dan memberikan kredit), dan BPR (Bank Perkreditan Rakyat).</p>
          <h3>Lembaga Keuangan Bukan Bank (LKBB)</h3>
          <p>Lembaga yang menghimpun dana tidak secara langsung dari masyarakat (pinjaman) dan menerbitkannya kembali dalam bentuk surat berharga atau pinjaman. Contoh: Asuransi, Dana Pensiun, Pegadaian, Pasar Modal.</p>
        `
      },
      {
        semester: 2,
        title: "Uang & Bank",
        content: `
          <h3>Uang</h3>
          <ul>
            <li>Definisi dan Sejarah: Dari barter hingga uang komoditas, uang kertas, dan uang giral.</li>
            <li>Fungsi Asli: Alat tukar dan Satuan Hitung.</li>
            <li>Fungsi Turunan: Alat pembayaran, penimbun kekayaan (penyimpan nilai), dan penunjuk harga.</li>
          </ul>
          <h3>Bank</h3>
          <ul>
            <li>Fungsi Utama Bank Umum: Menghimpun dana (tabungan, giro, deposito), menyalurkan kredit, dan memberikan jasa-jasa bank lainnya (transfer, kliring).</li>
            <li>Peran Bank Sentral (BI di Indonesia): Mengatur peredaran uang, menjaga stabilitas nilai rupiah, dan mengatur sistem pembayaran.</li>
          </ul>
        `
      },
      {
        semester: 2,
        title: "Koperasi",
        content: `
          <h3>Pengertian dan Tujuan</h3>
          <p>Badan usaha yang didirikan berdasarkan asas kekeluargaan dan bertujuan menyejahterakan anggotanya.</p>
          <h3>Asas dan Prinsip Koperasi</h3>
          <p>Asas kekeluargaan, dan prinsip keanggotaan sukarela, pengelolaan demokratis, pembagian Sisa Hasil Usaha (SHU) secara adil, dan kemandirian.</p>
          <h3>Jenis-jenis Koperasi</h3>
          <p>Berdasarkan fungsinya (Koperasi Produksi, Konsumsi, Jasa, Serbausaha).</p>
        `
      }
    ]
  },
  "XI": {
    "Kimia": [
      {
        semester: 1,
        title: "Struktur Atom Lanjutan",
        content: `
          <h3>Bilangan Kuantum dan Orbital</h3>
          <p>Penentuan detail lokasi elektron: n (kulit/tingkat energi), l (bentuk orbital -> s, p, d, f), m (orientasi orbital, dari -l sampai +l), dan s (arah spin, +1/2 atau -1/2).</p>
          <h3>Pengisian Orbital</h3>
          <p>Aturan Aufbau (pengisian dari energi terendah), Kaidah Hund (mengisi orbital seenergi dengan spin sejajar terlebih dahulu), dan Prinsip Larangan Pauli (tidak ada dua elektron yang memiliki keempat bilangan kuantum sama).</p>
          <h3>Konfigurasi Elektron Ion</h3>
          <p>Menuliskan konfigurasi elektron setelah atom membentuk kation (melepas elektron dari kulit terluar, bukan dari orbital terakhir) atau anion (menerima elektron).</p>
        `
      },
      {
        semester: 1,
        title: "Ikatan Kimia Lanjutan",
        content: `
          <h3>Gaya Antar Molekul (Intermolecular Forces)</h3>
          <p>Gaya tarik-menarik yang lemah antara molekul, tetapi sangat memengaruhi sifat fisis.</p>
          <ul>
            <li><strong>Ikatan Hidrogen:</strong> Gaya tarik terkuat, terjadi antara atom H yang terikat pada atom yang sangat elektronegatif (F, O, atau N) dengan pasangan elektron bebas atom F, O, atau N pada molekul tetangga. Contohnya pada air (H₂O).</li>
            <li><strong>Gaya Dipol-Dipol:</strong> Gaya tarik antara molekul-molekul polar.</li>
            <li><strong>Gaya London (Gaya Dispersi):</strong> Gaya tarik paling lemah, muncul pada semua molekul (polar dan nonpolar) karena adanya dipol sesaat (sementara).</li>
          </ul>
          <h3>Hubungan dengan Sifat Fisik</h3>
          <p>Kekuatan gaya antar molekul berbanding lurus dengan titik didih, titik leleh, dan viskositas suatu zat.</p>
        `
      },
      {
        semester: 1,
        title: "Termokimia",
        content: `
          <h3>Sistem dan Lingkungan</h3>
          <p>Membedakan Sistem Terbuka (pertukaran massa dan energi), Sistem Tertutup (pertukaran energi saja), dan Sistem Terisolasi (tidak ada pertukaran).</p>
          <h3>Reaksi Eksoterm dan Endoterm</h3>
          <p>Diagram tingkat energi reaksi (Reaktan -> Produk) dan tanda perubahan entalpi (ΔH < 0 untuk Eksoterm, ΔH > 0 untuk Endoterm).</p>
          <h3>Perhitungan ΔH</h3>
          <ul>
            <li>Hukum Hess: ΔH total dihitung dari penjumlahan ΔH tahapan reaksi perantara.</li>
            <li>Entalpi Pembentukan Standar (ΔH_f°): ΔH_reaksi = ΣΔH_f°(produk) - ΣΔH_f°(reaktan).</li>
            <li>Energi Ikatan: ΔH_reaksi = ΣEnergi Ikatan(putus) - ΣEnergi Ikatan(terbentuk).</li>
          </ul>
          <h3>Kalorimetri</h3>
          <p>Penentuan ΔH secara eksperimental menggunakan Q = m * c * ΔT (kalorimeter bom atau sederhana).</p>
        `
      },
      {
        semester: 1,
        title: "Laju Reaksi",
        content: `
          <h3>Teori Tumbukan</h3>
          <p>Menjelaskan bahwa reaksi terjadi jika tumbukan memenuhi Energi Aktivasi (Ea) dan Orientasi Tumbukan yang tepat.</p>
          <h3>Faktor Laju Reaksi</h3>
          <p>Pengaruh Luas Permukaan (memperbanyak tumbukan), Konsentrasi (memperbanyak partikel), Suhu (menambah Ek partikel), dan Katalis (menurunkan Ea).</p>
          <h3>Hukum Laju Reaksi</h3>
          <p>Penentuan Orde Reaksi (eksponen x dan y) dan Tetapan Laju Reaksi (k) dari data eksperimen awal:</p>
          <div class="formula">v = k[A]^x[B]^y</div>
          <h3>Persamaan Arrhenius</h3>
          <p>Hubungan antara tetapan laju k dengan Ea dan suhu.</p>
        `
      },
      {
        semester: 2,
        title: "Kesetimbangan Kimia",
        content: `
          <h3>Tetapan Kesetimbangan (Lanjutan)</h3>
          <p>Kc (berdasarkan konsentrasi) dan Kp (berdasarkan tekanan parsial).</p>
          <p>Hubungan Kp = Kc(RT)^Δn di mana Δn adalah selisih koefisien produk gas dan reaktan gas.</p>
          <h3>Kesetimbangan Heterogen</h3>
          <p>Zat padat dan cair murni (konsentrasi dianggap konstan) tidak dimasukkan dalam rumus K.</p>
          <h3>Asas Le Chatelier</h3>
          <p>Memprediksi pergeseran kesetimbangan akibat:</p>
          <ul>
            <li>Konsentrasi: Penambahan reaktan menggeser ke produk.</li>
            <li>Tekanan/Volume: Peningkatan Tekanan (penurunan Volume) menggeser ke sisi dengan jumlah mol gas yang lebih kecil.</li>
            <li>Suhu: Kenaikan suhu menggeser ke arah reaksi Endoterm.</li>
          </ul>
          <h3>Perhitungan Reaksi Kesetimbangan</h3>
          <p>Menggunakan tabel mula-mula, reaksi, dan setimbang (MRS) untuk menentukan konsentrasi saat setimbang dan nilai K.</p>
        `
      },
      {
        semester: 2,
        title: "Asam Basa",
        content: `
          <h3>Teori Asam Basa (Lewis)</h3>
          <p>Asam adalah akseptor pasangan elektron, Basa adalah donor pasangan elektron.</p>
          <h3>Kekuatan Asam Basa</h3>
          <p>Dipengaruhi oleh derajat ionisasi (α), di mana α=1 untuk kuat.</p>
          <h3>Perhitungan pH Asam Basa Lemah</h3>
          <p>Menggunakan tetapan ionisasi (Ka untuk asam, Kb untuk basa) dan rumus:</p>
          <div class="formula">
            [H+] = √(Ka * [Asam])<br>
            [OH-] = √(Kb * [Basa])
          </div>
          <h3>Hidrolisis Garam</h3>
          <p>Reaksi ion garam (dari asam/basa lemah) dengan air, menentukan pH larutan garam (asam, basa, atau netral).</p>
        `
      },
      {
        semester: 2,
        title: "Larutan Penyangga (Buffer)",
        content: `
          <h3>Komponen Buffer</h3>
          <ul>
            <li>Buffer Asam: Asam Lemah dan Garam (Basa Konjugasinya).</li>
            <li>Buffer Basa: Basa Lemah dan Garam (Asam Konjugasinya).</li>
          </ul>
          <h3>Mekanisme Kerja</h3>
          <p>Buffer asam mempertahankan pH dengan Asam Lemah menetralkan OH- yang ditambahkan, dan Basa Konjugasi menetralkan H+ yang ditambahkan.</p>
          <h3>Perhitungan pH</h3>
          <p>Menggunakan rumus Henderson-Hasselbalch:</p>
          <div class="formula">
            pH = pKa + log ([Garam]/[Asam])<br>
            pOH = pKb + log ([Garam]/[Basa])
          </div>
        `
      },
      {
        semester: 2,
        title: "Titrasi",
        content: `
          <h3>Kurva Titrasi Detil</h3>
          <p>Analisis perubahan pH selama titrasi, termasuk:</p>
          <ul>
            <li>Titik Awal (pH larutan analit sebelum dititrasi).</li>
            <li>Daerah Buffer (terjadi saat titran ditambahkan sebagian pada asam/basa lemah).</li>
            <li>Titik Ekuivalen (pH ditentukan oleh sifat garam yang terbentuk).</li>
            <li>Titik Akhir Titrasi (pH di luar titik ekuivalen).</li>
          </ul>
          <h3>Indikator</h3>
          <p>Pemilihan indikator yang tepat yang memiliki trayek pH mendekati pH titik ekuivalen.</p>
        `
      },
      {
        semester: 2,
        title: "Koloid",
        content: `
          <h3>Pengelompokan</h3>
          <p>Koloid (partikel 1 nm - 100 nm) dibagi berdasarkan fase terdispersi dan pendispersi (Sol, Emulsi, Buih, Aerosol, dll.).</p>
          <h3>Sifat Listrik</h3>
          <p>Partikel koloid bermuatan listrik (penyebab stabil) dan dapat bergerak dalam medan listrik (Elektroforesis).</p>
          <h3>Koagulasi dan Dialisis</h3>
          <p>Koagulasi (penggumpalan) akibat penambahan elektrolit. Dialisis (pemurnian koloid) untuk menghilangkan ion-ion pengganggu.</p>
          <h3>Pembuatan Koloid</h3>
          <p>Metode Kondensasi (memperbesar partikel) dan Metode Dispersi (memperkecil partikel).</p>
        `
      }
    ],
    "Matematika": [
      {
        semester: 1,
        title: "Program Linear",
        content: `
          <h3>Model Matematika</h3>
          <p>Menerjemahkan masalah kontekstual (cerita) ke dalam sistem pertidaksamaan linear dua variabel.</p>
          <h3>Fungsi Objektif (Tujuan)</h3>
          <p>Menentukan fungsi yang akan dimaksimalkan (misal: keuntungan) atau diminimalkan (misal: biaya), biasanya berbentuk f(x, y) = ax + by.</p>
          <h3>Metode Uji Titik Pojok</h3>
          <p>Langkah-langkah:</p>
          <ol>
            <li>Menggambar daerah himpunan penyelesaian (DHP) dari sistem pertidaksamaan.</li>
            <li>Menentukan koordinat titik-titik pojok DHP.</li>
            <li>Mensubstitusikan koordinat titik pojok ke dalam fungsi objektif untuk menemukan nilai optimum (maksimum/minimum).</li>
          </ol>
        `
      },
      {
        semester: 1,
        title: "Matriks",
        content: `
          <h3>Pengertian dan Notasi</h3>
          <p>Susunan bilangan dalam baris dan kolom. Ordo matriks (jumlah baris x jumlah kolom).</p>
          <h3>Operasi Matriks</h3>
          <ul>
            <li>Penjumlahan & Pengurangan (syarat: ordo sama).</li>
            <li>Perkalian Skalar (konstanta dikali semua elemen).</li>
            <li>Perkalian Matriks (syarat: jumlah kolom matriks A = jumlah baris matriks B).</li>
          </ul>
          <h3>Determinan dan Invers</h3>
          <ul>
            <li>Determinan Matriks 2x2: det(A) = ad - bc.</li>
            <li>Determinan Matriks 3x3 (Metode Sarrus).</li>
            <li>Invers Matriks 2x2: A⁻¹ = [1 / det(A)] * [d, -b; -c, a].</li>
          </ul>
          <h3>Aplikasi</h3>
          <p>Menyelesaikan Sistem Persamaan Linear (SPL) menggunakan metode invers matriks atau metode Cramer (determinan).</p>
        `
      },
      {
        semester: 1,
        title: "Transformasi Geometri",
        content: `
          <h3>Translasi (Pergeseran)</h3>
          <p>Memetakan titik/kurva dengan penambahan vektor translasi T(a,b).</p>
          <h3>Refleksi (Pencerminan)</h3>
          <p>Terhadap sumbu x, sumbu y, garis y=x, garis y=-x, titik pusat O(0,0), dan garis x=k atau y=k.</p>
          <h3>Rotasi (Perputaran)</h3>
          <p>Terhadap titik pusat O(0,0) atau P(a,b) dengan sudut θ.</p>
          <h3>Dilatasi (Perkalian)</h3>
          <p>Perubahan ukuran dengan faktor skala k terhadap pusat O(0,0) atau P(a,b).</p>
          <h3>Komposisi Transformasi & Notasi Matriks</h3>
          <p>Gabungan dua atau lebih transformasi, sering diselesaikan dengan perkalian matriks transformasi.</p>
        `
      },
      {
        semester: 1,
        title: "Trigonometri Lanjutan",
        content: `
          <h3>Rumus Jumlah dan Selisih Dua Sudut</h3>
          <div class="formula">
            sin(A ± B) = sinA cosB ± cosA sinB<br>
            cos(A ± B) = cosA cosB ∓ sinA sinB<br>
            tan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)
          </div>
          <h3>Rumus Sudut Ganda</h3>
          <div class="formula">
            sin(2A) = 2 sinA cosA<br>
            cos(2A) = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A
          </div>
          <h3>Rumus Perkalian, Penjumlahan, dan Pengurangan</h3>
          <p>Transformasi dari perkalian (2sinA cosB, ...) menjadi penjumlahan/pengurangan, dan sebaliknya (sinP + sinQ, ...).</p>
          <h3>Persamaan Trigonometri</h3>
          <p>Penyelesaian persamaan dasar (sin x = sin α, ...) dan bentuk a cos x + b sin x = c (diubah ke k cos(x - α)).</p>
        `
      },
      {
        semester: 2,
        title: "Limit",
        content: `
          <h3>Konsep Limit Aljabar</h3>
          <p>Pendekatan nilai fungsi dari sisi kiri dan sisi kanan pada suatu titik c.</p>
          <h3>Limit Mendekati Titik (x → c)</h3>
          <ul>
            <li>Metode Substitusi Langsung.</li>
            <li>Metode Pemfaktoran (untuk bentuk tak tentu 0/0).</li>
            <li>Metode Perkalian Sekawan (untuk bentuk akar).</li>
          </ul>
          <h3>Limit Mendekati Tak Hingga (x → ∞)</h3>
          <ul>
            <li>Metode Pembagian Pangkat Tertinggi.</li>
            <li>Metode Perkalian Sekawan (untuk bentuk akar).</li>
          </ul>
          <h3>Limit Fungsi Trigonometri</h3>
          <p>Menggunakan sifat dasar, terutama untuk x → 0:</p>
          <div class="formula">
            lim (sin ax / bx) = a/b<br>
            lim (tan ax / bx) = a/b
          </div>
        `
      },
      {
        semester: 2,
        title: "Turunan",
        content: `
          <h3>Definisi Turunan (Diferensial)</h3>
          <p>Turunan sebagai limit laju perubahan rata-rata:</p>
          <div class="formula">f'(x) = lim (h→0) [f(x+h) - f(x)] / h</div>
          <h3>Aturan Dasar Turunan</h3>
          <p>Turunan fungsi pangkat (y = ax^n → y' = anx^(n-1)), perkalian (u'v + uv'), dan pembagian ((u'v - uv') / v²).</p>
          <h3>Aturan Rantai</h3>
          <p>Menentukan turunan fungsi komposisi, y=f(g(x)) → dy/dx = (dy/du) * (du/dx).</p>
          <h3>Turunan Fungsi Trigonometri</h3>
          <p>Turunan dasar (sin x → cos x, cos x → -sin x, tan x → sec²x, dll.).</p>
        `
      },
      {
        semester: 2,
        title: "Aplikasi Turunan",
        content: `
          <h3>Gradien dan Persamaan Garis Singgung</h3>
          <p>Gradien (m) garis singgung kurva y = f(x) di titik (x₁, y₁) adalah m = f'(x₁).</p>
          <h3>Fungsi Naik dan Turun</h3>
          <ul>
            <li>Fungsi naik jika f'(x) > 0.</li>
            <li>Fungsi turun jika f'(x) < 0.</li>
            <li>Titik stasioner jika f'(x) = 0.</li>
          </ul>
          <h3>Nilai Maksimum dan Minimum</h3>
          <p>Menentukan nilai ekstrem (maksimum/minimum) pada suatu interval atau nilai stasioner (menggunakan uji turunan pertama atau kedua).</p>
          <h3>Titik Belok</h3>
          <p>Terjadi perubahan kecekungan kurva, ditentukan saat f''(x) = 0.</p>
        `
      },
      {
        semester: 2,
        title: "Integral",
        content: `
          <h3>Integral Tak Tentu (Anti-turunan)</h3>
          <p>Proses kebalikan dari turunan. Jika f'(x) = g(x), maka ∫g(x) dx = f(x) + C (C adalah konstanta integrasi).</p>
          <div class="formula">∫ax^n dx = [a / (n+1)] * x^(n+1) + C</div>
          <h3>Integral Tentu</h3>
          <p>Integral yang memiliki batas atas (b) dan batas bawah (a). Digunakan untuk menghitung luas.</p>
          <div class="formula">∫[a, b] f(x) dx = [F(b)] - [F(a)]</div>
          <h3>Aplikasi Integral</h3>
          <ul>
            <li>Menghitung Luas Daerah (di bawah kurva, di antara dua kurva).</li>
            <li>Menghitung Volume Benda Putar (diputar mengelilingi sumbu x atau y).</li>
          </ul>
        `
      }
    ],
    "Fisika": [
      {
        semester: 1,
        title: "Dinamika Rotasi",
        content: `
          <h3>Momen Gaya (Torsi, τ)</h3>
          <p>Kemampuan gaya untuk memutar benda. τ = r * F * sin(θ).</p>
          <h3>Momen Inersia (I)</h3>
          <p>Ukuran kelembaman benda terhadap gerak rotasi. I = Σ(m * r²) untuk partikel.</p>
          <h3>Hukum II Newton untuk Rotasi</h3>
          <div class="formula">Στ = I * α</div>
          <h3>Energi dan Momentum Sudut</h3>
          <p>Energi Kinetik Rotasi: E_k,rot = ½ * I * ω².</p>
          <p>Hukum Kekekalan Momentum Sudut: L = I * ω (berlaku jika torsi total eksternal nol).</p>
        `
      },
      {
        semester: 1,
        title: "Kesetimbangan Benda Tegar",
        content: `
          <h3>Syarat Kesetimbangan</h3>
          <p>Benda dianggap setimbang jika memenuhi dua syarat:</p>
          <ul>
            <li>Kesetimbangan Translasi: ΣF_x = 0 dan ΣF_y = 0.</li>
            <li>Kesetimbangan Rotasi: Στ = 0 (terhadap sembarang titik).</li>
          </ul>
          <h3>Penerapan</h3>
          <p>Analisis gaya-gaya pada struktur seperti tangga yang bersandar, balok di atas dua penyangga, atau sistem katrol.</p>
          <h3>Titik Berat</h3>
          <p>Penentuan titik aplikasi gaya berat total benda.</p>
        `
      },
      {
        semester: 1,
        title: "Elastisitas",
        content: `
          <h3>Tegangan (Stress, σ)</h3>
          <div class="formula">σ = F / A</div>
          <h3>Regangan (Strain, e)</h3>
          <div class="formula">e = ΔL / L₀</div>
          <h3>Modulus Young (E)</h3>
          <div class="formula">E = σ / e</div>
          <h3>Hukum Hooke</h3>
          <p>Hubungan linear antara gaya dan pertambahan panjang dalam batas elastis:</p>
          <div class="formula">F = k * Δx</div>
          <h3>Energi Potensial Pegas</h3>
          <div class="formula">Ep = ½ * k * x²</div>
          <h3>Rangkaian Pegas</h3>
          <p>Perhitungan konstanta pegas total untuk rangkaian seri dan paralel.</p>
        `
      },
      {
        semester: 1,
        title: "Getaran Harmonis",
        content: `
          <h3>Karakteristik GHS</h3>
          <p>Gerak bolak-balik yang simpangannya merupakan fungsi sinusoidal terhadap waktu (Bandul dan pegas).</p>
          <h3>Persamaan Gerak</h3>
          <div class="formula">
            y = A sin(ωt + φ₀)<br>
            v = ωA cos(ωt + φ₀)<br>
            a = -ω²y
          </div>
          <p>Percepatan selalu berbanding lurus dan berlawanan arah dengan simpangan.</p>
          <h3>Periode dan Frekuensi</h3>
          <ul>
            <li>Pegas: T = 2π √(m/k)</li>
            <li>Bandul: T = 2π √(L/g)</li>
          </ul>
          <h3>Energi GHS</h3>
          <p>Hukum kekekalan energi, E_total = E_k + E_p = konstan.</p>
        `
      },
      {
        semester: 2,
        title: "Gelombang Mekanik",
        content: `
          <h3>Klasifikasi Gelombang</h3>
          <p>Transversal (arah getar tegak lurus rambatan) dan Longitudinal (arah getar sejajar rambatan).</p>
          <h3>Persamaan Gelombang Berjalan</h3>
          <div class="formula">y = ±A sin(ωt ± kx)</div>
          <h3>Cepat Rambat</h3>
          <p>v = λ * f</p>
          <h3>Gelombang Stasioner (Berdiri)</h3>
          <p>Hasil superposisi gelombang datang dan pantul. Penentuan letak simpul (amplitudo nol) dan perut (amplitudo maksimum) pada ujung terikat dan ujung bebas.</p>
        `
      },
      {
        semester: 2,
        title: "Bunyi",
        content: `
          <h3>Intensitas dan Taraf Intensitas (TI)</h3>
          <p>I = P / A. TI diukur dalam desibel (dB):</p>
          <div class="formula">TI = 10 log (I / I₀)</div>
          <h3>Sumber Bunyi</h3>
          <p>Analisis frekuensi nada harmonik (nada dasar, nada atas) pada Dawai dan Pipa Organa (terbuka dan tertutup).</p>
          <h3>Efek Doppler</h3>
          <p>Perubahan frekuensi yang didengar (f_p) karena gerak relatif antara sumber (f_s) dan pendengar.</p>
          <div class="formula">f_p = [(v ± v_p) / (v ± v_s)] * f_s</div>
        `
      },
      {
        semester: 2,
        title: "Listrik Statis",
        content: `
          <h3>Gaya Coulomb</h3>
          <p>Gaya interaksi muatan titik (penjumlahan vektor gaya).</p>
          <h3>Medan Listrik (E)</h3>
          <p>Kuat medan listrik oleh muatan titik (menggunakan Hukum Gauss).</p>
          <h3>Potensial Listrik (V)</h3>
          <p>Energi potensial per satuan muatan. Beda potensial dan Usaha (W = q * ΔV).</p>
          <h3>Kapasitor</h3>
          <p>Komponen penyimpan energi. Kapasitas keping sejajar (C = κ * ε₀ * A / d). Rangkaian seri dan paralel. Energi yang tersimpan (W = ½ * C * V²).</p>
        `
      },
      {
        semester: 2,
        title: "Listrik Dinamis",
        content: `
          <h3>Hukum Ohm</h3>
          <div class="formula">V = I * R</div>
          <h3>Rangkaian Resistor</h3>
          <p>Perhitungan hambatan pengganti seri dan paralel.</p>
          <h3>Hukum Kirchhoff</h3>
          <ul>
            <li>Kirchhoff I (Arus): ΣI_masuk = ΣI_keluar.</li>
            <li>Kirchhoff II (Tegangan): ΣE + ΣIR = 0 (dalam loop tertutup).</li>
          </ul>
          <h3>Energi dan Daya Listrik</h3>
          <p>W = I² * R * t dan P = I² * R.</p>
        `
      },
      {
        semester: 2,
        title: "Medan Magnet",
        content: `
          <h3>Sumber Medan Magnet</h3>
          <p>Medan magnet di sekitar kawat lurus, kawat melingkar, solenoida, dan toroida (Hukum Ampere dan Kaidah Tangan Kanan).</p>
          <h3>Gaya Lorentz</h3>
          <ul>
            <li>Gaya pada kawat berarus: F = I * L * B * sin(θ).</li>
            <li>Gaya pada muatan bergerak: F = q * v * B * sin(θ).</li>
          </ul>
          <h3>Aplikasi</h3>
          <p>Prinsip dasar kerja Motor Listrik dan Spektrometer Massa.</p>
        `
      }
    ],
    "Ekonomi": [
      {
        semester: 1,
        title: "Pendapatan Nasional",
        content: `
          <h3>Konsep dan Komponen Utama</h3>
          <p>Analisis PDB (Produk Domestik Bruto) dan PNB (Produk Nasional Bruto).</p>
          <h3>Konsep Turunan</h3>
          <p>Perhitungan dari PDB hingga Pendapatan Disposibel (Disposable Income).</p>
          <h3>Metode Perhitungan PDB</h3>
          <ul>
            <li>Produksi: Menghitung nilai tambah (value added).</li>
            <li>Pengeluaran: PDB = C + I + G + (X - M).</li>
            <li>Pendapatan: Penjumlahan pendapatan (sewa, upah, bunga, laba).</li>
          </ul>
          <h3>PDB Nominal vs. Riil</h3>
          <p>Memahami penggunaan Deflator PDB untuk menghilangkan dampak inflasi.</p>
        `
      },
      {
        semester: 1,
        title: "Pertumbuhan Ekonomi",
        content: `
          <h3>Definisi Kuantitatif</h3>
          <p>Kenaikan output (PDB Riil) dari tahun ke tahun.</p>
          <h3>Teori Pertumbuhan</h3>
          <p>Pengenalan Teori Klasik (sumber daya alam) dan Teori Modern (modal, teknologi, modal manusia).</p>
          <h3>Faktor Penentu Pertumbuhan</h3>
          <p>Peningkatan kuantitas dan kualitas faktor produksi (tanah, tenaga kerja, modal, kewirausahaan).</p>
        `
      },
      {
        semester: 1,
        title: "Pembangunan Ekonomi",
        content: `
          <h3>Definisi Kualitatif</h3>
          <p>Proses peningkatan kesejahteraan yang mencakup perbaikan kualitas hidup, perubahan struktur ekonomi, dan distribusi pendapatan.</p>
          <h3>Perbedaan Fokus</h3>
          <p>Pertumbuhan (kenaikan output) vs. Pembangunan (transformasi dan kesejahteraan).</p>
          <h3>Masalah Pembangunan</h3>
          <p>Tantangan negara berkembang: kemiskinan, pengangguran, kesenjangan pendapatan.</p>
        `
      },
      {
        semester: 1,
        title: "Indikator Ekonomi",
        content: `
          <h3>Indeks Pembangunan Manusia (IPM/HDI)</h3>
          <p>Ukuran komprehensif dari: pendidikan, kesehatan (harapan hidup), dan standar hidup layak (PDB per kapita).</p>
          <h3>Inflasi</h3>
          <ul>
            <li>Jenis: Demand-Pull dan Cost-Push.</li>
            <li>Dampak: Menurunkan daya beli, mengganggu investasi.</li>
          </ul>
          <h3>Pengangguran</h3>
          <ul>
            <li>Jenis: Friksional, Siklis, Struktural, Musiman.</li>
            <li>Dampak: Kerugian PDB potensial, masalah sosial.</li>
          </ul>
        `
      },
      {
        semester: 2,
        title: "Kebijakan Fiskal & Moneter",
        content: `
          <h3>Kebijakan Fiskal (Pemerintah)</h3>
          <ul>
            <li>Instrumen: Pengaturan Pajak dan Belanja Pemerintah (subsidi, belanja modal).</li>
            <li>Tujuan: Mengatasi resesi (Ekspansif) atau mengendalikan inflasi (Kontraktif).</li>
          </ul>
          <h3>Kebijakan Moneter (Bank Sentral)</h3>
          <ul>
            <li>Instrumen Kuantitatif: Operasi Pasar Terbuka (Jual/beli surat berharga), Tingkat Diskonto (suku bunga acuan), Giro Wajib Minimum (rasio cadangan).</li>
            <li>Instrumen Kualitatif: Pengawasan kredit selektif.</li>
          </ul>
        `
      },
      {
        semester: 2,
        title: "Perdagangan Internasional",
        content: `
          <h3>Teori Keunggulan</h3>
          <ul>
            <li>Keunggulan Absolut (Adam Smith): Spesialisasi pada barang yang diproduksi lebih efisien.</li>
            <li>Keunggulan Komparatif (David Ricardo): Spesialisasi pada barang yang memiliki biaya peluang paling rendah.</li>
          </ul>
          <h3>Kebijakan Proteksi</h3>
          <p>Hambatan perdagangan: Tarif (pajak impor), Kuota (pembatasan volume), Subsidi, dan Larangan Impor.</p>
        `
      },
      {
        semester: 2,
        title: "Neraca Pembayaran",
        content: `
          <h3>Definisi dan Fungsi</h3>
          <p>Catatan semua transaksi ekonomi suatu negara dengan negara lain.</p>
          <h3>Struktur Utama</h3>
          <ul>
            <li>Neraca Transaksi Berjalan (Current Account): Ekspor/impor barang (Neraca Perdagangan), jasa, dan pendapatan.</li>
            <li>Neraca Modal dan Finansial: Aliran investasi langsung dan portofolio.</li>
          </ul>
          <h3>Keseimbangan dan Dampak</h3>
          <p>Analisis dampak Surplus dan Defisit terhadap stabilitas kurs mata uang (devisa).</p>
        `
      },
      {
        semester: 2,
        title: "APBN & APBD",
        content: `
          <h3>Anggaran Pendapatan dan Belanja Negara (APBN)</h3>
          <ul>
            <li>Sumber Pendapatan: Dominasi Pajak (PPh, PPN, PBB), PNBP, dan Hibah.</li>
            <li>Jenis Belanja: Belanja Pusat (rutin/operasional, pembangunan) dan Transfer ke Daerah.</li>
          </ul>
          <h3>Fungsi APBN/APBD</h3>
          <ul>
            <li>Fungsi Alokasi: Mengalokasikan dana untuk pembangunan.</li>
            <li>Fungsi Distribusi: Pemerataan pendapatan (subsidi).</li>
            <li>Fungsi Stabilisasi: Menjaga kestabilan ekonomi makro.</li>
          </ul>
          <h3>Defisit dan Pembiayaan</h3>
          <p>Kondisi defisit (Pengeluaran > Pendapatan) dan sumber pembiayaan defisit (utang, obligasi).</p>
        `
      }
    ]
  },
  "XII": {
    "Kimia": [
      {
        semester: 1,
        title: "Kimia Organik",
        content: `
          <h3>Kekhasan Atom Karbon</h3>
          <p>Kemampuan C membentuk empat ikatan kovalen (tetravalensi), membentuk rantai, cincin, dan ikatan rangkap/tiga.</p>
          <h3>Gugus Fungsi</h3>
          <p>Klasifikasi dan penamaan IUPAC/trivial untuk senyawa:</p>
          <ul>
            <li>Alkohol (-OH) dan Eter (-O-)</li>
            <li>Aldehid (-CHO) dan Keton (-CO-)</li>
            <li>Asam Karboksilat (-COOH) dan Ester (-COO-)</li>
          </ul>
          <h3>Isomerisme</h3>
          <p>Mempelajari isomer kerangka/rantai, posisi, gugus fungsi, dan geometri (cis-trans).</p>
        `
      },
      {
        semester: 1,
        title: "Reaksi Senyawa Karbon",
        content: `
          <h3>Jenis Reaksi</h3>
          <ul>
            <li>Substitusi: Penggantian atom/gugus (khas pada alkana).</li>
            <li>Adisi: Pemutusan ikatan rangkap (khas pada alkena/alkuna). Menggunakan Aturan Markovnikov (atom H dari HX masuk ke C yang H-nya lebih banyak).</li>
            <li>Eliminasi: Pembentukan ikatan rangkap (misal: eliminasi air dari alkohol).</li>
          </ul>
          <h3>Reaksi Oksidasi/Reduksi</h3>
          <p>Oksidasi Alkohol Primer → Aldehid → Asam Karboksilat. Oksidasi Alkohol Sekunder → Keton.</p>
          <p>Uji Tollens dan Fehling untuk membedakan Aldehid dan Keton.</p>
        `
      },
      {
        semester: 1,
        title: "Makromolekul",
        content: `
          <h3>Karbohidrat</h3>
          <p>Reaksi hidrolisis karbohidrat kompleks (disakarida/polisakarida) menjadi monosakarida. Struktur glukosa (rantai dan cincin). Fungsi amilum, glikogen, dan selulosa.</p>
          <h3>Protein</h3>
          <p>Pembentukan Ikatan Peptida dan Reaksi Biuret (uji protein). Klasifikasi asam amino esensial dan non-esensial.</p>
          <h3>Lemak (Lipid)</h3>
          <p>Reaksi Hidrogenasi minyak (lemak tak jenuh → lemak jenuh) dan Saponifikasi (hidrolisis lemak oleh basa menghasilkan sabun).</p>
        `
      },
      {
        semester: 1,
        title: "Polimer",
        content: `
          <h3>Klasifikasi Polimer</h3>
          <p>Berdasarkan sumber (alam/sintetis), sifat panas (termoplas/termoset), dan jenis monomer.</p>
          <h3>Reaksi Polimerisasi</h3>
          <ul>
            <li>Adisi: Penggabungan monomer alkena tanpa produk samping.</li>
            <li>Kondensasi: Penggabungan monomer bifungsional dengan melepaskan molekul kecil (H₂O atau HCl). Contoh: nilon, protein.</li>
          </ul>
        `
      },
      {
        semester: 2,
        title: "Kimia Inti",
        content: `
          <h3>Kestabilan Inti</h3>
          <p>Konsep Massa Defek (selisih massa inti dan massa penyusunnya). Defek massa diubah menjadi Energi Ikat Inti (E = Δm * c²) yang menentukan kestabilan.</p>
          <h3>Waktu Paruh (t ½)</h3>
          <p>Laju peluruhan radioaktif. Nt = N₀ * (½)^(t / t½).</p>
          <h3>Aplikasi</h3>
          <p>Penentuan umur fosil (C-14) dan penggunaan isotop di bidang kedokteran dan industri.</p>
        `
      },
      {
        semester: 2,
        title: "Elektrokimia",
        content: `
          <h3>Sel Volta (Galvani)</h3>
          <p>Deret Volta, Jembatan Garam, dan Notasi Sel. Perhitungan E°sel:</p>
          <div class="formula">E°sel = E°katoda - E°anoda</div>
          <h3>Persamaan Nernst</h3>
          <p>Perhitungan potensial sel pada kondisi tidak standar.</p>
          <h3>Sel Elektrolisis</h3>
          <p>Analisis reaksi Anoda dan Katoda (air bersaing dengan ion, elektroda inert/aktif).</p>
          <h3>Hukum Faraday I dan II</h3>
          <p>Perhitungan massa zat yang dibebaskan pada elektroda berdasarkan muatan listrik (Q=I*t) yang dialirkan.</p>
        `
      },
      {
        semester: 2,
        title: "Termodinamika",
        content: `
          <h3>Hukum I Termodinamika</h3>
          <p>Kekekalan energi (ΔU = Q - W). Tanda konvensi kerja (W positif jika sistem melakukan kerja).</p>
          <h3>Hukum II Termodinamika</h3>
          <p>Konsep Entropi (ΔS). Proses spontan terjadi jika ΔS_semesta > 0.</p>
          <h3>Energi Bebas Gibbs (ΔG)</h3>
          <p>Kriteria Kespontanan: ΔG = ΔH - TΔS. Analisis spontanitas pada suhu tinggi/rendah.</p>
        `
      },
      {
        semester: 2,
        title: "Kimia Lingkungan",
        content: `
          <h3>Kualitas Air</h3>
          <p>Parameter DO (Dissolved Oxygen), BOD (Biochemical Oxygen Demand), dan COD (Chemical Oxygen Demand) sebagai indikator pencemaran organik.</p>
          <h3>Dampak Pencemaran Udara</h3>
          <p>Mekanisme pembentukan Hujan Asam dan efek Rumah Kaca global.</p>
          <h3>Kimia Hijau (Green Chemistry)</h3>
          <p>12 Prinsip Kimia Hijau yang fokus pada pencegahan limbah, penghematan energi, dan penggunaan katalis yang aman.</p>
        `
      }
    ],
    "Matematika": [
      {
        semester: 1,
        title: "Statistika",
        content: `
          <h3>Penyajian Data Kelompok</h3>
          <p>Distribusi frekuensi, penentuan tepi kelas, dan titik tengah.</p>
          <h3>Ukuran Pemusatan</h3>
          <p>Perhitungan Mean (rata-rata sementara), Median, dan Modus data kelompok.</p>
          <div class="formula">
            Median: Me = L₀ + c * [(½n - f_kum) / f]<br>
            Modus: Mo = L₀ + c * [d₁ / (d₁ + d₂)]
          </div>
          <h3>Ukuran Penyebaran</h3>
          <p>Perhitungan Simpangan Rata-rata dan Simpangan Baku (Standard Deviation) untuk data kelompok.</p>
        `
      },
      {
        semester: 1,
        title: "Peluang",
        content: `
          <h3>Kaidah Pencacahan Lanjutan</h3>
          <p>Permutasi dengan unsur yang sama, Permutasi Siklis, dan Kombinasi.</p>
          <h3>Peluang Bersyarat</h3>
          <p>Pendalaman Teorema Bayes (probabilitas terbalik).</p>
          <h3>Distribusi Peluang Diskrit</h3>
          <p>Memahami ciri-ciri dan perhitungan peluang menggunakan Distribusi Binomial (Peluang x sukses dari n percobaan).</p>
          <h3>Distribusi Peluang Kontinu</h3>
          <p>Pengenalan Distribusi Normal, penggunaan tabel Z-Score untuk menghitung probabilitas.</p>
        `
      },
      {
        semester: 1,
        title: "Barisan & Deret",
        content: `
          <h3>Deret Tak Hingga</h3>
          <p>Perhitungan jumlah tak hingga dengan rasio positif dan negatif. Aplikasi pada masalah geometri (luas/keliling).</p>
          <h3>Notasi Sigma (Σ)</h3>
          <p>Penggunaan Σ untuk menyatakan deret dan sifat-sifatnya.</p>
        `
      },
      {
        semester: 1,
        title: "Vektor 3D",
        content: `
          <h3>Vektor Ortogonal</h3>
          <p>Syarat dua vektor saling tegak lurus: a · b = 0.</p>
          <h3>Proyeksi Vektor</h3>
          <ul>
            <li>Proyeksi Skalar Ortogonal: Panjang proyeksi vektor a pada b.</li>
            <li>Proyeksi Vektor Ortogonal: Vektor hasil proyeksi a pada b.</li>
          </ul>
          <h3>Perkalian Silang (Cross Product)</h3>
          <p>Operasi a × b dan hasilnya adalah vektor yang tegak lurus terhadap a dan b.</p>
        `
      },
      {
        semester: 2,
        title: "Kalkulus Lanjut",
        content: `
          <h3>Turunan Implisit</h3>
          <p>Penurunan fungsi yang tidak dapat dipisahkan secara eksplisit y = f(x) (misalnya x² + y² = r²).</p>
          <h3>Turunan Fungsi Parametrik</h3>
          <p>Turunan dy/dx dari fungsi yang dinyatakan oleh parameter ketiga t.</p>
          <h3>Uji Turunan Kedua untuk Titik Belok</h3>
          <p>Penentuan interval kecekungan (atas/bawah) grafik fungsi.</p>
        `
      },
      {
        semester: 2,
        title: "Integral Lanjut",
        content: `
          <h3>Teknik Integral Parsial</h3>
          <p>Rumus ∫u dv = uv - ∫v du (metode Tabel untuk integral berulang).</p>
          <h3>Integral Substitusi Trigonometri</h3>
          <p>Mengubah variabel integrasi menggunakan identitas trigonometri (misalnya, untuk menghilangkan bentuk √(a² - x²)).</p>
          <h3>Aplikasi Integral</h3>
          <p>Menghitung Luas Daerah antara kurva dan Volume Benda Putar (metode kulit tabung).</p>
        `
      },
      {
        semester: 2,
        title: "Aplikasi Statistika",
        content: `
          <h3>Regresi Linear Sederhana</h3>
          <p>Menentukan persamaan garis regresi Y = a + bX yang memodelkan hubungan linear antar variabel.</p>
          <h3>Koefisien Korelasi (r)</h3>
          <p>Mengukur kekuatan dan arah hubungan linear antar variabel.</p>
        `
      },
      {
        semester: 2,
        title: "Persamaan Diferensial Dasar",
        content: `
          <h3>Definisi</h3>
          <p>Memahami orde dan derajat PD.</p>
          <h3>Penyelesaian PD Orde-1</h3>
          <p>Metode pemisahan variabel dy/dx = f(x)g(y).</p>
          <h3>Aplikasi</h3>
          <p>Pemodelan pertumbuhan/peluruhan (misalnya peluruhan radioaktif) dan laju pendinginan.</p>
        `
      }
    ],
    "Fisika": [
      {
        semester: 1,
        title: "Induksi Elektromagnetik",
        content: `
          <h3>GGL Induksi pada Kawat Bergerak</h3>
          <p>GGL = B * L * v * sin(θ).</p>
          <h3>Induktansi Diri dan Silang</h3>
          <p>Konsep Induktor (kumparan) dan energi yang tersimpan di dalamnya (W = ½ * L * I²).</p>
          <h3>Rangkaian Arus Bolak-balik (AC)</h3>
          <ul>
            <li>Nilai Efektif dan Maksimum (V_ef = V_maks / √2).</li>
            <li>Rangkaian RLC: Konsep Reaktansi Induktif (X_L), Reaktansi Kapasitif (X_C), Impedansi (Z), dan Resonansi (X_L = X_C).</li>
          </ul>
        `
      },
      {
        semester: 1,
        title: "Gelombang Elektromagnetik",
        content: `
          <h3>Persamaan Maxwell</h3>
          <p>Empat persamaan fundamental yang menjelaskan semua fenomena listrik dan magnetisme (sebagai konsep pengantar).</p>
          <h3>Energi dan Intensitas GEM</h3>
          <p>Energi yang dibawa oleh GEM proporsional dengan kuadrat amplitudo medan listrik dan magnet.</p>
        `
      },
      {
        semester: 1,
        title: "Optik Geometri",
        content: `
          <h3>Rumus Umum Lensa/Cermin</h3>
          <div class="formula">1/f = 1/s + 1/s'</div>
          <p>Pembesaran M = |h'/h| = |s'/s|.</p>
          <h3>Akomodasi Mata</h3>
          <p>Titik dekat (PP) dan Titik Jauh (PR). Perhitungan kekuatan lensa kacamata.</p>
          <h3>Mikroskop</h3>
          <p>Perhitungan pembesaran total pada mikroskop (objektif dan okuler).</p>
        `
      },
      {
        semester: 1,
        title: "Optik Fisis",
        content: `
          <h3>Interferensi</h3>
          <ul>
            <li>Celah Ganda Young: (y * d / L) = mλ (terang) atau (m-½)λ (gelap).</li>
            <li>Lapisan Tipis: Persyaratan tebal minimum film tipis.</li>
          </ul>
          <h3>Difraksi</h3>
          <p>Kisi Difraksi: d * sin(θ) = mλ.</p>
          <h3>Polarisasi</h3>
          <p>Polarisasi karena pemantulan (Sudut Brewster) dan penggunaan polarisator-analisator.</p>
        `
      },
      {
        semester: 2,
        title: "Fisika Kuantum Dasar",
        content: `
          <h3>Teori Atom Bohr</h3>
          <p>Postulat Bohr (orbit stasioner, transisi energi), dan perhitungan energi, jari-jari, dan panjang gelombang Lyman, Balmer, dll.</p>
          <h3>Efek Compton</h3>
          <p>Perubahan panjang gelombang foton setelah menumbuk elektron (konfirmasi sifat partikel foton).</p>
          <h3>Prinsip Ketidakpastian Heisenberg</h3>
          <p>Tidak mungkin menentukan posisi dan momentum partikel secara bersamaan dengan akurasi penuh.</p>
        `
      },
      {
        semester: 2,
        title: "Relativitas",
        content: `
          <h3>Transformasi Lorentz</h3>
          <p>Persamaan yang menggantikan transformasi Galileo pada kecepatan tinggi.</p>
          <h3>Bukti Empiris Relativitas</h3>
          <p>Pengamatan muon di atmosfer bumi (dilasi waktu teramati).</p>
          <h3>Massa dan Energi Relativistik</h3>
          <p>Hubungan antara energi total (E), energi kinetik (Ek), dan energi diam (E₀ = m₀ * c²).</p>
        `
      },
      {
        semester: 2,
        title: "Fisika Inti",
        content: `
          <h3>Reaksi Inti Lanjutan</h3>
          <p>Analisis energi yang dilepaskan pada reaksi Fusi (matahari) dan Fisi (reaktor nuklir).</p>
          <h3>Peluruhan Berantai</h3>
          <p>Proses pembelahan yang berkelanjutan (reaktor dan bom atom).</p>
        `
      },
      {
        semester: 2,
        title: "Astrofisika Dasar",
        content: `
          <h3>Hukum Gravitasi Newton (Tinjauan Ulang)</h3>
          <p>Penerapan pada sistem tata surya.</p>
          <h3>Hukum Kepler</h3>
          <p>Hukum I, II, dan III tentang orbit planet.</p>
          <h3>Klasifikasi Bintang</h3>
          <p>Diagram Hertzsprung-Russell (HR) untuk mengklasifikasikan bintang berdasarkan luminositas dan suhu.</p>
        `
      }
    ],
    "Ekonomi": [
      {
        semester: 1,
        title: "Manajemen",
        content: `
          <h3>Fungsi Manajemen (POAC)</h3>
          <p>Planning, Organizing, Actuating (Directing), dan Controlling.</p>
          <h3>Tingkatan Manajemen</h3>
          <p>Manajemen Puncak (Top), Menengah (Middle), dan Lini Pertama (First-line).</p>
          <h3>Bidang Manajemen</h3>
          <p>Pendalaman Manajemen Pemasaran (Marketing Mix 4P/7P), Produksi (Efisiensi), Keuangan (Sumber & Penggunaan Dana), dan SDM (Rekrutmen & Pengembangan).</p>
        `
      },
      {
        semester: 1,
        title: "Kewirausahaan",
        content: `
          <h3>Karakteristik Wirausahawan</h3>
          <p>Inovatif, kreatif, berani mengambil risiko, berorientasi pada hasil.</p>
          <h3>Peran Wirausaha</h3>
          <p>Menciptakan lapangan kerja, mendorong inovasi, dan meningkatkan PDB.</p>
          <h3>Studi Kelayakan Bisnis</h3>
          <p>Analisis awal untuk menilai kelayakan ide bisnis (Aspek Pasar, Teknis, Finansial, dan Hukum).</p>
        `
      },
      {
        semester: 1,
        title: "Pasar Modal",
        content: `
          <h3>Instrumen Pasar Modal</h3>
          <p>Saham (bukti kepemilikan), Obligasi (surat utang), dan Reksadana (wadah investasi kolektif).</p>
          <h3>Mekanisme Perdagangan</h3>
          <p>Proses jual beli efek di Bursa Efek Indonesia (BEI) melalui perusahaan sekuritas.</p>
          <h3>Lembaga Penunjang</h3>
          <p>OJK (pengawas), KPEI (penjamin), KSEI (penyimpanan).</p>
        `
      },
      {
        semester: 1,
        title: "Akuntansi Dasar",
        content: `
          <h3>Siklus Akuntansi Jasa</h3>
          <p>Tahapan lengkap mulai dari Analisis Bukti Transaksi, Jurnal Umum, Posting ke Buku Besar, Neraca Saldo, Jurnal Penyesuaian (AJP), Kertas Kerja, hingga Laporan Keuangan.</p>
          <h3>Laporan Keuangan</h3>
          <p>Penyusunan Laporan Laba/Rugi, Laporan Perubahan Modal, dan Neraca.</p>
        `
      },
      {
        semester: 2,
        title: "Perpajakan",
        content: `
          <h3>Dasar-dasar Perpajakan</h3>
          <p>Fungsi pajak (Budgetair, Regulerend), Jenis pajak (Pusat/Daerah, Langsung/Tidak Langsung), dan Asas pemungutan.</p>
          <h3>Perhitungan Pajak Sederhana</h3>
          <p>Simulasi perhitungan PPh (Pajak Penghasilan) Wajib Pajak Orang Pribadi dan PPN (Pajak Pertambahan Nilai).</p>
        `
      },
      {
        semester: 2,
        title: "Ekonomi Internasional Lanjutan",
        content: `
          <h3>Sistem Kurs Mata Uang</h3>
          <p>Kurs Tetap (Fixed), Kurs Mengambang Bebas (Floating), dan Kurs Mengambang Terkendali (Managed Floating).</p>
          <h3>Devisa</h3>
          <p>Sumber-sumber devisa (ekspor, pariwisata, pinjaman) dan penggunaannya (impor, bayar utang).</p>
        `
      },
      {
        semester: 2,
        title: "UMKM",
        content: `
          <h3>Definisi dan Kriteria UMKM</h3>
          <p>Klasifikasi usaha berdasarkan aset dan omzet (Mikro, Kecil, Menengah).</p>
          <h3>Peran dalam Perekonomian</h3>
          <p>Penyerapan tenaga kerja yang tinggi, kontribusi terhadap PDB, dan pemerataan pendapatan.</p>
          <h3>Tantangan UMKM</h3>
          <p>Keterbatasan modal, pemasaran, teknologi, dan legalitas.</p>
        `
      },
      {
        semester: 2,
        title: "Perekonomian Indonesia",
        content: `
          <h3>Struktur Ekonomi Indonesia</h3>
          <p>Analisis kontribusi sektor Primer (Agraris), Sekunder (Industri), dan Tersier (Jasa) terhadap PDB.</p>
          <h3>Tantangan Ekonomi Makro</h3>
          <p>Isu-isu terkini seperti inflasi, pengangguran, kesenjangan pendapatan (Gini Ratio), dan utang pemerintah.</p>
        `
      }
    ]
  }
};


/* ==================================================
   STRUKTUR DATA KALKULATOR (ASLI DARI FILE ANDA)
   
   ================================================== */
const SUBJECTS = {
  matematika: [
    // Bangun Datar
    { id: "md_lingkaran", title:"Luas & Keliling Lingkaran", desc:"L = π × r²  •  K = 2πr (satuan: cm) — pilih π: 3.14 atau 22/7", template: `
        <div class="form-row">
          <select id="phi_md_lingkaran"><option value="3.14">π = 3.14</option><option value="22/7">π = 22/7</option></select>
          <input id="r_md_lingkaran" type="number" placeholder="Jari-jari r (cm)">
        </div>
        <div class="btn-row"><button class="btn" data-calc="md_lingkaran">Hitung</button></div>
        <div class="result-box" id="res-md_lingkaran"></div>
    `},
    { id:"md_segitiga", title:"Luas & Keliling Segitiga", desc:"L = ½ × alas × tinggi (cm²)  •  K = a+b+c (cm)", template: `
        <div class="form-row"><input id="alas_md_segitiga" type="number" placeholder="Alas (cm)"><input id="tinggi_md_segitiga" type="number" placeholder="Tinggi (cm)"></div>
        <div class="form-row"><input id="a_md_seg" placeholder="Sisi a (cm)"><input id="b_md_seg" placeholder="Sisi b (cm)"><input id="c_md_seg" placeholder="Sisi c (cm)"></div>
        <div class="btn-row"><button class="btn" data-calc="md_segitiga">Hitung</button></div>
        <div class="result-box" id="res-md_segitiga"></div>
    `},
    { id:"md_persegi", title:"Persegi - Luas & Keliling", desc:"L = s² ; K = 4s (satuan: cm)", template: `
        <div class="form-row"><input id="s_md_persegi" placeholder="Sisi s (cm)"></div>
        <div class="btn-row"><button class="btn" data-calc="md_persegi">Hitung</button></div>
        <div class="result-box" id="res-md_persegi"></div>
    `},
    { id:"md_persegipanjang", title:"Persegi Panjang", desc:"L = p × l ; K = 2(p + l) (cm)", template: `
        <div class="form-row"><input id="p_md_pp" placeholder="Panjang p (cm)"><input id="l_md_pp" placeholder="Lebar l (cm)"></div>
        <div class="btn-row"><button class="btn" data-calc="md_persegipanjang">Hitung</button></div>
        <div class="result-box" id="res-md_persegipanjang"></div>
    `},
    // Trigonometri & Identitas
    { id:"md_trig_ref", title:"Perbandingan & Identitas Trigonometri", desc:"Sin, Cos, Tan dan identitas penting", template: `
        <div class="desc">
          <p><b>sin α</b> = de/mi • <b>cos α</b> = sa/mi • <b>tan α</b> = de/sa</p>
          <p><b>Identitas:</b> cos²θ + sin²θ = 1 ; tanθ = sinθ / cosθ</p>
        </div>
    `},
    // SPLTV (Sistem Persamaan Linear Tiga Variabel) - we'll implement 2x2 and 3x3 basic
    { id:"md_spltv_2x2", title:"SPL 2x2 (Sistem 2 Persamaan 2 Variabel)", desc:"Selesaikan ax + by = e dan cx + dy = f", template: `
        <div class="form-row"><input id="a_s1" placeholder="a"><input id="b_s1" placeholder="b"><input id="e_s1" placeholder="e"></div>
        <div class="form-row"><input id="c_s2" placeholder="c"><input id="d_s2" placeholder="d"><input id="f_s2" placeholder="f"></div>
        <div class="btn-row"><button class="btn" data-calc="md_spltv_2x2">Hitung</button></div>
        <div class="result-box" id="res-md_spltv_2x2"></div>
    `},
    // Polinomial quadratic (akar)
    { id:"md_polinomial", title:"Polinomial: Akar Persamaan Kuadrat", desc:"ax² + bx + c = 0 → rumus ABC", template: `
        <div class="form-row"><input id="a_quad" placeholder="a"><input id="b_quad" placeholder="b"><input id="c_quad" placeholder="c"></div>
        <div class="btn-row"><button class="btn" data-calc="md_polinomial">Hitung</button></div>
        <div class="result-box" id="res-md_polinomial"></div>
    `},
    // Bangun ruang: Kubus dan Tabung contoh (π pilihan)
    { id:"md_kubus", title:"Bangun Ruang: Kubus", desc:"V = s³ ; L = 6s² (satuan: cm)", template: `
        <div class="form-row"><input id="s_kubus" placeholder="Sisi s (cm)"></div>
        <div class="btn-row"><button class="btn" data-calc="md_kubus">Hitung</button></div>
        <div class="result-box" id="res-md_kubus"></div>
    `},
    { id:"md_tabung", title:"Tabung (Silinder)", desc:"V = π r² t ; L = 2πr(r+t) (satuan: cm)", template: `
        <div class="form-row"><select id="phi_tabung"><option value="3.14">π = 3.14</option><option value="22/7">π = 22/7</option></select><input id="r_tabung_md" placeholder="r (cm)"><input id="t_tabung_md" placeholder="t (cm)"></div>
        <div class="btn-row"><button class="btn" data-calc="md_tabung">Hitung</button></div>
        <div class="result-box" id="res-md_tabung"></div>
    `},
  ],
  fisika: [
    { id:"f_glbb", title:"GLBB", desc:"v = v₀ + a·t  •  s = v₀t + ½ a t² (satuan: m, m/s, s)", template: `
        <div class="form-row"><input id="v0_glbb" placeholder="v₀ (m/s)"><input id="a_glbb" placeholder="a (m/s²)"><input id="t_glbb" placeholder="t (s)"></div>
        <div class="btn-row"><button class="btn" data-calc="f_glbb">Hitung</button></div>
        <div class="result-box" id="res-f_glbb"></div>
    `},
    { id:"f_kecepatan_jatuh", title:"Gerak Jatuh Bebas", desc:"v = g t ; s = ½ g t² (g = 9.8 m/s²)", template: `
        <div class="form-row"><input id="t_jatuh" placeholder="t (s)"></div>
        <div class="btn-row"><button class="btn" data-calc="f_kecepatan_jatuh">Hitung</button></div>
        <div class="result-box" id="res-f_kecepatan_jatuh"></div>
    `},
    { id:"f_ohm", title:"Hukum Ohm", desc:"V = I R (V, A, Ω)", template: `
        <div class="form-row"><input id="v_ohm2" placeholder="Tegangan V (V)"><input id="i_ohm2" placeholder="Arus I (A)"><input id="r_ohm2" placeholder="Hambatan R (Ω)"></div>
        <div class="desc" style="font-size:0.85rem;color:#4a3f2f;margin-top:6px;">Isi dua nilai untuk mencari yang ketiga</div>
        <div class="btn-row"><button class="btn" data-calc="f_ohm">Hitung</button></div>
        <div class="result-box" id="res-f_ohm"></div>
    `},
    { id:"f_energi", title:"Energi Kinetik & Potensial", desc:"Ek = ½ m v² ; Ep = m g h (kg, m, J)", template: `
        <div class="form-row"><input id="m_en" placeholder="Massa m (kg)"><input id="v_en2" placeholder="Kecepatan v (m/s)"><input id="h_en2" placeholder="Tinggi h (m)"></div>
        <div class="btn-row"><button class="btn" data-calc="f_energi">Hitung</button></div>
        <div class="result-box" id="res-f_energi"></div>
    `},
  ],
  kimia: [
    { id:"k_mol", title:"Menghitung Mol", desc:"Mol = massa / Ar atau massa / Mr (satuan: gram, g/mol)", template: `
        <div class="form-row"><input id="massa_k" placeholder="Massa (gram)"><input id="armr_k" placeholder="Ar atau Mr (g/mol)"></div>
        <div class="btn-row"><button class="btn" data-calc="k_mol">Hitung</button></div>
        <div class="result-box" id="res-k_mol"></div>
    `},
    { id:"k_ideal", title:"Persamaan Gas Ideal (P·V = n·R·T)", desc:"P (atm), V (L), n (mol), T (°C)", template: `
        <div class="form-row"><input id="p_g" placeholder="P (atm)"><input id="v_g" placeholder="V (L)"></div>
        <div class="form-row"><input id="n_g" placeholder="n (mol)"><input id="t_g" placeholder="T (°C)"></div>
        <div class="desc" style="font-size:0.85rem;color:#4a3f2f;margin-top:6px;">Isi 3 nilai untuk mencari yang satu</div>
        <div class="btn-row"><button class="btn" data-calc="k_ideal">Hitung</button></div>
        <div class="result-box" id="res-k_ideal"></div>
    `},
  ],
  ekonomi: [
    { id:"e_fungsi", title:"Fungsi Permintaan & Penawaran (Garis)", desc:"(P-P1)/(P2-P1) = (Q-Q1)/(Q2-Q1) — Temukan bentuk P = m·Q + c", template: `
        <div class="form-row"><input id="p1_e" placeholder="P1 (harga)"><input id="q1_e" placeholder="Q1 (kuantitas)"></div>
        <div class="form-row"><input id="p2_e" placeholder="P2 (harga)"><input id="q2_e" placeholder="Q2 (kuantitas)"></div>
        <div class="btn-row"><button class="btn" data-calc="e_fungsi">Hitung</button></div>
        <div class="result-box" id="res-e_fungsi"></div>
    `},
    { id:"e_elastisitas", title:"Elastisitas Permintaan (Ed)", desc:"Ed = (ΔQ/ΔP) × (P1/Q1) atau %ΔQ/%ΔP × (P1/Q1)", template: `
        <div class="form-row"><input id="q1_el" placeholder="Q1 (awal)"><input id="q2_el" placeholder="Q2 (akhir)"></div>
        <div class="form-row"><input id="p1_el2" placeholder="P1 (awal)"><input id="p2_el2" placeholder="P2 (akhir)"></div>
        <div class="btn-row"><button class="btn" data-calc="e_elastisitas">Hitung</button></div>
        <div class="result-box" id="res-e_elastisitas"></div>
    `},
    { id:"e_pendapatan", title:"Pendapatan Nasional (GNP → DI)", desc:"GNP = GDP + Pendapatan Netto LN ... DI akhir", template: `
        <div class="form-row"><input id="gdp_e" placeholder="GDP (Rp)"><input id="netto_ln_e" placeholder="Pendapatan Netto Luar Negeri (Rp)"></div>
        <div class="form-row"><input id="depresiasi_e" placeholder="Depresiasi (Rp)"><input id="pajak_tl_e" placeholder="Pajak Tidak Langsung (Rp)"></div>
        <div class="form-row"><input id="transfer_e" placeholder="Transfer Payment (Rp)"><input id="iuran_e" placeholder="Iuran Sosial (Rp)"></div>
        <div class="form-row"><input id="pajak_l_e" placeholder="Pajak Langsung (Rp)"></div>
        <div class="btn-row"><button class="btn" data-calc="e_pendapatan">Hitung</button></div>
        <div class="result-box" id="res-e_pendapatan"></div>
    `},
    { id:"e_indeksharga", title:"Indeks Harga (Laspeyres & Paasche)", desc:"IL = (Σ(Pn×Qo)/Σ(Po×Qo))×100 ; IP = (Σ(Pn×Qn)/Σ(Po×Qn))×100", template: `
        <div class="form-row"><input id="pnqo_e" placeholder="Σ(Pn × Qo)"><input id="poqo_e" placeholder="Σ(Po × Qo)"></div>
        <div class="form-row"><input id="pnqn_e" placeholder="Σ(Pn × Qn)"><input id="poqn_e" placeholder="Σ(Po × Qn)"></div>
        <div class="btn-row"><button class="btn" data-calc="e_indeksharga">Hitung</button></div>
        <div class="result-box" id="res-e_indeksharga"></div>
    `},
    { id:"e_inflasi", title:"Laju Inflasi", desc:"Laju Inflasi = ((I2 - I1) / I1) × 100%", template: `
        <div class="form-row"><input id="ihk1_e" placeholder="IHK periode 1"><input id="ihk2_e" placeholder="IHK periode 2"></div>
        <div class="btn-row"><button class="btn" data-calc="e_inflasi">Hitung</button></div>
        <div class="result-box" id="res-e_inflasi"></div>
    `},
    { id:"e_pph21", title:"Pajak Penghasilan (PPh 21 sederhana)", desc:"Penghasilan Bersih = Gaji - 5% biaya jabatan - iuran pensiun (max 200k)", template: `
        <div class="form-row"><input id="gaji_e" placeholder="Penghasilan Bruto/Bulan (Rp)"><input id="iuran_pensiun_e" placeholder="Iuran Pensiun/Bulan (Rp)"></div>
        <div class="form-row">
          <select id="ptkp_e">
            <option value="54000000">Lajang/TK0 (PTKP Rp54.000.000)</option>
            <option value="58500000">Kawin/K0 (PTKP Rp58.500.000)</option>
            <option value="63000000">Kawin, 1 Anak (PTKP Rp63.000.000)</option>
            <option value="67500000">Kawin, 2 Anak (PTKP Rp67.500.000)</option>
            <option value="72000000">Kawin, 3 Anak (PTKP Rp72.000.000)</option>
          </select>
        </div>
        <div class="btn-row"><button class="btn" data-calc="e_pph21">Hitung</button></div>
        <div class="result-box" id="res-e_pph21"></div>
    `},
    { id:"e_pbb", title:"Pajak Bumi & Bangunan (PBB)", desc:"NJKP = 20% × (NJOP - NJOPTKP); PBB = 0.5% × NJKP", template: `
        <div class="form-row"><input id="njop_e" placeholder="Total NJOP (Rp)"><input id="njoptkp_e" placeholder="NJOPTKP (default Rp12.000.000)" value="12000000"></div>
        <div class="btn-row"><button class="btn" data-calc="e_pbb">Hitung</button></div>
        <div class="result-box" id="res-e_pbb"></div>
    `},
  ],
  umum: [
    { id:"u_calc", title:"Kalkulator Umum", desc:"Kalkulator cepat — mirip kalkulator HP", template: `
      <input id="calc-display" type="text" readonly placeholder="0" style="width:100%; padding:12px; border-radius:8px; border:1px solid rgba(120,100,70,0.12); font-size:1.3rem; text-align:right;">
      <div class="calculator-keys" data-delegate="calculator" style="margin-top: 10px;">
        </div>
    `},
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  // --- Audio (pilihan B: kualitas MP3) ---
  const sndClick = document.getElementById('sndClick');
  const sndDing = document.getElementById('sndDing');
  const sndWoosh = document.getElementById('sndWoosh');
  function play(audio){
    try { if(audio && audio.play) audio.currentTime = 0, audio.play(); } catch(e){ /* ignore */ }
  }

  // --- DOM refs ---
  const menuScreen = document.getElementById("menuScreen");
  const mainMenuGrid = document.getElementById("mainMenuGrid"); // BARU
  const slideWrapper = document.getElementById("slideWrapper");
  const slidesViewport = document.getElementById("slidesViewport");
  const subjectTitle = document.getElementById("subjectTitle");
  const backToMenu = document.getElementById("backToMenu");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnReset = document.getElementById("btnReset");

  // State
  let currentSubject = null;
  let currentIndex = 0;
  let currentModuleView = 'main'; // BARU: untuk melacak navigasi modul
  let currentModuleCache = {}; // BARU: untuk menyimpan data navigasi

  
  // =================================================================
  // EVENT LISTENER UTAMA (BARU - MENGATUR SEMUA NAVIGASI)
  // =================================================================
  document.body.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    const calcSubjectBtn = e.target.closest("[data-subject]");
    const calcBtn = e.target.closest("[data-calc]");
    const calcGrid = e.target.closest('[data-delegate="calculator"]');

    // --- 1. Penanganan Navigasi Menu (Hub, Modul, Kalkulator) ---
    if (navBtn) {
      play(sndWoosh);
      const navTarget = navBtn.dataset.nav;

      if (navTarget === 'main') {
        showMainMenu();
      } else if (navTarget === 'modul') {
        showModuleMenu_Class();
      } else if (navTarget === 'kalkulator') {
        showCalculatorMenu();
      } else if (navTarget.startsWith('modul-kelas-')) {
        const kelas = navTarget.replace('modul-kelas-', '');
        currentModuleCache.kelas = kelas;
        showModuleMenu_Subject(kelas);
      } else if (navTarget.startsWith('modul-mapel-')) {
        const mapel = navTarget.replace('modul-mapel-', '');
        currentModuleCache.mapel = mapel;
        showModuleMenu_Topic(currentModuleCache.kelas, mapel);
      } else if (navTarget.startsWith('modul-topik-')) {
        const topikIndex = parseInt(navTarget.replace('modul-topik-', ''), 10);
        const topikData = MODULE_DATA[currentModuleCache.kelas][currentModuleCache.mapel][topikIndex];
        openModule(topikData); // Buka slide materi
      }
      return;
    }
    
    // --- 2. Penanganan Tombol Kalkulator (Pilih Mapel) ---
    if (calcSubjectBtn) {
      play(sndWoosh);
      openSubject(calcSubjectBtn.dataset.subject); // Ini adalah fungsi lama Anda [cite: 74]
      return;
    }

    // --- 3. Penanganan Tombol "Hitung" di Kalkulator ---
    if (calcBtn) {
      play(sndClick);
      const type = calcBtn.dataset.calc;
      const slide = calcBtn.closest(".slide");
      runCalculation(type, slide); // Fungsi lama Anda 
      return;
    }

    // --- 4. Penanganan Tombol Kalkulator Umum ---
    if (calcGrid) {
      const key = e.target.dataset.key;
      if (key !== undefined) {
        handleCalculatorKey(key, calcGrid.parentElement); // Fungsi lama Anda [cite: 87]
        play(sndClick);
      }
      return;
    }
  });

  // Header actions (back, prev, next, reset)
  backToMenu.addEventListener("click", () => { play(sndClick); closeSlides(); });
  btnPrev.addEventListener("click", () => { play(sndClick); prevSlide(); });
  btnNext.addEventListener("click", () => { play(sndClick); nextSlide(); });
  btnReset.addEventListener("click", () => { play(sndClick); const active = slidesViewport.querySelector(".slide.active"); if(active) resetInputs(active); });


  /* ==================================================
     FUNGSI NAVIGASI MENU DINAMIS (BARU)
     Menggambar ulang tombol di mainMenuGrid
     ================================================== */
  function showMainMenu() {
    mainMenuGrid.innerHTML = `
      <button class="menu-btn" data-nav="modul">📚 Modul Pelajaran</button>
      <button class="menu-btn" data-nav="kalkulator">🧮 Kalkulator Pelajaran</button>
    `;
    mainMenuGrid.classList.remove('topic-grid');
    currentModuleView = 'main';
  }

  function showCalculatorMenu() {
    mainMenuGrid.innerHTML = `
      <button class="menu-btn" data-nav="main">← Kembali ke Hub</button>
      <button class="menu-btn" data-subject="matematika">Matematika</button>
      <button class="menu-btn" data-subject="fisika">Fisika</button>
      <button class="menu-btn" data-subject="kimia">Kimia</button>
      <button class="menu-btn" data-subject="ekonomi">Ekonomi</button>
      <button class="menu-btn" data-subject="umum">Kalkulator Umum</button>
    `;
    mainMenuGrid.classList.remove('topic-grid');
    currentModuleView = 'kalkulator';
  }

  function showModuleMenu_Class() {
    mainMenuGrid.innerHTML = `
      <button class="menu-btn" data-nav="main">← Kembali ke Hub</button>
      <button class="menu-btn" data-nav="modul-kelas-X">📘 Kelas X</button>
      <button class="menu-btn" data-nav="modul-kelas-XI">📗 Kelas XI</button>
      <button class="menu-btn" data-nav="modul-kelas-XII">📙 Kelas XII</button>
    `;
    mainMenuGrid.classList.remove('topic-grid');
    currentModuleView = 'modul-kelas';
  }

  function showModuleMenu_Subject(kelas) {
    const subjects = Object.keys(MODULE_DATA[kelas] || {});
    let buttonsHTML = '<button class="menu-btn" data-nav="modul">← Kembali ke Kelas</button>';
    
    const icons = { "Kimia": "🧪", "Matematika": "📐", "Fisika": "⚡", "Ekonomi": "💰" };

    buttonsHTML += subjects.map(mapel => {
      return `<button class="menu-btn" data-nav="modul-mapel-${mapel}">${icons[mapel] || '📖'} ${mapel}</button>`;
    }).join('');

    mainMenuGrid.innerHTML = buttonsHTML;
    mainMenuGrid.classList.remove('topic-grid');
    currentModuleView = 'modul-mapel';
  }

  function showModuleMenu_Topic(kelas, mapel) {
    const topics = MODULE_DATA[kelas][mapel] || [];
    let buttonsHTML = `<button class="menu-btn" data-nav="modul-kelas-${kelas}">← Kembali ke Mapel</button>`;

    // Kelompokkan berdasarkan semester
    const sem1 = topics.filter(t => t.semester === 1);
    const sem2 = topics.filter(t => t.semester === 2);

    if (sem1.length > 0) {
      buttonsHTML += `<h3 class="semester-title">Semester 1</h3>`;
      buttonsHTML += sem1.map((topik, idx) => {
          const originalIndex = topics.findIndex(t => t.title === topik.title);
          return `<button class="menu-btn topic-btn" data-nav="modul-topik-${originalIndex}">▪️ ${topik.title}</button>`;
      }).join('');
    }
    
    if (sem2.length > 0) {
      buttonsHTML += `<h3 class="semester-title">Semester 2</h3>`;
      buttonsHTML += sem2.map((topik, idx) => {
          const originalIndex = topics.findIndex(t => t.title === topik.title);
          return `<button class="menu-btn topic-btn" data-nav="modul-topik-${originalIndex}">▪️ ${topik.title}</button>`;
      }).join('');
    }

    mainMenuGrid.innerHTML = buttonsHTML;
    mainMenuGrid.classList.add('topic-grid'); // Tambahkan kelas untuk styling
    currentModuleView = 'modul-topik';
  }

  /* ==================================================
     FUNGSI UNTUK MEMBUKA KONTEN
     (Modul & Kalkulator)
     ================================================== */
  
  /**
   * (BARU) Menampilkan slide tunggal untuk konten Modul
   */
  function openModule(topicData) {
    currentSubject = 'Modul'; 
    currentIndex = 0;
    menuScreen.classList.add("hidden");
    slideWrapper.classList.remove("hidden");
    slideWrapper.setAttribute('aria-hidden', 'false');
    subjectTitle.textContent = topicData.title; // Judul materi di header

    // Kosongkan viewport dan buat slide baru
    slidesViewport.innerHTML = ""; 
    const slide = document.createElement("article");
    slide.className = "slide active"; // Langsung aktif
    slide.dataset.index = 0;
    
    // Masukkan konten HTML dari MODULE_DATA
    slide.innerHTML = `
      <h2>${topicData.title}</h2>
      <div class="module-content">
        ${topicData.content}
      </div>
    `;
    slidesViewport.appendChild(slide);

    // Sembunyikan tombol navigasi kalkulator
    btnPrev.style.display = 'none';
    btnNext.style.display = 'none';
    btnReset.style.display = 'none';
    
    play(sndWoosh);
  }

  /**
   * (ASLI) Membuka slide untuk Kalkulator [cite: 74]
   */
  function openSubject(subject){
    currentSubject = subject;
    currentIndex = 0;
    menuScreen.classList.add("hidden");
    slideWrapper.classList.remove("hidden");
    slideWrapper.setAttribute('aria-hidden', 'false');
    subjectTitle.textContent = capitalize(subject);
    buildSlides(subject);
    showSlide(0);
    play(sndWoosh);
  }

  /**
   * (MODIFIKASI) Menutup slide wrapper dan kembali ke menu yang benar
   */
  function closeSlides() {
  // PENTING: Lakukan reset sebelum menyembunyikan wrapper
  // 1. Menghapus semua konten slide (agar tidak ada riwayat yang terlihat)
  slidesViewport.innerHTML = ''; 
  
  // 2. Mereset status subjek dan index
  currentIndex = 0; 
  currentSubject = null; 
  
  // Lanjutkan dengan menyembunyikan wrapper dan menampilkan menu utama
  slideWrapper.classList.add('hidden');
  menuScreen.classList.remove('hidden');
}
   
    
    // Tampilkan kembali tombol nav kalkulator
    btnPrev.style.display = 'inline-block';
    btnNext.style.display = 'inline-block';
    btnReset.style.display = 'inline-block';

    // KEMBALI KE TAMPILAN MENU SEBELUMNYA
    if (currentModuleView === 'main') {
      showMainMenu();
    } else if (currentModuleView === 'kalkulator') {
      showCalculatorMenu();
    } else if (currentModuleView === 'modul-kelas') {
      showModuleMenu_Class();
    } else if (currentModuleView === 'modul-mapel' && currentModuleCache.kelas) {
      showModuleMenu_Subject(currentModuleCache.kelas);
    } else if (currentModuleView === 'modul-topik' && currentModuleCache.kelas && currentModuleCache.mapel) {
      showModuleMenu_Topic(currentModuleCache.kelas, currentModuleCache.mapel);
    } else {
      showMainMenu(); // Default
    }
  }

  /* ==================================================
     FUNGSI LOGIKA KALKULATOR (ASLI DARI FILE ANDA)
     [cite: 76-190]
     ================================================== */

  // Build & open slides [cite: 76-80]
  function buildSlides(subject){
    slidesViewport.innerHTML = "";
    const data = SUBJECTS[subject] || [];
    data.forEach((item, idx) => {
      const slide = document.createElement("article");
      slide.className = "slide";
      slide.dataset.index = idx;
      slide.innerHTML = `<h2>${item.title}</h2><p class="desc">${item.desc}</p>${item.template}`;
      slidesViewport.appendChild(slide);

      // For calculator keys generation (umum)
      if(item.id === "u_calc") {
        const keysArea = slide.querySelector('[data-delegate="calculator"]');
        if(keysArea) {
          const keys = ["C","/","*","-","7","8","9","+","4","5","6","=","1","2","3","0","."];
          keysArea.innerHTML = keys.map(k => {
            let cls = "btn";
            if(['/','*','-','+','=','C'].includes(k)) cls += " alt";
            if(k === '=' ) return `<button class="${cls}" data-key="${k}" style="grid-column: span 2;">${k}</button>`;
            if(k === '0') return `<button class="${cls}" data-key="${k}" style="grid-column: span 2;">${k}</button>`;
            return `<button class="${cls}" data-key="${k}">${k}</button>`;
          }).join('');
        }
      }
    });
  }

  // [cite: 80-86]
  function showSlide(index){
    const slides = Array.from(slidesViewport.children);
    if(slides.length === 0) return;
    if(index < 0) index = 0;
    if(index >= slides.length) index = slides.length - 1;
    currentIndex = index;
    slides.forEach((sl, i) => {
      sl.classList.remove("active","left");
      if(i < index) sl.classList.add("left");
      else if(i === index) sl.classList.add("active");
    });
    updateNav();
  }

  function nextSlide(){ showSlide(currentIndex + 1); }
  function prevSlide(){ showSlide(currentIndex - 1); }

  function updateNav(){
    const slides = slidesViewport.children.length;
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === slides - 1;
  }

  function resetInputs(slide){
    slide.querySelectorAll('input, select').forEach(i => {
      if(i.id === 'njoptkp_e') return;
      i.value = '';
    });
    slide.querySelectorAll('.result-box').forEach(r => { r.style.display = 'none'; r.innerHTML = ''; });
  }

  // ----------------
  // Calculator general helper 
  // ----------------
  function handleCalculatorKey(key, context){
    const display = context.querySelector('#calc-display');
    if(!display) return;
    if(key === 'C') display.value = '';
    else if(key === '=') {
      try {
        // safe eval: only numbers and arith ops allowed
        const safe = display.value.replace(/[^0-9+\-*/(). ]/g,'');
        display.value = Function('"use strict";return (' + safe + ')')();
      } catch (err) {
        display.value = 'Error';
      }
    } else {
      if(display.value === 'Error') display.value = '';
      display.value += key;
    }
  }

  // ----------------
  // Run calculations for many formulas 
  // ----------------
  function runCalculation(type, context){
    const getVal = (id) => {
      const el = context.querySelector('#' + id);
      if(!el) return NaN;
      const v = parseFloat(el.value);
      return isNaN(v) ? NaN : v;
    };
    const show = (id, text) => {
      const res = context.querySelector(`#res-${id}`);
      if(!res) return;
      res.style.display = 'block';
      res.innerHTML = text;
      play(sndDing);
    };
    const showErr = (id, msg) => show(id, `<span style="color:#c44">⚠️ ${msg}</span>`);
    // Format helper
    const fmt = (n, u='') => {
      if (isNaN(n)) return '-';
      // if number is large, show separators
      if (Math.abs(n) >= 1000) return n.toLocaleString('id-ID', {maximumFractionDigits: 4}) + (u ? ` ${u}` : '');
      return Number.parseFloat(n.toFixed(4)).toString() + (u ? ` ${u}` : '');
    };
    switch(type){
      // --- Matematika ---
      case "md_lingkaran": {
        const phiVal = context.querySelector('#phi_md_lingkaran').value;
        const r = parseFloat(context.querySelector('#r_md_lingkaran').value);
        const resId = 'md_lingkaran';
        if(!r && r !== 0) return showErr(resId, 'Isi jari-jari.');
        const pi = (phiVal === '22/7') ? (22/7) : 3.14;
        const luas = pi * r * r;
        const kel = 2 * pi * r;
        return show(resId, `Luas = <strong>${fmt(luas,'cm²')}</strong><br>Keliling = <strong>${fmt(kel,'cm')}</strong> (π = ${phiVal})`);
      }
      case "md_segitiga": {
        const resId='md_segitiga';
        const alas = getVal('alas_md_segitiga'), tinggi = getVal('tinggi_md_segitiga');
        const a = getVal('a_md_seg'), b = getVal('b_md_seg'), c = getVal('c_md_seg');
        if(isNaN(alas) || isNaN(tinggi)) return showErr(resId, 'Alas dan tinggi harus diisi.');
        const luas = 0.5 * alas * tinggi;
        let kel = '—';
        if(!isNaN(a)&&!isNaN(b)&&!isNaN(c)) kel = `${fmt(a+b+c,'cm')}`;
        return show(resId, `Luas = <strong>${fmt(luas,'cm²')}</strong><br>Keliling = <strong>${kel}</strong>`);
      }
      case "md_persegi": {
        const resId='md_persegi';
        const s = getVal('s_md_persegi');
        if(isNaN(s)) return showErr(resId, 'Isi sisi (s).');
        return show(resId, `Luas = <strong>${fmt(s*s,'cm²')}</strong><br>Keliling = <strong>${fmt(4*s,'cm')}</strong>`);
      }
      case "md_persegipanjang": {
        const resId='md_persegipanjang';
        const p = getVal('p_md_pp'), l = getVal('l_md_pp');
        if(isNaN(p)||isNaN(l)) return showErr(resId, 'Isi panjang & lebar.');
        return show(resId, `Luas = <strong>${fmt(p*l,'cm²')}</strong><br>Keliling = <strong>${fmt(2*(p+l),'cm')}</strong>`);
      }
      case "md_spltv_2x2": {
        const resId='md_spltv_2x2';
        const a = getVal('a_s1'), b = getVal('b_s1'), e = getVal('e_s1');
        const c = getVal('c_s2'), d = getVal('d_s2'), f = getVal('f_s2');
        if([a,b,c,d,e,f].some(v=>isNaN(v))) return showErr(resId, 'Isi semua koefisien dan konstanta.');
        const D = a*d - b*c;
        if(Math.abs(D) < 1e-12) return showErr(resId, 'Sistem tidak memiliki solusi unik (determinan = 0).');
        const x = (e*d - b*f) / D;
        const y = (a*f - e*c) / D;
        return show(resId, `Solusi: x = <strong>${fmt(x)}</strong>, y = <strong>${fmt(y)}</strong>`);
      }
      case "md_polinomial": {
        const resId='md_polinomial';
        const a = getVal('a_quad'), b = getVal('b_quad'), c = getVal('c_quad');
        if([a,b,c].some(v=>isNaN(v))) return showErr(resId, 'Isi a, b, c.');
        if(Math.abs(a) < 1e-12) return showErr(resId, 'a tidak boleh 0 untuk kuadrat.');
        const D = b*b - 4*a*c;
        if(D < 0) {
          const real = -b / (2*a);
          const imag = Math.sqrt(Math.abs(D)) / (2*a);
          return show(resId, `Akar kompleks: x₁ = ${fmt(real)} + ${fmt(imag)}i , x₂ = ${fmt(real)} - ${fmt(imag)}i`);
        } else {
          const x1 = (-b + Math.sqrt(D)) / (2*a);
          const x2 = (-b - Math.sqrt(D)) / (2*a);
          return show(resId, `Akar: x₁ = <strong>${fmt(x1)}</strong>, x₂ = <strong>${fmt(x2)}</strong>`);
        }
      }
      case "md_kubus": {
        const resId='md_kubus';
        const s = getVal('s_kubus');
        if(isNaN(s)) return showErr(resId, 'Isi sisi.');
        return show(resId, `Volume = <strong>${fmt(Math.pow(s,3),'cm³')}</strong><br>Luas permukaan = <strong>${fmt(6*Math.pow(s,2),'cm²')}</strong>`);
      }
      case "md_tabung": {
        const resId='md_tabung';
        const phiVal = context.querySelector('#phi_tabung').value;
        const r = parseFloat(context.querySelector('#r_tabung_md').value);
        const t = parseFloat(context.querySelector('#t_tabung_md').value);
        if(isNaN(r)||isNaN(t)) return showErr(resId,'Isi jari-jari & tinggi.');
        const pi = (phiVal==='22/7') ? (22/7) : 3.14;
        const V = pi * r * r * t;
        const L = 2 * pi * r * (r + t);
        return show(resId, `Volume = <strong>${fmt(V,'cm³')}</strong><br>Luas Permukaan = <strong>${fmt(L,'cm²')}</strong> (π=${phiVal})`);
      }

      // --- Fisika ---
      case "f_glbb": {
        const resId='f_glbb';
        const v0 = getVal('v0_glbb'), a = getVal('a_glbb'), t = getVal('t_glbb');
        if([v0,a,t].some(v=>isNaN(v))) return showErr(resId,'Isi v₀, a, t.');
        const v = v0 + a * t;
        const s = v0*t + 0.5*a*t*t;
        return show(resId, `Kecepatan akhir v = <strong>${fmt(v,'m/s')}</strong><br>Jarak s = <strong>${fmt(s,'m')}</strong>`);
      }
      case "f_kecepatan_jatuh": {
        const resId='f_kecepatan_jatuh';
        const t = getVal('t_jatuh'); if(isNaN(t)) return showErr(resId,'Isi t.');
        const g = 9.8;
        const v = g * t;
        const s = 0.5 * g * t * t;
        return show(resId, `Kecepatan v = <strong>${fmt(v,'m/s')}</strong><br>Jarak s = <strong>${fmt(s,'m')}</strong>`);
      }
      case "f_ohm": {
        const resId='f_ohm';
        const V = getVal('v_ohm2'), I = getVal('i_ohm2'), R = getVal('r_ohm2');
        if((!isNaN(V) && !isNaN(I))){ return show(resId, `Hambatan R = <strong>${fmt(V/I,'Ω')}</strong>`); }
        if((!isNaN(V) && !isNaN(R))){ return show(resId, `Arus I = <strong>${fmt(V/R,'A')}</strong>`); }
        if((!isNaN(I) && !isNaN(R))){ return show(resId, `Tegangan V = <strong>${fmt(I*R,'V')}</strong>`); }
        return showErr(resId, 'Isi dua dari tiga nilai.');
      }
      case "f_energi": {
        const resId='f_energi';
        const m = getVal('m_en'), v = getVal('v_en2'), h = getVal('h_en2');
        if(isNaN(m)) return showErr(resId,'Massa harus diisi.');
        const Ek = 0.5 * m * v * v;
        const Ep = m * 9.8 * h;
        return show(resId, `Energi Kinetik = <strong>${fmt(Ek,'J')}</strong><br>Energi Potensial = <strong>${fmt(Ep,'J')}</strong>`);
      }

      // --- Kimia ---
      case "k_mol": {
        const resId='k_mol';
        const massa = getVal('massa_k'), armr = getVal('armr_k');
        if(isNaN(massa) || isNaN(armr)) return showErr(resId,'Isi massa dan Ar/Mr.');
        const n = massa / armr;
        return show(resId, `Jumlah mol = <strong>${fmt(n,'mol')}</strong>`);
      }
      case "k_ideal": {
        const resId='k_ideal';
        let P = getVal('p_g'), V = getVal('v_g'), n = getVal('n_g'), T_c = parseFloat(context.querySelector('#t_g')?.value || NaN);
        const R = 0.0821; // L·atm/(mol·K)
        let T = isNaN(T_c) ? NaN : (T_c + 273.15);
        if(isNaN(P)) { if([V,n,T].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari P.'); P = n*R*T/V; return show(resId, `P = <strong>${fmt(P,'atm')}</strong>`); }
        if(isNaN(V)) { if([P,n,T].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari V.'); V = n*R*T/P; return show(resId, `V = <strong>${fmt(V,'L')}</strong>`); }
        if(isNaN(n)) { if([P,V,T].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari n.'); n = P*V/(R*T); return show(resId, `n = <strong>${fmt(n,'mol')}</strong>`); }
        if(isNaN(T)) { if([P,V,n].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari T.'); T = P*V/(n*R); return show(resId, `T = <strong>${fmt(T-273.15,'°C')}</strong>`); }
        return showErr(resId,'Kosongkan satu field untuk dihitung.');
      }

      // --- Ekonomi ---
      case "e_fungsi": {
        const resId='e_fungsi';
        const p1 = getVal('p1_e'), q1 = getVal('q1_e'), p2 = getVal('p2_e'), q2 = getVal('q2_e');
        if([p1,q1,p2,q2].some(v=>isNaN(v))) return showErr(resId,'Isi semua titik harga & kuantitas.');
        const m = (p2 - p1) / (q2 - q1);
        const c = p1 - m * q1;
        return show(resId, `Fungsi (harga terhadap kuantitas): <strong>P = ${fmt(m)}·Q + ${fmt(c)}</strong>`);
      }
      case "e_elastisitas": {
        const resId='e_elastisitas';
        const q1 = getVal('q1_el'), q2 = getVal('q2_el'), p1 = getVal('p1_el2'), p2 = getVal('p2_el2');
        if([q1,q2,p1,p2].some(v=>isNaN(v))) return showErr(resId,'Isi semua field.');
        const ed = ((q2 - q1) / (p2 - p1)) * (p1 / q1);
        let interp = '|Ed| = 1: Uniter';
        const absEd = Math.abs(ed);
        if(absEd > 1) interp = '|Ed| > 1 : Elastis (responsif)';
        else if(absEd < 1) interp = '|Ed| < 1 : Inelastis (kurang responsif)';
        return show(resId, `Elastisitas (Ed) = <strong>${fmt(ed)}</strong><br><em>${interp}</em>`);
      }
      case "e_pendapatan": {
        const resId='e_pendapatan';
        const gdp = getVal('gdp_e'), netto = getVal('netto_ln_e')||0, dep = getVal('depresiasi_e')||0, pajak_tl = getVal('pajak_tl_e')||0;
        const transfer = getVal('transfer_e')||0, iuran = getVal('iuran_e')||0, pajak_l = getVal('pajak_l_e')||0;
        if(isNaN(gdp)) return showErr(resId,'GDP harus diisi.');
        const gnp = gdp + netto;
        const nnp = gnp - dep;
        const nni = nnp - pajak_tl;
        const pi = nni + transfer - iuran;
        const di = pi - pajak_l;
        return show(resId, `GNP = <strong>${fmt(gnp)}</strong><br>NNP = <strong>${fmt(nnp)}</strong><br>NNI = <strong>${fmt(nni)}</strong><br>PI = <strong>${fmt(pi)}</strong><br>DI = <strong>${fmt(di)}</strong>`);
      }
      case "e_indeksharga": {
        const resId='e_indeksharga';
        let pnqo = getVal('pnqo_e'), poqo = getVal('poqo_e'), pnqn = getVal('pnqn_e'), poqn = getVal('poqn_e');
        let out = '';
        if(!isNaN(pnqo) && !isNaN(poqo)) out += `Indeks Laspeyres (IL) = <strong>${fmt(pnqo/poqo*100,'%')}</strong><br>`;
        if(!isNaN(pnqn) && !isNaN(poqn)) out += `Indeks Paasche (IP) = <strong>${fmt(pnqn/poqn*100,'%')}</strong>`;
        if(out === '') return showErr(resId,'Isi data untuk salah satu indeks.');
        return show(resId, out);
      }
      case "e_inflasi": {
        const resId='e_inflasi';
        const i1 = getVal('ihk1_e'), i2 = getVal('ihk2_e');
        if(isNaN(i1)||isNaN(i2)) return showErr(resId,'Isi kedua indeks harga.');
        const laju = (i2 - i1) / i1 * 100;
        return show(resId, `Laju Inflasi = <strong>${fmt(laju,'%')}</strong>`);
      }
      case "e_pph21": {
        const resId='e_pph21';
        const gaji = getVal('gaji_e'), iuran = getVal('iuran_pensiun_e')||0;
        const ptkp = parseFloat(context.querySelector('#ptkp_e').value || 54000000);
        if(isNaN(gaji)) return showErr(resId,'Isi gaji per bulan.');
        const biayaJabatan = Math.min(0.05 * gaji, 500000); // cap common
        const nettoBulan = gaji - biayaJabatan - Math.min(iuran, 200000);
        const nettoTahun = nettoBulan * 12;
        const pkp = Math.max(0, nettoTahun - ptkp);
        const tarif = 0.05; // Tarif PPh terendah (sederhana)
        const pphTahun = tarif * pkp;
        return show(resId, `Netto/tahun = <strong>Rp ${fmt(nettoTahun)}</strong><br>PKP = <strong>Rp ${fmt(pkp)}</strong><br>PPh terutang/tahun = <strong>Rp ${fmt(pphTahun)}</strong><br>PPh/bulan ≈ <strong>Rp ${fmt(pphTahun/12)}</strong>`);
      }
      case "e_pbb": {
        const resId='e_pbb';
        const njop = getVal('njop_e'), njoptkp = getVal('njoptkp_e');
        if(isNaN(njop)) return showErr(resId,'Isi NJOP.');
        const njkp = 0.2 * (njop - (isNaN(njoptkp) ? 12000000 : njoptkp));
        const pbb = 0.005 * njkp;
        return show(resId, `NJKP = <strong>Rp ${fmt(njkp)}</strong><br>PBB Terutang = <strong>Rp ${fmt(pbb)}</strong>`);
      }

      default:
        console.warn('Unknown calc type', type);
      break;
    }
  }

  // --- small helpers --- [cite: 186-190]
  function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

  // Accessibility: keyboard navigation for slides
  document.addEventListener('keydown', (e) => {
    if(document.getElementById('slideWrapper').classList.contains('hidden')) return;
    // Hanya berlaku jika di dalam kalkulator (banyak slide)
    if (currentSubject !== 'Modul') {
      if(e.key === 'ArrowRight') nextSlide();
      if(e.key === 'ArrowLeft') prevSlide();
    }
    if(e.key === 'Escape') { closeSlides(); play(sndClick); }
  });

  // Initial tiny animation (menu)
  setTimeout(()=> {
    document.querySelectorAll('.menu-btn').forEach((b,i)=>{
      b.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      b.style.transitionDelay = (i*40) + 'ms';
      b.style.opacity = '1';
      b.style.transform = 'translateY(0)';
    });
  }, 100);

  // Pre-styling for animation
  document.querySelectorAll('.menu-btn').forEach(b => {
    b.style.opacity = '0';
    b.style.transform = 'translateY(10px)';
  });

});

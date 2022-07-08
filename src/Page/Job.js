import React from "react";
import CardJob from "../Components/Card/CardJob";
import Html from "../assets/home_kit/Html.png";
import Java from "../assets/home_kit/Java.png";
import Word from "../assets/home_kit/Word.png";

const Job = () => {
    return (
      <div>
        {/* bagian 1 */}
        <div>
        <div className="home-container mt-5 p-5">
        <div class="m-5 py-3">
      <div class="card-body text-start">
        <h1>Selamat Datang,,, </h1>
        <h3>Temukan Lowongan Pekerjaan.</h3>
        <h5>hanya di Directed...</h5>
    </div>
    </div>
          <h1 className="card-title fw-bold text-start mx-5">Dapatkan Pekerjaan <span style={{ color: "red" }}> Sesuai Bakatmu</span></h1>
          <div class="home mt-5">
            <div class="d-flex m-5 text-center">
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text " id="basic-addon1">@</span>
              <input type="text" class="form-control" placeholder="Posisi" aria-label="Posisi" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group input-group-sm mb-3 ms-3">
              <span class="input-group-text " id="inputGroup-sizing-sm">#</span>
              <input type="text" class="form-control" placeholder="Lokasi" aria-label="Lokasi" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group input-group-sm mb-3 ms-3">
              <span class="input-group-text " id="inputGroup-sizing-sm">?</span>
              <input type="text" class="form-control" placeholder="Perusahaan" aria-label="Perusahaan" aria-describedby="basic-addon1" />
            </div>
            <div class="form ms-3 mb-3">
              <button type="button" class="btn btn-success">Cari</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* penutup bagian 1 */}

        {/* bagian 2 */}
        <div className="jobcontainer m-5">
            <h1 class="text-start mb-5">
                Lowongan Pekerjaan Terkini
            </h1>
  
          <div className="text-start">
            <CardJob
              job="Front End Developer"
              img={Html}
              perusahaan="PT Gemilang Sentosa Jaya"
              salary="dirahasiakan"
              kota="Jakarta Selatan"
              desc="Kami menemukan pekerja yang cerdas dan giat, kreatif, bersemangat tentang pengembangan aplikasi dan teknologi, serta memiliki pola pikir berkembang untuk membantu membawa perusahaan kami ke tingkat berikutnya."
              tgl="1 Menit yang lalu"
              profit="Bonus, career, BPJS, In-Health"
              require="S1 jurusan Teknik Informatika, Sistem Informasi, Ilmu Komputer, IPK minimal 2.75
              Minimal pengalaman kerja 1 tahun,
              Memiliki Critical Thinking, Soft Skill yang baik, 
              Menguasai html, css, javascript, reactJS, NextJS, Bootstrap,
              Mampu bekerja secara team maupun individual,
              Aktif, Kreatif, dan Inovatif dalam membuat terobosan,
              Penempatan : Jakarta Selatan,
              Hari kerja : Senin - Jum'at. "
              info="PT. Gemilang Sentosa Jaya adalah sebuah perusahaan belanja yang menawarkan produk bahan bangunan dengan harga termurah serta terlengkap se-indonesia. Berbelanja di Gemilang Sentosa Jaya semudah berbelanja di Marketplace pada umumnya karena didesain khusus dan langsung terhubung dengan beberapa toko bangunan se indonesia."
              />

            <CardJob
              job="Back End Developer"
              img={Java}
              perusahaan="PT ToMe"
              salary="9.000.0000"
              kota="Bandung"
              desc="Kamu pekerja keras yang memiliki analisis kritis dan bersemangat tentang pengembangan aplikasi dan teknologi, kami mencarimu, ayo lamar di perusahan kami segara."
              tgl="7 jam yang lalu"
              profit="Tunjangan, Career, BPJS, In-Health"
              require="S1 jurusan Teknik Informatika, Sistem Informasi, Ilmu Komputer, IPK minimal 3.00
              Minimal pengalaman kerja 1 tahun,
              Memiliki Critical Thinking, Soft Skill yang baik, 
              Berpengetahuan dalam OOP,
              Berpengetahuan luas dalam struktur data dan alur kerja data,
              Pengetahuan dalam SQL,
              Pengetahuan di MySQL,
              Bertanggung jawab dan jujur,
              Penempatan : Bandung,
              Hari kerja : Senin - Jum'at."
              info="ToMe adalah perusahaan IT yang berpusat di Bandung yang memposisikan diri untuk menjadi pemimpin pasar dalam menyediakan solusi data terintegrasi untuk perusahaan operator jaringan. Mitra Informatika didirikan oleh para profesional di bidang IT, Telecom, dan Software Architecture, berpengalaman dalam memecahkan masalah pelanggan. Produk utamanya adalah iNeOM (Integrated Network Operation & Monitoring), sebuah solusi komprehensif bagi operator jaringan untuk mendukung operasi sehari-hari mereka, yang telah berhasil diimplementasikan pada skala nasional di operator jaringan terbesar di Indonesia."
            />

            <CardJob
              job="Staff Admin"
              img={Word}
              perusahaan="PT Anugrah Indah"
              salary="4.500.000 - 5.000.000"
              kota="Bekasi"
              desc="Kami sedang membutuhkan manpower untuk bagian staff administrasi. Don't Miss It!"
              tgl="9 Hari yang lalu"
              profit="Tunjangan Hari Raya, Career, BPJS."
              require="Usia antara 24 tahun sampai 28 tahun,
              Memiliki kendaraan pribadi,
              Pendidikan Minimal S1,
              Pengalaman diposisi yang sama lebih dari 1 tahun,
              Dapat bekerjasama dengan tim,
              Dapat menggunakan Ms.Office (Ms.Excel, Ms.Word, Ms.Powerpoint),
              Memiliki komunikasi yg baik, Cekatan, Teliti dan Tanggung Jawab,
              Memiliki Kemampuan berkomunikasi dengan baik,
              Dapat Segera Bergabung,
              Bersedia masuk di hari sabtu."
              info="PT Anugrah Indah adalah perusahaan bisnis yang bergerak di bidang produksi Kain dan Benang terbesar di jawa barat. perusahaan ini terletak di bekasi. Anda juga dapat menghubungi peursahaan ini melalui telepon di nomor 0888899977 atau kunjungi situs www.anugrah.com. "
            />

            </div>
          </div>
        {/* penutup bagian 2 */}
      </div>
    );
  };

export default Job;

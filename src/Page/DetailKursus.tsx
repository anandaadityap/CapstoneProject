import './App.css';
import Accordion from '../Components/Accordion/Accordion';
import Footer from '../Components/Footer';

function App() {
  const accordionItems = [
    {
      title: 'Introduction',
      content: (
        <div>
          <strong> React JS </strong> adalah sebuah pustaka/library javascript
          yang bersifat open source untuk membangun User Interface yang dibuat
          oleh Facebook. React JS hanya mengurusi semua hal yang berkaitan
          dengan tampilan dan logika di sekitarnya. <u>React JS</u>, dapat
          mendesain tampilan sederhana untuk setiap level dalam aplikasi,
          sehingga dapat digunakan untuk membuat dan mengembangkan pembuatan
          aplikasi berbasis web. Popularitasnya dapat diukur oleh aplikasi-
          aplikasi yang menggunakannya seperti Facebook, WhatsApp, Netflix,
          Instagram, Airbnb, American Express, Dropbox, Ebay, dan ratusan
          penyedia jasa pembuatan aplikasi berbasis web memanfaatkan kemampuan
          React JS. Ada pula fitur yang diunggulkan oleh React JS yaitu :
          <ul>
            <li>
              1. Declarative Yang dimaksud disini yaitu React dapat membuat
              UI(User Interfaces) yang interaktif, sehingga dapat dengan mudah
              membuat desain yang simple untuk di setiap state di dalam
              aplikasi. Declarative views dapat membuat kode lebih mudah untuk
              di prediksi dan lebih mudah untuk di debug.
            </li>
            <li>
              2. Component-Based Dapat membuat Encapsulated Component yang dapat
              mengatur setiap tahapannya, lalu dapat membuat complex UIs
              berdasarkan kemampuan itu.
            </li>
            <li>
              3. Learn Once, Write Anywhere Developer dapat men-develop fitur
              baru menggunakan react tanpa mengubah kode sebelumnya, react juga
              dapat bekerja menggunakan Node JS dan mobile apps menggunakan
              React Native.
            </li>
          </ul>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5kHyviqjhCk"
            frameBorder="0"
            data-allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
    {
      title: 'Component',
      content: (
        <div>
          <strong>Component</strong> Component adalah potongan kode kecil yang
          dapat di gunakan kembali (reusable) yang bertujuan agar user interface
          terpisah menjadi bagian-bagian kecil dan di satukan dan di render
          menjadi sebuah kode HTML.
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5kHyviqjhCk"
            frameBorder="0"
            data-allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
    {
      title: 'Hooks',
      content: (
        <div>
          <strong>Hooks</strong> Hooks merupakan cara agar kita bisa menggunakan
          atau mengakses state dan ReactJS lifecycle dengan functional
          component. Sebelum ada Hooks kita tidak bisa menggunakan state maupun
          mengakses lifecycle ReactJS dari functional component. Ketika itu
          hanya class component yang bisa mengakses state dan lifecycle,
          sedangkan functional component hanya dipakai sebagai stateless
          component yaitu component yang tidak memiliki state. Komponen statless
          semacam itu hanya digunakan untuk menerima props dan menampilkan UI
          sesuai dengan props tersebut.
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5kHyviqjhCk"
            frameBorder="0"
            data-allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <h1>React JS untuk pemula</h1>
      <div className="react-container">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-8">
              <h1>React JS untuk Pemula</h1>
              <p> yuk belajar react</p>
              <button className="button-primary">Enroll Sekarang</button>
            </div>
          </div>
          <img
            src="../assets/react1.jpg"
            alt="react"
            className="rounded float-left position-absolute end-10 bottom-0"
            width={500}
          ></img>
        </div>
      </div>

      <Accordion items={accordionItems} />
      <Footer />
    </div>
  );
}

export default App;

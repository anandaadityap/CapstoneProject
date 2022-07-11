import './DetailKursus.css';
import Accordion from '../Components/Accordion/Accordion';
import Footer from '../Components/Footer';

function DetailKursus() {
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
            src="https://www.youtube.com/embed/QFaFIcGhPoM"
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
            src="https://www.youtube.com/embed/Y2hgEGPzTZY"
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
            src="https://www.youtube.com/embed/oecI26cWqzk"
            frameBorder="0"
            data-allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
    {
      title: 'JSX',
      content: (
        <div>
          <strong>JSX</strong> Hooks merupakan cara agar kita bisa menggunakan
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
            src="https://www.youtube.com/embed/7fPXI_MnBOY"
            frameBorder="0"
            data-allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
    {
      title: 'Props',
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
            src="https://www.youtube.com/embed/m7OWXtbiXX8"
            frameBorder="0"
            data-allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },

    {
      title: 'State',
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
            src="https://www.youtube.com/embed/4ORZ1GmjaMc"
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
      <div className="react-container">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-8">
              <h1>React JS - 101</h1>
              <p>
                <strong>Why Learn ReactJS?</strong> ReactJS offers graceful
                solutions to some of front-end programming’s most persistent
                issues, allowing you to build dynamic and interactive web apps
                with ease. It’s fast, scalable, flexible, powerful, and has a
                robust developer community that’s rapidly growing. There’s never
                been a better time to learn React.
              </p>
              <p>
                <strong>Take-Away Skills:</strong> You’ll develop a strong
                understanding of React’s most essential concepts: JSX, class and
                function components, props, state, lifecycle methods, and hooks.
                You’ll be able to combine these ideas in React’s modular
                programming style.
              </p>
              <button className="button-primary">StartNow!</button>
            </div>
          </div>
        </div>
      </div>

      <Accordion items={accordionItems} />
    </div>
  );
}

export default DetailKursus;

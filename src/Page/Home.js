import React from "react";
import CardHome from "../Components/CardHome";
import CardPelatihan from "../Components/CardPelatihan";

const Home = () => {
  return (
    <div>
      {/* bagian 1 */}
      <div></div>
      {/* penutup bagian 1 */}

      {/* bagian 2 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
            All-In-One <span style={{ color: "yellow" }}>Can Be Directed.</span>
          </h1>
          <p>
            Directed is one of the most powerful online software that combines
            all the tools needed to carry out honing skills and finding work
          </p>
        </div>

        <CardHome />
      </div>
      {/* penutup bagian 3 */}

      {/* bagian 3 */}
      <div></div>
      {/* penutup bagian 3 */}

      {/* bagian 4 */}
      <div className="container">
        <div className="mx-auto" style={{ width: "50%", margin: "50px" }}>
          <h1>
            PELATIHAN POPULER
          </h1>
          <p>
            yuk simak pelatihan yang banyak di ikuti saat ini
          </p>
        </div>

        <CardPelatihan />
      </div>
      {/* penutup bagian 4 */}

      {/* bagian 5 */}
      <div></div>
      {/* penutup bagian 5 */}
    </div>
  );
};

export default Home;

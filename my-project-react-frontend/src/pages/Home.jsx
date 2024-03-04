import "./pages.css";
import vitrine from "./../assets/img/vitrine.jpg?url";
const Home = () => {
  return (
    <div>
      <section
        className="vitrine"
        style={{ backgroundImage: `url(${vitrine})` }}
      >
        <div className="vitrine_title">Promotion 2024</div>
      </section>

      <section className="services mb-5">
        <h2 className="services_title">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 services_grid">
          <div className="services_element">
            <div className="card">
              <img src="https://picsum.photos/350/200" className="card_img" />
              <div className="card_info mt-2">
                <h3 className="font-semibold">Transport gratuit</h3>
                <p>Livraison gratuite a partir de 100 DT</p>
              </div>
            </div>
          </div>
          <div className="services_element">
            <div className="card">
              <img src="https://picsum.photos/351/200" className="card_img" />
              <div className="card_info mt-2">
                <h3 className="font-semibold">Transport gratuit</h3>
                <p>Livraison gratuite a partir de 100 DT</p>
              </div>
            </div>
          </div>
          <div className="services_element">
            <div className="card">
              <img src="https://picsum.photos/352/200" className="card_img" />
              <div className="card_info mt-2">
                <h3 className="font-semibold">Transport gratuit</h3>
                <p>Livraison gratuite a partir de 100 DT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services mb-5">
        <h2 className="services_title">Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 services_grid">
          <div className="services_element">
            <div className="card">
              <img src="https://picsum.photos/350/200" className="card_img" />
              <div className="card_info mt-2">
                <h3 className="font-semibold">Transport gratuit</h3>
                <p>Livraison gratuite a partir de 100 DT</p>
              </div>
            </div>
          </div>
          <div className="services_element">
            <div className="card">
              <img src="https://picsum.photos/351/200" className="card_img" />
              <div className="card_info mt-2">
                <h3 className="font-semibold">Transport gratuit</h3>
                <p>Livraison gratuite a partir de 100 DT</p>
              </div>
            </div>
          </div>
          <div className="services_element">
            <div className="card">
              <img src="https://picsum.photos/352/200" className="card_img" />
              <div className="card_info mt-2">
                <h3 className="font-semibold">Transport gratuit</h3>
                <p>Livraison gratuite a partir de 100 DT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="conditions_generales">
        <h2 className="services_title">Conditions generales</h2>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at
          modi eum natus ea voluptates quam iusto reprehenderit odit, doloribus
          sint quasi a eius dignissimos aperiam itaque necessitatibus laboriosam
          minus.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at
          modi eum natus ea voluptates quam iusto reprehenderit odit, doloribus
          sint quasi a eius dignissimos aperiam itaque necessitatibus laboriosam
          minus.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at
          modi eum natus ea voluptates quam iusto reprehenderit odit, doloribus
          sint quasi a eius dignissimos aperiam itaque necessitatibus laboriosam
          minus.
        </div>
      </section>
    </div>
  );
};

export default Home;

import { NavBar } from './Components/NavBar/navBar'
import { Banner } from './Components/Banner/banner';
import SLIDER from './Imagenes/SLIDER.png'
import BANNERSillon from './Imagenes/BANNER_Sillon.png'
import { Nosotros } from './Components/Nosotros/nosotros';
import { Productos } from './Components/Productos/productos';
import { Footer } from './Components/Footer/footer';

export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Banner
        subTitle="MARCA TU"
        title="ESTILO PROPIO"
        banner={SLIDER}
      />
      <Nosotros />
      <Banner
        title="NOVEDOSOS Y BRILLANTES"
        banner={BANNERSillon}
      />
      <Productos />
      <Footer />
    </div>
  );
}
import "./Home.css";
import wallpaper from "../imgs/wallpaper.jpg";

function Home() {
  return (
    <div class="Main-Grid">
      <h1 className="Headline">Welcome to the Rick and Morty API </h1>

      <img className="Wallpaper" src={wallpaper} alt="Just another wallpaper" />
    </div>
  );
}

export default Home;

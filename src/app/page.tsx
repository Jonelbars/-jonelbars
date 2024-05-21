import Navbar from "./components/navbar/navbar";
import img1 from "./assets/img5.jpg";
import img2 from "./assets/img4.jpg";
import img3 from "./assets/img6.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="home flex justify-between items-center w-full px-[90px]">
        <div className="home-text">
            <h1 className="text-5xl font-black">Jonel Barrientos</h1>
            <p className="title">Front-End Developer</p>
            <p className="description">In the world of technology, the only limit is your own curiosity
                and determination to learn and grow.
            </p>
            <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                  </div>
                </div>
                <span>Email Me</span>
              </button>
        </div>

        <div className="home-images max-w-[50%] flex justify-center items-center">
            <img src={img1.src} alt="img1" className="h-[15rem] w-[12rem] bg-center bg-cover mr-[-2.7rem] img1
"/>
            <img src={img2.src} alt="img2" className="h-[21rem] w-[15rem] bg-cover bg-center mr-[-3.05rem] relative z-10 img2"/>
            <img src={img3.src} alt="img3" className="h-[15rem] w-[12rem] bg-cover bg-center img3" />
        </div>
    </section>

      
    </div>
  );
}

import { useState } from 'react'
import "./Wellcome.css"
import electronics from "../../assets/carousel/eletronics.png"
import jewelery from "../../assets/carousel/jewelry.jpg"
import men from "../../assets/carousel/menClothing.jpg"
import women from "../../assets/carousel/womenClothing.jpg"
import { useNavigate } from 'react-router-dom'

const Wellcome = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const navigate = useNavigate()

  const handleClick = (direction: string) => {
    // console.log(direction);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)

    }

  }

  // const myInterval = setInterval(() => handleClick('right'), 2500);


  return (
    <div className="wellcome_container">
      <button className='wellcome_Left' name="left" onClick={(e) => handleClick("left")}>L</button>
      <div className='wellcome_carousel' style={{ transform: `translateX(${slideIndex * -100}vw)` }}>

        <div className="wellcome_img right">
          <img src={electronics} alt="Electronic"/>
          <div className="wellcome_info">
            <h1>ElectronicS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque 
              felis imperdiet...</p>
            <button onClick={()=> navigate("categories/electronics")}>Shop Now</button>
          </div>
        </div>

        <div className="wellcome_img left">
          <img src={jewelery} alt="Jewelery"/>
          <div className="wellcome_info">
            <h1>JewelerY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque 
              felis imperdiet...</p>
            <button onClick={()=> navigate("categories/jewelery")}>Shop Now</button>
          </div>
        </div>

        <div className="wellcome_img right">
          <img src={men} alt="Men's Clothing"/>
          <div className="wellcome_info">
            <h1>Men's clothinG</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque 
              felis imperdiet...</p>
            <button onClick={()=> navigate("categories/men's%20clothing")}>Shop Now</button>
          </div>
        </div>

        <div className="wellcome_img left">
          <img src={women} alt="Women's Clothing"/>
          <div className="wellcome_info">
            <h1>Women's clothinG</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque 
              felis imperdiet...</p>
            <button onClick={()=> navigate("categories/women's%20clothing")}>Shop Now</button>
          </div>
        </div>

      </div>
      <button className='wellcome_Right' name="right" onClick={(e) => handleClick("right")}>R</button>
    </div>
  )
}

export default Wellcome

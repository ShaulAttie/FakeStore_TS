import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";

interface CategoryProps {
  category: string;
  key: number;
}

interface imgArr {
  type: string
  url: string
}


const Category: React.FC<CategoryProps> = ({ category }): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${category}`);
  };
  const array_emp: imgArr[] = [
    { type: "electronics", url: "carousel/EletronicsVintage.jpg" },
    { type: "jewelery", url: "carousel/jewelryVintage.jpg" },
    { type: "men", url: "carousel/MenClothingVintage.jpg" },
    { type: "women", url: "carousel/WomenClothingVintage.jpg" },
  ]

  const result = array_emp.find(item => item.type === category.split("'")[0])

  return (
    <div className="Category">
      <div className="Products__Category" onClick={handleClick}>
        <div className="category_img">
          <img src={result?.url} alt={result?.type}/>
        </div>
        <div className="category_title">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>
    </div>
  );
};

export { Category };

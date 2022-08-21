import "./ProdByCategory.css"

import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";

import { Product } from "../../containers/Product";

import { ctx } from "../../context";
import { StateInterface } from "../../globalTypes";

type categoryParams = {
  category: any;
}

const ProdByCategory: React.FC = (): JSX.Element => {
  const state = useContext(ctx) as StateInterface;
  
  const {category} = useParams<categoryParams>();
  
  return (
    <Fragment>
      <div className="ProductsByCategory_title">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
      {state.products.length ? (
        <div className="ProductsByCategory">
          {state.products.map(
            (product) =>
              product.category === category && (
                <Product
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rate={product.rating.rate}
                  pid={product.id}
                />
              )
          )}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Fragment>
  );
};

export { ProdByCategory };

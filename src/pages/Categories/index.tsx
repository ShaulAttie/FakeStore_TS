import React, { Fragment, useContext } from "react";
import { Category } from "../../components/Category";
import { ctx } from "../../context";
import { StateInterface } from "../../globalTypes";


const Categories: React.FC = (): JSX.Element => {
  const state = useContext(ctx) as StateInterface;
  const catArr: string[] = [];

  state.products.map((product) => {
    if (!catArr.includes(product.category)) {
      catArr.push(product.category);
    }
  });

  

  return (
    <Fragment>
      {catArr.length ? (
        <div className="categories">
          {catArr.map((category) => (
            <Category
              key={Math.random()}
              category={category}
              
            />
          ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Fragment>
  );
};

export { Categories };

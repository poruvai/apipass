import React, { useState, useEffect } from "react";

import "./Home.css";
import axios from "axios";
/*import { getAllproducts } from "../../Apiservice/Api";*/

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  /*  const fetchProducts = async () => {
      const data = await getAllproducts();
      console.log("data", "data");
    };
    */

    let fetchdata = async()=>{
      let response = await axios.get(`www.themealdb.com/api/json/v1/1/categories.php`)
      console.log(response)
    }

  }, []);

  return (
    <div className="product-grid">

      <div className="product">
        <img src="" alt="alternative" />
        <h2> sample</h2>
        <p>
          <span className="price">10</span>
        </p>
        <button>product Details</button>
      </div>
    </div>
  );
}

export default Home;

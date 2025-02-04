import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Descriptionpage() {
  const { id } = useParams();

  const [data, setdata] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((response) => {
        console.log(response.data);
         setdata(response.data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [ id]);


  const addToCardFunction = () => {
    axios
      .post("http://localhost:3000/cartdata",data)
      .then((res) => {
        console.log(res);
        alert("data added succesfully")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="d-sm-block d-lg-flex d-xl-flex d-xxl-flex row desck">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 col-8">
              <div className="d-sm-block d-lg-flex d-xl-flex row d-xxl-flex">
                <div className="col-sm-2 d-sm-flex d-lg-block col-2">
                  {data.image && data.image[0] && (
                    <img
                      src={data.image[0]}
                      alt=""
                      className="img-fluid mt-4"
                    />
                  )}
                  {data.image && data.image[1] && (
                    <img
                      src={data.image[1]}
                      alt=""
                      className="img-fluid mt-4"
                    />
                  )}
                  {data.image && data.image[2] && (
                    <img
                      src={data.image[2]}
                      alt=""
                      className="img-fluid mt-4"
                    />
                  )}
                  {data.image && data.image[3] && (
                    <img
                      src={data.image[3]}
                      alt=""
                      className="img-fluid mt-4"
                    />
                  )}
                  {data.image && data.image[4] && (
                    <img
                      src={data.image[4]}
                      alt=""
                      className="img-fluid mt-4"
                    />
                  )}
                </div>
                <div className="col-sm-12 mt-sm-3 col-lg-10 col-xl-10 col-xxl-10 col-10 ps-0">
                  {data.image && data.image[0] && (
                    <img
                      src={data.image[0]}
                      alt=""
                      className="img-fluid mt-4"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-sm-5 col-md-12 col-lg-4 col-xl-4 col-xxl-4 col-4">
              <div className="desc-heding">
                <p>
                  <span>{data.heding}</span>
                </p>
              </div>
              <div className="desc-title">
                <h1 className="h5">{data.title}</h1>
              </div>
              <div className="desc-price mt-3">
                <h5>
                  <span>${data.price}</span>
                </h5>
              </div>
              
              <div className="desc-button">
                <Link to={"/cart"}>
                  {" "}
                  <button className="button" onClick={addToCardFunction}>Add To Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="row">
            <h4>description</h4>
            <div>
              <hr />
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </div>
  );
}

export default Descriptionpage;

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import "./Productpage.css";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "../redux/actionType";
import Card from "react-bootstrap/Card";
import { Link, useSearchParams } from "react-router-dom";
import { searchContex } from "../Contex/Searchcontext";

function Productpage() {
  const { isLoading, isError, data } = useSelector((store) => store.reducer);
  const [currentcolor, setcurrentcolor] = useState(data.colors)
  const { searchvalue } = useContext(searchContex)
  const [search, setsearch] = useSearchParams();
  const [category, setcategory] = useState(search.getAll("category") || []);
  const [sort, setsort] = useState(search.get("sort") ||  null);
  const [page,setpage] = useState(1)


  const handlecolorchange = (e) => {
    setcurrentcolor(e)
  }
  const handlechange = (e) => {
    let { value } = e.target;
    let newcategory = [...category];

    if (newcategory.includes(value)) {
      newcategory = newcategory.filter((el) => el !== value);
    } else {
      newcategory.push(value);
    }
    setcategory(newcategory);
  };

  const dispatch = useDispatch();

  const GetdataFromServer = () => {
    dispatch({ type: GET_DATA_REQUEST, payload: true });
    axios
      .get("http://localhost:3000/product", {
        params: {
          category: search.getAll("category"),
          q: searchvalue,
            _page: page,
          _limit: 20,
          _sort: "price",
            _order:search.get("sort"),
        },
      })
      .then((res) => {
        dispatch({ type: GET_DATA_REQUEST, payload: false });
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_REQUEST, payload: false });
        dispatch({ type: GET_DATA_FAILURE, payload: false });
      });
  };

  useEffect(() => {
   let id = setTimeout(() => {
        GetdataFromServer();
    }, 1000);
  return () => clearInterval(id);
  }, [search, sort, searchvalue]);

  useEffect(() => {
    setsearch({ category,page,sort });
  }, [category,page,sort]);

  console.log(data);
  return isLoading ? (
    <h1>loading</h1>
  ) : isError ? (
    <h1>error</h1>
  ) : (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <h1
              style={{
                fontSize: "25px",
                color: "#50514F",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              NEW ARRIVALS
            </h1>
            <p style={{ textAlign: "justify" }}>
              Stay up-to-date with the latest and greatest in everything from
              wellness to the most advanced tech. With tons of new finds ready
              to be discovered, you are sure to find something unique for
              yourself and the perfect gift for the ones who keep up with what’s
              trending.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <select
              onChange={(e) => setsort(e.target.value)}
              id="mySelect"
              style={{
                width: "200px",
                height: "39px",
                fontSize: "11px",
                padding: "10px 12px 12px 12px",
                float: "right",
              }}
            >
              <option value="">select</option>
              <option value="asc" >
                Lowest Price
              </option>
              <option value="desc" >
                Highest Price
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 col-3">
            {/* <div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span> $50-$100</span> <br />
                    <input type="checkbox" />
                    <span> $100-$150</span>
                    <br />
                    <input type="checkbox" />
                    <span> $150-$200</span> <br />
                    <input type="checkbox" />
                    <span> $200-$300</span> <br />
                    <input type="checkbox" />
                    <span> $300-$500</span> <br />
                    <input type="checkbox" />
                    <span> Above $500</span> <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div> */}
            <div>
              <hr />
            </div>
            <div className="product-category">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="border-0 border-end-0">
                    Categories
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="checkbox" />
                    <span> Massage</span> <br />
                    <input
                      type="checkbox"
                      value={"Fitness"}
                      onChange={(e) => handlechange(e)}
                      checked={category.includes("Fitness")}
                    />
                    <span> Fitness</span>
                    <br />
                    <input
                      type="checkbox"
                      value={"wellness"}
                      onChange={(e) => handlechange(e)}
                      checked={category.includes("wellness")}
                    />
                    <span> Wellness</span> <br />
                    <input
                      type="checkbox"
                      value={"home"}
                      onChange={(e) => handlechange(e)}
                      checked={category.includes("home")}
                    />
                    <span> Home</span> <br />
                    <input
                      type="checkbox"
                      value={"technology"}
                      onChange={(e) => handlechange(e)}
                      checked={category.includes("technology")}
                    />
                    <span> Technology</span> <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div>
              <hr />
            </div>
          </div>
          <div
            className="col-sm-7 me-sm-5 ms-sm-0 col-md-7 col-lg-7 col-xl-7 col-xxl-7 col-7"
            style={{ marginLeft: "35px" }}
          >
            <div className="product">
              {data.map((e) => (
                <div key={e.id}>
                  <Link
                    to={`/description/${e.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card className="border-0 card">
                      <div className="card-image">
                        <img src={e.image} alt="" className="product-image-1" />
                        <img
                          src={e.hoverimage}
                          alt=""
                          className="product-image-2"
                        />
                      </div>
                      <Card.Body>
                        <Card.Text>
                          <button
                            style={{ backgroundColor: e.color }}
                            onChange={() => handlecolorchange(e)}
                          ></button>
                          <p>
                            <strong>{e.category}</strong>
                          </p>
                          <p style={{ width: "300px", height: "44px" }}>
                            {e.title}
                          </p>
                          <p style={{ width: "300px", height: "22px" }}>
                            {e.price}
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="pro-button">
            <div className="pagination">
              <button
                onClick={() => setpage(page - 1)}
                disabled={page === 1}
                className="pe-5 bg-light border-0 active bg-none"
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <button className="border-0 bg-light">{page}</button>
              <button
                onClick={() => setpage(page + 1)}
                disabled={page === 3}
                className="ps-5 bg-light border-0 active"
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productpage;

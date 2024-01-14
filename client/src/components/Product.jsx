import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function Products() {
  const navigate=useNavigate();
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      // console.log("token in shop",token)
      axios
        .get(
          `http://localhost:3000/fetch/products?page=${currentPage}&pageSize=${pageSize}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setLists(response.data.data.datas);
          console.log("total_pages", response.data.data.total_pages);
          setTotalPages(response.data.data.total_pages);
        })
        .catch((error) => {
          console.log("get error:", error.message ? error.message : error);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [currentPage, pageSize, loading]);

  const productsInRows = [];
  for (let i = 0; i < lists.length; i += 4) {
    const rowProducts = lists.slice(i, i + 4);
    productsInRows.push(rowProducts);
  }
  const handleOrderClick = (list) => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(`/order/product/${list._id}`);
    } else {
      // Redirect to the login page if there's no token
      navigate("/login");
    }
  };
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            {productsInRows.map((rowProducts, rowIndex) => (
              <div className="row" key={rowIndex}>
                {rowProducts.map((list, index) => (
                  <div className="col-md-3" key={index}>
                  <div className="card mb-3">
                      {/* <img src={`http://localhost:3000/uploads/products/}`} height={300} className="card-img-top" alt="..." /> */}
                       {/* <img src={`http://localhost:3000/uploads/products/${list.pimage}`}height={300}/> */}
                      <img src={list.pimage} height={300}/>
                      <div className="card-body">
                        <h5 className="card-title">{list.name}</h5>
                        <p className="card-text"><span className="text-warning">$</span>{list.price}</p>
                       
                      
                        <button
                          onClick={() => handleOrderClick(list)}
                          className="btn btn-primary"
                        >
                          View
                        </button>
                           

                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            ))}
                   <nav className="d-flex justify-content-center" aria-label="Page navigation">
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                  <Link
                    // to={`?page=${index + 1}`}
                    className="page-link"
                    onClick={() => (setCurrentPage(index + 1),setLoading(true))}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          </div>
          
        )}
      </div>
    </>
  );
}
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/partials/Sidebar";

const ProductContainer = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userDataNew =
      JSON.parse(localStorage.getItem("userData")) || undefined;
    setUserData(userDataNew.permissions);
  }, []);

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <Sidebar />
          </div>
          <div className="col-9 mt-3">
            <div>
              <h2>Product Lists</h2>
            </div>

            {typeof userData != "undefined" &&
              userData.includes("view_product") && (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Chicken burger</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Veg burger</td>
                    </tr>
                  </tbody>
                </table>
              )}

            {typeof userData === "undefined" ||
              (!userData.includes("view_product") && (
                <div className="alert alert-danger">
                  <strong>Sorry !! You are not permitted to view this</strong>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <BurgerBuilder /> */}
    </div>
  );
};

export default ProductContainer;

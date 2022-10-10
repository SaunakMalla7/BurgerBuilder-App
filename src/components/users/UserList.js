import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";

import getUserData from "../../services/users/userData";
import AssignRoleEdit from "./AssignRoleEdit";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  const [users, setUsers] = useState({
    userDataAll: [],
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleEditModal = () => setShowEditModal(true);

  useEffect(() => {
    let userData = { ...users };
    userData.userDataAll = getUserData();
    setUsers(userData);
  }, [setUsers]);

  const editUser = (item) => {
    setEditData(item);
    handleEditModal();
  };

  const deleteUser = (index) => {
    const userData = { ...users };
    userData.userDataAll.splice(index, 1);
    setUsers(userData);
    toast.success("User Deleted !", {
      position: toast.POSITION.RIGHT_CENTER,
      autoClose: 1000,
    });
  };

  const onSubmitAssignRoleEdit = (data) => {
    const userData = { ...users };
    for (let index = 0; index < userData.userDataAll.length; index++) {
      if (userData.userDataAll[index].id === data.id) {
        userData.userDataAll[index] = data;
      }
    }
    setUsers(userData);
    setShowEditModal(false);
    toast.success("Congratulation, Assigned Role Edited !", {
      position: toast.POSITION.RIGHT_CENTER,
    });
  };

  useEffect(() => {
    const userDataNew =
      JSON.parse(localStorage.getItem("userData")) || undefined;
    setUserData(userDataNew.permissions);
  }, []);

  return (
    <>
      <ToastContainer />

      {typeof userData != "undefined" && userData.includes("view_product") && (
        <>
          <div>
            <div className="float-left">
              {" "}
              <h2>User Lists</h2>
            </div>
            <div className="float-right"></div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.userDataAll.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.role != null ? item.role.name : "-"}</td>
                  <td>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => editUser(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {users.userDataAll.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-danger">
                    No Data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
      {typeof userData === "undefined" ||
        (!userData.includes("view_product") && (
          <div className="alert alert-danger">
            <strong>Sorry !! You are not permitted to view this</strong>
          </div>
        ))}
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={true}
        centered
      >
        <AssignRoleEdit
          onSubmitEdit={onSubmitAssignRoleEdit}
          onCloseEdit={handleCloseEditModal}
          user={editData}
        />
      </Modal>
    </>
  );
};

export default UserList;

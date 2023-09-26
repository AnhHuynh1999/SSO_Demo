import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import "./ManageUser.scss";
import CustomModalDelete from "../../components/CustomModalDelete/CustomModalDelete";
import ModalModify from "./ModalModify";
import _ from "lodash";
import userService from "../../sevices/userService";

const ManageUser = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [showModify, setShowModify] = useState(false);
  const [selectUpdateUser, setSelectUpdateUser] = useState({});

  useEffect(() => {
    getPageUser();
  }, []);

  const getPageUser = useCallback(
    async (currentPage) => {
      try {
        let res = await userService.getUser({
          page: currentPage || page,
          limit: limit,
        });
        setData(res.DT.users);
        setTotalPages(res.DT.totalPages);
      } catch (error) {
        toast.error(error.message);
      }
    },
    [page]
  );

  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    setPage(currentPage);
    getPageUser(currentPage);
  };

  const handleDeleteUser = async () => {
    try {
      await userService.deleteUser({ id: selectedUser.id });
      getPageUser();
      toast.success("Xoá người dùng thành công");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onHandleModify = (user = {}) => {
    setSelectUpdateUser(user);
    setShowModify(true);
  };

  const handleModify = async (values) => {
    try {
      if (_.isEmpty(selectUpdateUser)) {
        await userService.addUser(values);
        toast.success("Thêm người dùng thành công");
      } else {
        await userService.updateUser(values);
        toast.success("Cập nhật thông tin người dùng thành công");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id="manage-user">
      <div className="container">
        <h3 className="text-center">Danh sách người dùng</h3>
        <div className="m-3 d-flex gap-2">
          <button
            className="btn btn-outline-success"
            onClick={() => onHandleModify()}
          >
            <i className="fa-solid fa-plus mx-2"></i> Thêm người dùng
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => getPageUser()}
          >
            <i className="fa-solid fa-arrows-rotate mx-2"></i>
            Làm mới
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, index) => (
                <tr key={`user-${index}`}>
                  <th scope="row">{x.id}</th>
                  <td>{x.email}</td>
                  <td>{x.username}</td>
                  <td>{x.address}</td>
                  <td className="d-flex flex-row gap-2">
                    <button
                      className="btn btn-primary"
                      onClick={() => onHandleModify(x)}
                    >
                      {" "}
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setSelectedUser(x);
                        setShowDelete(true);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className=" text-center ">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={page - 1}
            pageCount={totalPages}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
        <CustomModalDelete
          show={showDelete}
          onClose={() => setShowDelete(false)}
          titleDelete={"Xoá người dùng"}
          contentDelete={"Bạn chắc chắn muốn xóa người dùng này"}
          handleDelete={handleDeleteUser}
        />
        <ModalModify
          user={selectUpdateUser}
          handleModify={handleModify}
          show={showModify}
          onClose={() => setShowModify(false)}
        />
      </div>
    </div>
  );
};

export default ManageUser;

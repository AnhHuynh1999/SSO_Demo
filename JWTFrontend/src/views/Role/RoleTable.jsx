import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import ReactPaginate from "react-paginate";
import roleService from "../../sevices/roleService";
import { toast } from "react-toastify";
import CustomModalDelete from "../../components/CustomModalDelete/CustomModalDelete";

const RoleTable = (props, ref) => {
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedRole, setSelectedRole] = useState({});
  const [showDelete, setShowDelete] = useState(false);
  useEffect(() => {
    getPageRole();
  }, []);

  useImperativeHandle(ref, () => ({
    loadData(){
      getPageRole()
    }
  }))

  const getPageRole = useCallback(
    async (currentPage) => {
      try {
        let res = await roleService.getRoles({
          page: currentPage || page,
          limit: limit,
        });
        setData(res.DT.roles);
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
    getPageRole(currentPage);
  };

  const handleDeleteRole = async () => {
    try {
      await roleService.deleteRole({ id: selectedRole.id });
      getPageRole();
      toast.success("Xoá nhóm quyền thành công");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container-role-table">
      <h3>Danh sách quyền</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Url</th>
            <th scope="col">Mô Tả</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((x, index) => (
              <tr key={`user-${index}`}>
                <th scope="row">{x.id}</th>
                <td>{x.url}</td>
                <td>{x.description}</td>
                <td className="d-flex flex-row gap-2">
                  <button
                    className="btn btn-primary"
                    // onClick={() => onHandleModify(x)}
                  >
                    {" "}
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setSelectedRole(x);
                      setShowDelete(true);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          {data?.length === 0 && (
            <tr>
              <td colSpan={5}>Không có dữ liệu</td>
            </tr>
          )}
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
        <CustomModalDelete
          show={showDelete}
          onClose={() => setShowDelete(false)}
          titleDelete={"Xoá nhóm quyền"}
          contentDelete={"Bạn chắc chắn muốn xóa nhóm quyền này"}
          handleDelete={handleDeleteRole}
        />
      </div>
    </div>
  );
};

export default forwardRef(RoleTable);

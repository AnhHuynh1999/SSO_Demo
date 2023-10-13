import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import "./ManageSkill.scss";
import CustomModalDelete from "../../components/CustomModalDelete/CustomModalDelete";
import ModalModify from "./ModalModify";
import _ from "lodash";
import skillService from "../../sevices/skillService";

const ManageSkill = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState({});
  const [showModify, setShowModify] = useState(false);
  const [selectUpdateSkill, setSelectUpdateSkill] = useState({});

  useEffect(() => {
    getPageSkill();
  }, []);

  const getPageSkill = useCallback(
    async (currentPage) => {
      try {
        let res = await skillService.getSkill({
          page: currentPage || page,
          limit: limit,
        });
        setData(res.DT.skills);
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
    getPageSkill(currentPage);
  };

  const handleDeleteUser = async () => {
    try {
      await skillService.deleteSkill({ id: selectedSkill.id });
      getPageSkill();
      toast.success("Xoá kỹ năng thành công");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onHandleModify = (user = {}) => {
    setSelectUpdateSkill(user);
    setShowModify(true);
  };

  const handleModify = async (values) => {
    try {
      if (_.isEmpty(selectUpdateSkill)) {
        await skillService.addSkill(values);
        toast.success("Thêm kỹ năng thành công");
      } else {
        await skillService.updateSkill(values);
        toast.success("Cập nhật kỹ năng thành công");
      }
      getPageSkill()
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id="manage-skill">
      <div className="container">
        <h3 className="text-center">Danh sách kỹ năng</h3>
        <div className="m-3 d-flex gap-2">
          <button
            className="btn btn-outline-success"
            onClick={() => onHandleModify()}
          >
            <i className="fa-solid fa-plus mx-2"></i> Thêm kỹ năng
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => getPageSkill()}
          >
            <i className="fa-solid fa-arrows-rotate mx-2"></i>
            Làm mới
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên</th>
              <th scope="col">Độ thông thạo</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, index) => (
                <tr key={`user-${index}`}>
                  <th scope="row">{x.id}</th>
                  <td>{x.name}</td>
                  <td>{x.proficiency}</td>
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
                        setSelectedSkill(x);
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
        </div>
        <CustomModalDelete
          show={showDelete}
          onClose={() => setShowDelete(false)}
          titleDelete={"Xoá kỹ năng"}
          contentDelete={"Bạn chắc chắn muốn xóa kỹ năng này"}
          handleDelete={handleDeleteUser}
        />
        <ModalModify
          skill={selectUpdateSkill}
          handleModify={handleModify}
          show={showModify}
          onClose={() => setShowModify(false)}
        />
      </div>
    </div>
  );
};

export default ManageSkill;

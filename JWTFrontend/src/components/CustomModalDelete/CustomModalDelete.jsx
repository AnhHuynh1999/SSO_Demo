import { Modal } from "react-bootstrap";

const CustomModalDelete = ({
  show,
  titleDelete,
  contentDelete,
  handleDelete,
  onClose,
}) => {
  const onHandleDelete = () => {
    handleDelete();
    onClose();
  };
  return (
    <Modal show={show} centered>
      <Modal.Header className="">{titleDelete || "Xóa"}</Modal.Header>
      <Modal.Body className="text-center">
        {contentDelete || "Bạn chắc chắn muốn xóa không"}
        <hr />
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-danger" onClick={() => onHandleDelete()}>
            Xóa
          </button>
          <button className="btn btn-light" onClick={onClose}>
            Đóng
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModalDelete;

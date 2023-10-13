import { useEffect, useMemo } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import _ from "lodash";
import CustomInput from "../../components/CustomInput";

const ModalModify = ({ show, skill, handleModify, onClose }) => {
  const methods = useForm();
  const isAdd = useMemo(() => (_.isEmpty(skill) ? true : false), [skill]);

  useEffect(() => {
    methods.reset(isAdd ? {} : skill);
  }, [isAdd]);
  const onSubmit = (values) => {
    onClose();
    handleModify(values);
  };

  return (
    <Modal show={show} size="lg" scrollable>
      <ModalHeader>
        {isAdd ? "Thêm kỹ năng" : "Sửa thông tin kỹ năng"}
      </ModalHeader>
      <ModalBody>
        <FormProvider {...methods}>
          <form id="form-user" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-sm-6">
                <label htmlFor="email">
                  Tên<span className="text-required">*</span>
                </label>
                <CustomInput
                  id="name"
                  field={"name"}
                  className="form-control"
                  validate={{
                    required: "Bắt buộc phải nhập email",
                  }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="proficiency">
                  Độ thông thạo <span className="text-required">*</span>
                </label>
                <CustomInput
                  id="proficiency"
                  field={"proficiency"}
                  className="form-control"
                  validate={{
                    required: "Bắt buộc phải nhập số điện thoại",
                  }}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </ModalBody>
      <ModalFooter>
        <button
          className={`btn btn-${isAdd ? "success" : "primary"}`}
          form="form-user"
        >
          {isAdd ? "Thêm" : "Sửa"}
        </button>
        <button className="btn btn-secondary" onClick={onClose}>
          Đóng
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalModify;

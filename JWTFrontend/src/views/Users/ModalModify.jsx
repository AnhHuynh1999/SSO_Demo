import { useEffect, useMemo, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import _ from "lodash";
import CustomInput from "../../components/CustomInput";
import { listSex, regexEmail, regexPhone } from "../../ulits/contants";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { toast } from "react-toastify";
import { getGroup } from "../../sevices/group";
import { customMapSelect } from "../../ulits/helper";

const ModalModify = ({ show, user, handleModify, onClose }) => {
  const methods = useForm();
  const isAdd = useMemo(() => (_.isEmpty(user) ? true : false), [user]);

  const [listGroup, setListGroup] = useState([]);
  useEffect(() => {
    methods.reset(isAdd ? {} : { ...user, groupId: user.Group?.id });
  }, [isAdd]);

  useEffect(() => {
    if (show) {
      loadGroup();
    }
  }, [show]);

  const loadGroup = async () => {
    try {
      const res = await getGroup();
      setListGroup(res.DT);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = (values) => {
    onClose();
    handleModify(values);
  };

  return (
    <Modal show={show} size="lg" scrollable>
      <ModalHeader>
        {isAdd ? "Thêm người dùng" : "Sửa thông tin người dùng"}
      </ModalHeader>
      <ModalBody>
        <FormProvider {...methods}>
          <form id="form-user" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-sm-6">
                <label htmlFor="email">
                  Email<span className="text-required">*</span>
                </label>
                <CustomInput
                  id="email"
                  field={"email"}
                  className="form-control"
                  validate={{
                    required: "Bắt buộc phải nhập email",
                    pattern: {
                      value: regexEmail,
                      message: "Email không đúng định dạng",
                    },
                  }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="phone">
                  Số điện thoại <span className="text-required">*</span>
                </label>
                <CustomInput
                  id="phone"
                  field={"phone"}
                  className="form-control"
                  validate={{
                    required: "Bắt buộc phải nhập số điện thoại",
                    pattern: {
                      value: regexPhone,
                      message: "Số điện thoại không đúng định dạng",
                    },
                  }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="username">Tên tài khoản</label>
                <CustomInput
                  id="username"
                  field={"username"}
                  className="form-control"
                />
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="password">
                  Mật khẩu <span className="text-required">*</span>
                </label>
                <CustomInput
                  id="password"
                  field={"password"}
                  className="form-control"
                  type="password"
                />
              </div>
              <div className="col-12">
                <label htmlFor="address">Địa chỉ</label>
                <CustomInput
                  field={"address"}
                  id="address"
                  className="form-control"
                />
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="sex">Giới tính</label>
                <CustomSelect list={listSex} id="sex" field={"sex"} />
              </div>
              <div className="col-12 col-sm-6">
                <label htmlFor="group">Nhóm người dùng</label>
                <CustomSelect
                  id="group"
                  field={"groupId"}
                  list={customMapSelect(listGroup, "name", "id")}
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

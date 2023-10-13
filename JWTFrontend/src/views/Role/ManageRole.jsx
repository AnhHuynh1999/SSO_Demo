import "./ManageRole.scss";
import { useRef, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import roleService from "../../sevices/roleService";
import RoleTable from "./RoleTable";

const ManageRole = () => {
  const dataChildDefault = {
    url: "",
    description: "",
    isValiUrl: true,
  };
  const refTable = useRef()
  const [listChilds, setListChilds] = useState({
    [`child-${uuidv4()}`]: dataChildDefault,
  });
  const onChangeInput = (name, value, key) => {
    let _listChild = _.cloneDeep(listChilds);
    _listChild[key][name] = value;
    if (value && name === "url") _listChild[key].isValiUrl = true;
    setListChilds(_listChild);
  };

  const handleAddNewInput = () => {
    const id = uuidv4();
    setListChilds((prev) => ({
      ...prev,
      [`child-${id}`]: dataChildDefault,
    }));
  };

  const handleDeleteInput = (key) => {
    let _listChild = _.cloneDeep(listChilds);
    delete _listChild[key];
    setListChilds(_listChild);
  };

  const buildDataToPersist = () => {
    let _listChilds = _.cloneDeep(listChilds);
    let result = [];
    for (let key in _listChilds) {
      result.push({
        url: _listChilds[key].url,
        description: _listChilds[key].description,
      });
    }
    return result;
  };

  const handleSave = async () => {
    try {
      let _listChild = _.cloneDeep(listChilds);
      let check = true;
      for (let key in _listChild) {
        if (!_listChild[key].url) {
          _listChild[key].isValiUrl = false;
          check = false;
        } else {
          _listChild[key].isValiUrl = true;
        }
      }
      setListChilds(_listChild);

      if (check) {
        //Call api
        const data = buildDataToPersist(listChilds);
        console.log("data", data);
        const res = await roleService.createRoles(data);
        if (res && res.EC === 0) {
          toast.success(res.EM);
          refTable.current.loadData()
        }
      } else {
        toast.error("Trường URL không được để trống");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="role-container">
      <div className="container">
        <div className="row mt-3">
          <div className="title-role">
            <h4>Add a new role ....</h4>
          </div>
          <div className=" role-parent">
            {Object.entries(listChilds).map(([key, child], index) => (
              <div key={`child-${key}`} className="row role-child">
                <div className=" col-12 col-sm-5">
                  <label htmlFor="url">
                    URL:<span className="text-required">*</span>
                  </label>
                  <input
                    id="url"
                    type="text"
                    defaultValue={child.url}
                    className={`form-control ${
                      child.isValiUrl || "is-invalid"
                    }`}
                    onChange={(e) => onChangeInput("url", e.target.value, key)}
                  />
                </div>
                <div className=" col-12 col-sm-5">
                  <label htmlFor="description">Mô tả:</label>
                  <input
                    id="description"
                    type="text"
                    defaultValue={child.description}
                    className="form-control"
                    onChange={(e) =>
                      onChangeInput("description", e.target.value, key)
                    }
                  />
                </div>
                <div className="col-12 col-sm-2 mt-4 actions">
                  <i
                    className="fa-solid fa-plus add"
                    onClick={() => handleAddNewInput()}
                  ></i>
                  {index > 0 && (
                    <i
                      className="fa-solid fa-trash delete"
                      onClick={() => handleDeleteInput(key)}
                    ></i>
                  )}
                </div>
              </div>
            ))}

            <div>
              <button
                className="btn btn-warning mt-3"
                onClick={() => handleSave()}
              >
                Lưu
              </button>
            </div>
          </div>
          <RoleTable ref={refTable} />
        </div>
      </div>
    </div>
  );
};

export default ManageRole;

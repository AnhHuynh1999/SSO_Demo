import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import groupService from "../../sevices/groupService";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import roleService from "../../sevices/roleService";
import _ from "lodash";
const AssignRole = () => {
  const [groups, setGroups] = useState([]);
  const [selectGroup, setSelectGroup] = useState({});
  const [roleByGroup, setRoleByGroup] = useState([]);
  const [roles, setRoles] = useState([]);
  const [assignRole, setAssignRole] = useState([]);
  useEffect(() => {
    loadGroup();
    loadRole();
  }, []);

  const loadRole = async () => {
    try {
      const res = await roleService.getRoles();
      setRoles(res.DT);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const loadGroup = async () => {
    try {
      const res = await groupService.getGroup();
      setGroups(res.DT);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const buildToRole = (roleByGroup, roles) => {
    return roles.map((x) => ({
      ...x,
      isAssign: roleByGroup.some((item) => item.url === x.url),
    }));
  };

  const loadRoleByGroup = async (id) => {
    try {
      const res = await roleService.getRoleByGroup(id);
      setRoleByGroup(res.DT.Roles);
      let data = buildToRole(res.DT.Roles, roles);
      console.log("data", data);
      setAssignRole(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSelectGroup = (value) => {
    setSelectGroup(value);
    if (value) {
      loadRoleByGroup(value);
    }
  };

  const handleCheckRole = (url) => {
    let _assignRole = _.cloneDeep(assignRole);
    const index = _assignRole.findIndex((x) => x.url === url);
    if (index > -1) {
      {
        _assignRole[index].isAssign = !_assignRole[index].isAssign;
        setAssignRole(_assignRole);
      }
    }
  };

  const handleSave = async () => {
    try {
      let data = [];
      assignRole.forEach((x) => {
        if (x.isAssign) {
          data.push({
            roleId: x.id,
            groupId: selectGroup,
          });
        }
      });
      await roleService.assignRoleToGroup(data);
      toast.success("Cập nhật quyền thành công");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container-assign-role">
      <div className="container">
        <h3>Phân quyền cho nhóm quyền</h3>
        <select
          className="form-select"
          onChange={(e) => handleSelectGroup(e.target.value)}
        >
          <option value={""}>Chọn nhóm quyền</option>
          {groups.map((group, index) => (
            <option key={`select-${index}`} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
        <hr />
        {assignRole.length > 0 && (
          <div>
            <h3>Danh sách các quyền</h3>
            {assignRole.map((x, index) => (
              <div key={`check-${index}`} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={x.isAssign}
                  id={`flexCheckDefault-${index}`}
                  onChange={() => handleCheckRole(x.url)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexCheckDefault-${index}`}
                >
                  {x.url}
                </label>
              </div>
            ))}
            <button className="btn btn-warning" onClick={() => handleSave()}>
              Lưu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignRole;

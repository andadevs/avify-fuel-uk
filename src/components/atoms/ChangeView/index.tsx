import { type FC, useState } from "react";
import { Switch } from "antd";
import { BarChartOutlined, WindowsOutlined } from "@ant-design/icons";
import "./style.css";
import { IChangeViewProps } from "./type";

const ChangeView: FC<IChangeViewProps> = ({ changeHandler }) => {
  const [enabled, setEnabled] = useState(true);

  const changeViewHandler = () => {
    setEnabled((prevState) => !prevState);
    changeHandler();
  };

  return (
    <div className="change-view">
      <span className="label">Change View</span>
      <Switch
        className="switch"
        checkedChildren={<WindowsOutlined />}
        unCheckedChildren={<BarChartOutlined />}
        value={enabled}
        onChange={changeViewHandler}
      />
    </div>
  );
};

export default ChangeView;

import { type FC, useState } from "react";
import { Switch } from "antd";
import { BarChartOutlined, WindowsOutlined } from "@ant-design/icons";
import "./style.css";
import { IChangeViewProps } from "./type";
import clsx from "clsx";

const ChangeView: FC<IChangeViewProps> = ({ changeHandler }) => {
  const [enabled, setEnabled] = useState(true);

  const changeViewHandler = () => {
    setEnabled((prevState) => !prevState);
    changeHandler();
  };

  return (
    <div className="change-view">
      <span className={clsx("label", enabled ? "active" : "inactive")}>
        Change View
      </span>
      <Switch
        data-testid="change-view-switch"
        className={clsx("switch", enabled ? "active" : "inactive")}
        checkedChildren={<WindowsOutlined />}
        unCheckedChildren={<BarChartOutlined />}
        value={enabled}
        onChange={changeViewHandler}
      />
    </div>
  );
};

export default ChangeView;

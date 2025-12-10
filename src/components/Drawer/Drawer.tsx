import React from "react";

import IconFontAwesome from "../ui-kits/IconfontAwesome";
import "./Drawer.scss";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "xl";
  children?: React.ReactNode;
  title?:string
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  size = "md",
  children,title
}) => {
  return (
    <div className={`drawer-overlay ${isOpen ? "open" : ""}`}>
      <div className={`drawer ${size} ${isOpen ? "open" : ""}`}>
        <div
          className=" d-flex justify-content-start gap-2 p-1"
          style={{ marginTop: 65, borderBottom: "1px solid #eee" ,backgroundColor:"#5a555511"}}
          onClick={onClose}
        >
          <div>
            <IconFontAwesome
              iconName="faArrowAltCircleLeft"
              // color="green"
              onClick={onClose}
              size="2xl"
            />
          </div>{" "}
          <div>
            {" "}
            <h4>{title}</h4>
          </div>
        </div>
        <div className="drawer__content p-4 ">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;

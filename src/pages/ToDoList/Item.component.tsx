import { useState } from "react";
import CircleSvg from "../../assets/circle-regular.svg";
import CircleCheckedSvg from "../../assets/circle-check-regular.svg";
import XMark from "../../assets/xmark-solid.svg";

const Item = (props: {
  item: { content: string; index: number };
  deleteFct: (index: number) => void;
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="item">
        <div
          className={`content ${checked ? "checked" : ""}`}
          onClick={() => {
            setChecked(!checked);
          }}
        >
          <img
            src={checked ? CircleCheckedSvg : CircleSvg}
            alt="Notchecked Svg"
            className="svg"
          />
          {props.item.content}
        </div>

        <div>
          <img
            src={XMark}
            className="svg"
            onClick={() => {
              props.deleteFct(props.item.index);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Item;

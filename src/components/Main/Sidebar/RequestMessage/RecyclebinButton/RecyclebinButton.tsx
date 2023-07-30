import { FC, SyntheticEvent } from "react";

interface IRecyclebinButton {
  onClick?: (e: SyntheticEvent) => void;
}

const RecyclebinButton: FC<IRecyclebinButton> = ({ onClick }) => {
  return (
    <div className="sidebar__recyclebin-fade">
      <button className="sidebar__recyclebin-button" onClick={onClick} />
    </div>
  );
};

export default RecyclebinButton;

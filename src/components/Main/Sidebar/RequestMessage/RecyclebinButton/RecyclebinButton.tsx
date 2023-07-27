import { FC, MouseEventHandler } from "react";

interface IRecyclebinButton {
  // onClick?: MouseEventHandler<HTMLButtonElement>;
  onClick?: any;
}

const RecyclebinButton: FC<IRecyclebinButton> = ({onClick}) => {
  return (
    <button className='sidebar__recyclebin-button' onClick={onClick}/>
  );
};

export default RecyclebinButton;

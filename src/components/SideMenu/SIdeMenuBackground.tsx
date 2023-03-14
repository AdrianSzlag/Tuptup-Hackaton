import { useEffect, useState } from "react";

interface Props {
  active: boolean;
  onClick: () => void;
}

const SideMenuBackground = ({ active, onClick }: Props) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!active) setTimeout(() => setHidden(true), 250);
    else setHidden(false);
  }, [active]);

  return (
    <div
      className={`${active ? "bg-black/70" : "bg-black/0"}
      ${hidden ? "w-0 h-0" : "right-0 bottom-0"}
      fixed left-0 top-0  transition-colors duration-300`}
      onClick={() => onClick && onClick()}
    ></div>
  );
};

export default SideMenuBackground;

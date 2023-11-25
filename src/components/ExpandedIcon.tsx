import { BsChevronDown, BsChevronUp } from "react-icons/bs";

type ExpandIconProps = {
  isExpanded: boolean;
  handleClick: () => void;
};

const ExpandedIcon = ({ isExpanded, handleClick }: ExpandIconProps) => {
  return isExpanded ? (
    <BsChevronUp onClick={handleClick} />
  ) : (
    <BsChevronDown onClick={handleClick} />
  );
};

export default ExpandedIcon;

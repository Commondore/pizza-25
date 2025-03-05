import * as Icons from "react-icons/fa";

export type IconType = keyof typeof Icons;

interface Props {
  name: keyof typeof Icons;
  className?: string;
}

export const DynamicIcon = ({ name, className }: Props) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
};

interface Props {
  type: string;
}

export const Ingredient = ({ type }: Props) => {
  return <img src={`/img/${type}.png`} alt={type} />;
};

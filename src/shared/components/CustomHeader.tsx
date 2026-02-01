interface Props {
  title?: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {/**Si la descripción existe se añade */}
      {description && <p>{description}</p>}
    </div>
  );
};

export const Books = (props) => {
  console.log(props);
  const { image, title, authur, number } = props;
  return (
    <article className="books">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>By</p>
      <h2>{authur}</h2>
      <span>{`# ${number + 1}`}</span>
    </article>
  );
};

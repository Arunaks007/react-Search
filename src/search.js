function search(props) {
  return (
    <>
      <div>
        Search: <input type="text" onChange={props.onChange} />
      </div>
      {props.data.map((item) => (
        <div className="item">{item}</div>
      ))}
    </>
  );
}

export default search;

const Child = ({ data }) => {
  const childData = () => {
    data("Text from child Data");
  };
  return (
    <>
      <div>Child</div>
      <button onClick={childData}>Change Parent Value</button>
    </>
  );
};
export default Child;

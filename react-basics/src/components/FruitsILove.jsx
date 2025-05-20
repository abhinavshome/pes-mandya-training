const FruitsILove = () => {
  const fruits = ["Apple", "Bananna", "Guava", "Watermelon", "Grapes"];
  return (
    <div>
      These are the fruits I love -
      <ul>
        {fruits.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsILove;

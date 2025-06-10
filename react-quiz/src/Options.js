function Options({ question }) {
  console.log(question);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={"btn btn-option"}
          key={option}
          //   onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

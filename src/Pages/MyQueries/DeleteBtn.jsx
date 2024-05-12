
const DeleteBtn = () => {
  return (
    <div>
      <button className="deleteBtn">
        <div className="left"></div>
        Delete <div className="right"></div>
      </button>

      <a target="_blank">
        <svg
          style={{
            width: "1em",
            height: "1em",
            top: "1em",
            left: "1em",
            opacity: "0.8",
          }}
          viewBox="0 0 24 24"
        ></svg>
      </a>
    </div>
  );
};

export default DeleteBtn;

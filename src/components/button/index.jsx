const StyledButton = ({ children, onClick, bg, hover, activeState }) => {
  const activeStyle = activeState === true ? "brightness-[120%]" : null;

  return (
    <button
      className={`${bg} ${hover} ${activeStyle} transition-[filter] rounded-3xl p-4 min-w-[7rem] w-fit h-fit`}
      onClick={onClick ?? null}
    >
      <span>{children}</span>
    </button>
  );
};

export default StyledButton;

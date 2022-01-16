export default function Button({
  text,
  loading,
  classes = "",
  functionToExecute = null,
  cancel = false,
}) {
  return (
    <button
      disabled={loading}
      className={loading ? `${classes} button_disabled` : classes}
      onClick={functionToExecute}
    >
      {loading && !cancel ? "Loading..." : text}
    </button>
  );
}

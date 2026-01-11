export default function CounterButton({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)}>
      {value > 0 ? `+${value}` : value}
    </button>
  );
}
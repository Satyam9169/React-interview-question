// BONUS — Performance Bug (Very Heavy Render)
export default function Bug8() {
  const bigArray = new Array(50000).fill(0).map((_, i) => i);

  return (
    <>
      <h2>Rendering...</h2>
      {bigArray.map(n => <p key={n}>{n}</p>)} {/* ❌ Too heavy */}
    </>
  );
}

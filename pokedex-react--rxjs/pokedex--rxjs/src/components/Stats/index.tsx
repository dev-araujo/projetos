import "./styles.scss"
function Stats({ stat, name }: StatsProps) {
  return (
    <section className="status">
      <p>{name}</p>
      <strong>
        {stat}
        <progress className="status__progressbar" value={stat} max="100"></progress>
      </strong>
    </section>
  );
}

export default Stats;

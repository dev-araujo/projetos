function Types({ pokemon }: any) {
  return (
    <section>
      {pokemon.map((poke: any) => {
        return Object.values(poke?.type).map((type: any) => {
          return (
            <span key={type} className="badge">
              <span id="badge" className={type.toLocaleLowerCase()}>{type}</span>
            </span>
          );
        });
      })}
    </section>
  );
}

export default Types;

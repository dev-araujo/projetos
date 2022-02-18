
function HeaderName({pokemon}:any) {
  return (
    <header className="pokemon__names">
      {pokemon.map((poke: any) => {
        return (
          <div key={poke?.name}>
            <h1 className="slideInLeft">{poke?.name}</h1>
            <h2 className="slideInRight">{poke?.name}</h2>
          </div>
        );
      })}
    </header>
  );
}

export default HeaderName

const PokemonResolve = ({ pokemon: { name, sprites, stats } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        width={240}
      />
      <ul>
        {stats.map(({ stat, base_stat }) => (
          <li key={stat.name}>{`${stat.name}:  ${base_stat}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonResolve;

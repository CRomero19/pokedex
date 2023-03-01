export const getTypeColor = (type: string) => {
  switch (type) {
    case "fire":
      return "#fd7d24";
    case "water":
      return "#4593c4";
    case "ground":
      return "#aa9941";
    case "grass":
      return "green";
    case "bug":
      return "#91c12f";
    case "rock":
      return "#a38c22";
    case "electric":
      return "#eed435";
    case "psychic":
      return "#f466ba";
    case "fighting":
      return "#BF5C1E";
    case "normal":
      return "#DAA06D";
    case "ice":
      return "#2CD1CB";
    case "dragon":
      return "#D12C5E";
    case "poison":
      return "#b881c4";
    case "fairy":
      return "#fdb9ea";
    case "steel":
      return "#9db8b7";
    case "dark":
      return "#707070";
    case "ghost":
      return "#7a649e";
    case "flying":
      return "#8aaae3";
      /* linear-gradient(to bottom, #8eaceb 0%,#8eaceb 50%,#bdb9b8 50%,#bdb9b8 50%,#bdb9b8 100%) */
    default: return ''
  }
}


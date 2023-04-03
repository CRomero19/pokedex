import { Link, useNavigate, useParams } from "react-router-dom";
import { StyledPokePageHeader } from "./style";
import TagType from "../../Components/TagType/TagType";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { v1 as uuidv1 } from "uuid";

export const PokePageHeader = ({ pokeUrl,pokeName,pokeId,pokeTypes }:any) => {

  return (
    <StyledPokePageHeader>

        <button onClick={() => location.reload()}>
          <Link to={`/home/poke/${Number(pokeUrl) - 1}`}>
            {" "}
            <FaAngleDoubleLeft color="var(--color-grey-0)" />{" "}
          </Link>
        </button>
        <h1>
          {" "}
          {pokeName} <span> Nº{pokeId} </span>{" "}
        </h1>
        <div className="types">
          {pokeTypes != undefined ? (
            pokeTypes.map((type:any) => (
              <TagType key={uuidv1()} textType={type.type.name} />
            ))
          ) : (
            <p> carregando...</p>
          )}
        </div>

        <button onClick={() => location.reload()}>
          <Link to={`/home/poke/${Number(pokeUrl) + 1}`}>
            {" "}
            <FaAngleDoubleRight color="var(--color-grey-0)" />{" "}
          </Link>
        </button>
    </StyledPokePageHeader>
  );
};

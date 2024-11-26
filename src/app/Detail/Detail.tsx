import style from "./Detail.module.css";
import { Loading } from "../../components/Loading/Loading";
import Blob from "../../assets/blob.svg";
import { Link, useParams } from "react-router";
import { useFindCountry } from "../../apollo/graphql/findCountry/useFindCountry";
import { Weather } from "../../components/Weather/Weather";

export const Detail = () => {
  const { code } = useParams();

  const { detail, loading, error } = useFindCountry({ code });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{`No country found`}</h1>;
  }
  
  return (
    <>
      {detail && (
        <div className={style.container}>
          <img className={style.blobOne} src={Blob} alt="Blob" />
          <img className={style.blobTwo} src={Blob} alt="Blob" />
          <h1>{detail.name}</h1>
          <div className={style.containerItems}>
            <div>
              <h2>Capital:</h2>
              <span>{detail.capital}</span>
            </div>
            <div>
              <h2>Moneda:</h2>
              <span>{detail.currency}</span>
            </div>
            <div>
              <h2>Continent:</h2>
              <span>{detail.continent.name}</span>
            </div>
            <div>
              <h2>Lenguajes:</h2>
              <ul>
                {detail.languages.map((language) => (
                  <li key={language.name}>{language.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <Weather capital={detail.capital} />
          <div className={style.containerStates}>
            <h2>States:</h2>
            <ul>
              {detail.states.map((state, index) => (
                <li key={index}>
                  {state.name}
                  <br />
                </li>
              ))}
              {detail.states.length === 0 && <li>No states</li>}
            </ul>
          </div>
          <Link className={style.btn} to="/">
            Back
          </Link>
        </div>
      )}
    </>
  );
};

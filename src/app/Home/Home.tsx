import { Title } from "../../components/Title/Title";
import { Search } from "../../components/SearchBar/SearchBar";

import style from "./Home.module.css";
import Blob from "../../assets/blob.svg";

import { useAllCountries } from "../../apollo/graphql/allCountries/useAllCountries";
import { Loading } from "../../components/Loading/Loading";

export const Home = () => {
  const { loading, data, error } = useAllCountries();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{`No country found`}</h1>;
  }

  return (
    <div className={style.container}>
      <img className={style.blobOne} src={Blob} alt="Blob" />
      <img className={style.blobTwo} src={Blob} alt="Blob" />
      <Title contain={"Country search"} size={"extralarge"} />
      <Search type={"text"} data={data} loading={loading} />
    </div>
  );
};

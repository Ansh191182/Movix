import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
  const [endPoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel endPoint={endPoint} data={data?.results} loading={loading} />
    </div>
  );
};

export default TopRated;

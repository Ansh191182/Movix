import { useEffect, useRef, useState } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadimages/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
  const [background, setBackground] = useState(null);
  // const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((store) => store.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  //Using a useRef for taking the currernt value from the  search input
  const query = useRef("");

  const handleClick = () => {
    query.current.focus();
  };
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.current.value.length > 0) {
      navigate(`/search/${query.current.value}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          {background && <Img src={background} />}
        </div>
      )}
    <div className="opacity-layer"></div>
      <ContentWrapper>
        {" "}
        <div className="heroBannnerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover, Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              ref={query}
              onChange={handleClick}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;

import useFetch from "../../hooks/useFetch";
import "./Details.scss";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailaBanner/DetailBanner";
import Cast from "./cast/Cast";
import VideosSection from "../../components/videoSection/VideoSection";
import Similar from "../../components/Carousels/Similar";
import Recommendation from "../../components/Carousels/Recomndation";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  // Check if credits is available and has the cast property
  const castData = credits && credits.cast ? credits.cast : [];

  return (
    <div>
      <DetailsBanner video={data?.result?.[0]} crew={credits?.crew} />
      <Cast data={castData} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;

import React, { useEffect } from "react";
import ProductInfo from "../../src/components/Product/ProductV1/ProductInfo";
import ProductRelatedItems from "../../src/components/Product/ProductV1/ProductRelatedItems";
import ProductTabs from "../../src/components/Product/ProductV1/ProductTabs";
import Layouts from "../../src/layouts/Layouts";
import { countdown } from "../../src/utils";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { useVideo } from "../../src/services/videos";
const Product05 = () => {
  const router = useRouter();
  const { id } = router.query;

  const { videoResults } = useVideo();
  const singleVid = videoResults?.filter((item) => item?.videoId == id);
  const filteredVideos = videoResults?.filter(
    (item) => item.userId == singleVid[0]?.userId
  );

  function transformURL(url) {
    const regex = /\/video\/user_\w+\/\w+\/(\w+)/;
    const match = url?.match(regex);

    if (match && match.length > 1) {
      const videoId = match[1];
      const transformedURL = `https://player.thetavideoapi.com/video/${videoId}`;
      return transformedURL;
    }

    return null; // URL format doesn't match the expected pattern
  }

  // Example usage

  // Example usage
  const originalURL =
    "https://player.thetavideoapi.com/video/user_brebfdxkh35cxb2gviwnwufpycs/srvacc_fk130i83e047t4kg5w4edswj7/video_jte9z844w7kmyakuz8bfbme91i";
  const transformedURL = transformURL(originalURL);
  console.log(transformedURL);

  console.log(singleVid);
  //TODO: 2. work on the follow button 3. work on the like button 4. comments 5. others videos from creator
  return (
    <Layouts>
      {/* <div className="product-page product-version-1"> */}
      <div className="">
        <div className="product-media">
          <a
            className="expand-icon"
            data-fslightbox=""
            href="img/content/product-img/product-2.jpg"
          >
            <svg className="crumina-icon">
              <use xlinkHref="#maximize-icon" />
            </svg>
          </a>

          <iframe
            src={transformURL(singleVid[0]?.videoData?.videoUrl)}
            // src={singleVid[0]?.videoData?.videoUrl}
            border="0"
            width="100%"
            height="500"
            allowfullscreen
            allow="autoplay; fullscreen"
            autoplay="false"
          />
        </div>
        <div className="product-info">
          <div className="product-info-wrapper">
            {/* / Products Info */}
            <ProductInfo singleVid={singleVid[0]} />
            {/* / Products Tabs */}
            <ProductTabs filteredVideos={filteredVideos} />
            {/*  RELATED ITEMS */}
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Product05;

import React from "react";
import Image from "next/image";
import Button from "@components/Button";
import HorizontalFeature from "@components/HorizontalFeature";
import Icon from "@components/Icon";
import { CustomSlider } from "@components/Slider";
import { currency } from "@constants/constant";


function Project(props) {

  const {
    name = false,
    provider = false,
    address = false,
    price = false,
    area = false,
    rooms = false,
    imageArr = [],
    tags = []
  } = props

  const firstImage = imageArr && imageArr[0] ? imageArr[0] : "/assets/images/image-loader.svg";
  const [currentImage, setImage] = React.useState(firstImage);

  React.useEffect(() => {
    setImage(firstImage);
  }, [firstImage]);

  const handleActionButton = () => {
    alert("Request Callback Operation!");
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const updateImage = (idx) => setImage(imageArr[idx]);

  return (
    <div className="detail__wrap divider">
      <div className="detail__wrap-image-wrap">
        <div className="detail__wrap-image-big">
          <Image
            src={currentImage}
            alt={"Property"}
            layout="fill"
            sizes="50vw"
            placeholder="blur"
            blurDataURL="/assets/images/image-loader.svg"
          />
        </div>

        <div className="detail__wrap-image-slider">
          <CustomSlider settings={settings}>
            {imageArr &&
              imageArr.map((data, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`detail__wrap-image-sm ${
                        data === currentImage ? "active" : ""
                      }`}
                      onClick={() => updateImage(index)}
                    >
                      <Image
                        src={data || '/assets/images/image-loader.svg'}
                        alt={"Property"}
                        layout="fill"
                        sizes="50vw"
                        placeholder="blur"
                        blurDataURL="/assets/images/image-loader.svg"
                      />
                    </div>
                  </div>
                );
              })}
          </CustomSlider>
        </div>
      </div>
      <div className="detail__wrap-content divider">
        {name && <div className="content-title divider-sm">{name}</div>}
        {provider && (
          <div className="content-provider divider-sm">{provider}</div>
        )}
        {address && (
          <div className="content-address divider-sm">
            <Icon icon="projectDirection" />
            <span>{address}</span>
          </div>
        )}
        {price && (
          <div className="content-price-range divider-sm">
            {currency} {price}
          </div>
        )}
        <div className="content-tags">
          {tags &&
            tags.map((data, index) => {
              return (
                <div className="content-tags-name" key={index}>
                  {data}
                </div>
              );
            })}
        </div>
        <div className="content-feature-wrap divider">
          {rooms && <HorizontalFeature
            name={"Configurations"}
            feature={`${rooms} Aparments`}
            icon={"amenitiesRooms"}
          />}
          {area && <HorizontalFeature
            name={"Sizes"}
            feature={`${area}sqft (Carpet Area)`}
            icon={"amenitiesSize"}
          />}
        </div>
        <Button
          onClick={handleActionButton}
          className="content-button"
          text={buttonTitle}
          icon="call"
          variant="secondary"
        />
      </div>
    </div>
  );
}

const buttonTitle = "Request a Call Back";

export default Project;

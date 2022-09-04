/* library */
import React from "react";
import Image from "next/image";
import { useSnackbar } from "notistack";
/* components */
import Button from "@components/Button";
import HorizontalFeature from "@components/HorizontalFeature";
import Icon from "@components/Icon";
import { CustomSlider } from "@components/Slider";
import { CURRENCY } from "@constants/constant";
import RequestCallBack from "@components/RequestCallBack";
/* hooks */
import { useToggle, useAuthContext } from "hooks";
/* helpers */
import { getCallback } from "@helpers/requestCallback";
/* constants */
import { API_SUCCESS_CODE, ERROR_MESSAGE } from "@constants/constant";

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
  const { enqueueSnackbar } = useSnackbar()
  const { user } = useAuthContext()
  const { toggle, updateToggle } = useToggle()
  const firstImage = imageArr && imageArr[0] ? imageArr[0] : "/assets/images/image-loader.svg";
  const [currentImage, setImage] = React.useState(firstImage);

  React.useEffect(() => {
    setImage(firstImage);
  }, [firstImage]);

  const handleActionButton = async () => {
    if (user) {
      const res = await getCallback({
        name: user?.first_name,
        email: user?.email,
        phone: user?.phone,
        project: { ...props }
      })
      if (res?.statusCode === API_SUCCESS_CODE) {
        enqueueSnackbar("You will soon receive a call on registered mobile number.", { variant: "success" })
      } else {
        enqueueSnackbar(ERROR_MESSAGE, { variant: "error" })
      }
    } else {
      updateToggle()
    }
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
                      className={`detail__wrap-image-sm ${data === currentImage ? "active" : ""
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
            {CURRENCY} {price}
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
        <>
          <Button
            onClick={handleActionButton}
            className="content-button"
            text={buttonTitle}
            icon="call"
            variant="secondary"
          />
          <RequestCallBack
            open={toggle}
            onClose={updateToggle}
            projectDetail={{ ...props }}
          />
        </>
      </div>
    </div>
  );
}

const buttonTitle = "Request a Call Back";

export default Project;

/* library */
import React, { useEffect, useState } from "react";
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
import { useToggle, useAuthContext, useLoginModalContext } from "hooks";
/* helpers */
import { getCallback, addCartProject, deleteCartProject } from 'helpers';
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
    tags = [],
    variants = [],
  } = props
  const { enqueueSnackbar } = useSnackbar()
  const { toggleLoginModal } = useLoginModalContext()
  const { toggle, updateToggle } = useToggle()
  const { user } = useAuthContext()
  const cartId = user?.metadata || null
  const firstImage = imageArr && imageArr[0] ? imageArr[0] : "/assets/images/image-loader.svg";
  const [currentImage, setImage] = useState(firstImage);
  const [Saved, setSaved] = useState(false)
  const [ItemId, setItemId] = useState(null)


  useEffect(() => {
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

  /*slick slider setting */
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    infinite: false,
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

  const handleAddCartApi = async () => {
    if (variants && variants[0] && variants[0]?.id) {
      const variantId = variants[0]?.id
      const addCartRes = await addCartProject({
        cartId: cartId,
        variantId: variantId
      })
      if (addCartRes && addCartRes?.cart && addCartRes?.cart?.items?.length) {
        setSaved(true)
        setItemId(addCartRes?.cart?.items[0]?.id)
        enqueueSnackbar("Added to Wishlist!", { variant: 'success' })
      } else {
        enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
      }
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  const handleDeleteCartApi = async () => {
    const res = await deleteCartProject({
      cartId: cartId,
      itemId: ItemId
    })
    if (res) {
      enqueueSnackbar("Removed from Wishlist.", { variant: 'info' })
      setSaved(false)
    } else {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' })
    }
  }

  const handleSaveLater = () => {
    if (user && cartId) {
      if (!Saved) {
        handleAddCartApi()
      } else {
        handleDeleteCartApi()
      }
    } else {
      toggleLoginModal()
    }
  }

  return (
    <div className="detail__wrap divider">
      <div className="detail__wrap-image-wrap">
        <div className="detail__wrap-save-later" title="Add to Wishlist" onClick={() => handleSaveLater()}><Icon icon={Saved ? "projectSaved" : "projectFav"} /></div>
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

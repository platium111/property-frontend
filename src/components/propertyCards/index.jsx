import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import useUpload from "../../_hooks/useUpload/index";
import { AWS_CONFIG } from "../../config";
const { Meta } = Card;

export const PropertyCard = ({ property, setClickedPropertyId, setDisplayDetailItem }) => {
  const { description, itemName, price, id } = property;

  const { fetchImage } = useUpload();
  const [firstImageUrl, setFirstImageUrl] = useState();

  const formatPrice = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  useEffect(() => {
    const fetchImageFn = async () => {
      const firstUrlImage = await fetchImage(
        property.imageUrls[0],
        AWS_CONFIG.PROPERTY_IMAGE_PATH
      );
      setFirstImageUrl(firstUrlImage);
    };

    fetchImageFn();
  }, [property]);

  const handleClick = () => {
    setDisplayDetailItem(true);
    setClickedPropertyId(id)
  }

  return (
    <div onClick={handleClick}>
      <Card
        key={`${property.id}-card`}
        hoverable
        cover={<img alt="example" src={firstImageUrl} />}
      >
        <Row>
          <Col>
            <Meta title={itemName} description={description} />
          </Col>
          <p>{formatPrice}</p>
        </Row>
      </Card>
    </div>
  );
};

export default function PropertyCards({ properties, setClickedPropertyId, setDisplayDetailItem }) {
  const colArray =
    properties &&
    properties.length > 0 &&
    properties.map((property) => {
      return (
        <Col span={8} key={property.id}>
          <PropertyCard  property={property} setClickedPropertyId={setClickedPropertyId} setDisplayDetailItem={setDisplayDetailItem} />
        </Col>
      );
    });
  return <Row>{colArray}</Row>;
}

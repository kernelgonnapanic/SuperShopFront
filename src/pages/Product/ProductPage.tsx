import React from 'react';

import { Box, ImgBox, TitleBox, Title, BoxWrapper } from './ProductPageStyles';
import Tag from '../../components/atoms/Tag/Tag';
import ProductImg from '../../components/atoms/ProductImg/ProductImg';
import data from '../../utils/data';
import { PropsProduct } from '../../models/Product';

class ProductPage extends React.Component {
  productData: PropsProduct = data.find((product) => product?.id === 1)!;

  render() {
    return (
      <BoxWrapper>
        <Box>
          <ProductImg imageSrc={this.productData.imageSrc} />
          <TitleBox>
            <Title>{this.productData.name}</Title>
            <Title>{this.productData.price}</Title>
          </TitleBox>
          <div>{this.productData.description}</div>
          <ImgBox className="min-h-screen justify-center flex">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
              {this.productData.tags.map((tag) => (
                <Tag title={tag} />
              ))}
            </div>
          </ImgBox>
        </Box>
      </BoxWrapper>
    );
  }
}

export default ProductPage;

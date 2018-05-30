import React from 'react';

const ProductImages = ({productImage, redirectProduct}) => {
  return (
    <div className="">
      {
        productImage.map(productImages=>
        <div className="col-md-3 col-sm-6 col-xs-6">
          <div className="product product-single" key={productImages.id}>
            <div className="product-thumb" onClick={()=>redirectProduct(productImages.id)}>
              <img src={require('../../assets/images/'+productImages.Product_Image)} alt=""/>
            </div>
          </div>    
        </div>    
      )}
    </div>
  );
};

/*ProductImages.propTypes = {
  productImage: PropTypes.array.isRequired,
};*/

export default ProductImages;

import React from 'react';

const ProductImages = ({productImage, redirectProduct}) => {
  return (
    <div className="col-md-12">
      {
        productImage.map(productImages=>
        <div className="col-md-3">
          <div className="product product-single" key={productImages.id}>
            <div className="product-thumb" onClick={()=>redirectProduct(productImages.id)}>
              <img src={require('../../assets/images/'+productImages.Product_Image)} alt="" style={{"height":"354px", "width":"255px"}}/>
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

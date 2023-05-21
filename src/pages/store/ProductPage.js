// Layout
// Image    Product name
//         product price
//         mrp
//         key features
//
// product description
// product
import {getProduct, getImage} from "./ProductActions";
import {useEffect, useState} from "react";
// use getImage to print the image
// use getProduct to print the product details

let product_id = "464a908b-02bb-4c56-8dec-6ddf9635b37c";
product_id = "980cd291-2778-465b-b5dd-30f8cf3ca8bd";

// const ImageFromOBJ = (image) => {
//     console.log(image,typeof(image))
//     if (typeof(image) ==  File) {
//         console.log(URL.createObjectURL(image))
//         return (
//             <img src={URL.createObjectURL(image)} alt="product image" className="w-1/2"></img>
//         )
//     } else {
//         return (
//             <div></div>
//         )
//
//     }
// }
const ProductPage = () => {
    // await getProduct(product_id)
    const [product, setProduct] = useState({});
    const [image, setImage] = useState({});
    useEffect(() => {
        getProduct(product_id).then((product) => {
            setProduct(product);
            getImage(product.additionalImage1).then((image) => {
                setImage(image);
            })
        })
    }, []);
    // console.log(product);
    // console.log(image);

    // console.log(product)
    return (<div>
        <h1>Product Page</h1>
        <div className="flex flex-row">
            <div className="flex flex-col">
                <img src={image} alt="product image" className="w-1/2"></img>
                {/*<img src={image} alt="product image" className="w-1/2"></img>*/}
                {/*<img src={image} alt="product image" className="w-1/2"></img>*/}
            </div>
            <div className="flex flex-col">
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h2>{product.mrp}</h2>
                {/*print product description as unordered list*/}
                <ul>
                    {product.keyFeatures && product.keyFeatures.map((feature) => {
                        return (<li>{feature}</li>)
                    }
                    )}
                </ul>

            </div>
        </div>
        <div className="flex flex-col">
            <h1>Product Description</h1>
            <h2 dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
    </div>);


}

export default ProductPage;
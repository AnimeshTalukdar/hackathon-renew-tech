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

let product_id = "9c9ca170-8cda-494b-a0c7-7cc4229ea10b"

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
                <h2>{product.keyFeatures}</h2>
            </div>
        </div>
        <div className="flex flex-col">
            <h1>Product Description</h1>
            <p>{product.description}</p>
        </div>
    </div>);


}

export default ProductPage;
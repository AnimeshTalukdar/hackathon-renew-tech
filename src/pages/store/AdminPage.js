import {insertProduct, getProducts, getProduct, updateProduct, addImage} from "./ProductActions";


// Add product form`
// 1. Name
// 2. Image
// 3. Price
// 4. MRP
// 5. Key features
// 6. Description
// 7. Brand
// 8. Reviews
// 9. Category


const AddProduct = () => {
    return (<div>
        <h1>Add Product</h1>
        <form className="flex flex-col w-1/2 mx-auto">
            <label>Product name</label>
            <input type="text" name="name" className="border border-gray-400 p-1"></input>
            <label>Product description</label>
            <input type="textarea" name="description" className="border border-gray-400 p-1"></input>
            <label>Product price</label>
            <input type="number" name="price" className="border border-gray-400 p-1"></input>
            <label>Product mrp</label>
            <input type="number" name="mrp" className="border border-gray-400 p-1"></input>
            <label>Product key features</label>
            <input type="text" name="keyFeatures" className="border border-gray-400 p-1"></input>
            <label>Product brand</label>
            <input type="text" name="brand" className="border border-dgray-400 p-1"></input>
            <label>Product category</label>
            <input type="text" name="category" className="border border-gray-400 p-1"></input>
            <label>Product Main Image</label>
            <input type="file" name="main-image" className="border border-gray-400 p-1"></input>
            <label>Product additional image 1</label>
            <input type="file" name="additional-image-1" className="border border-gray-400 p-1"></input>
            <label>Product additional image 2</label>
            <input type="file" name="additional-image-2" className="border border-gray-400 p-1"></input>
            {/*<label>Product reviews</label>*/}
            {/*<input type="text" name="reviews" className="border border-gray-400 p-1"></input>*/}

            <button type="button" className="bg-green-500 text-white p-2 rounded-lg"
                    onClick={() => {
                        insertProduct({
                            name: document.querySelector("input[name=name]").value,
                            description: document.querySelector("input[name=description]").value,
                            price: document.querySelector("input[name=price]").value,
                            mrp: document.querySelector("input[name=mrp]").value,
                            keyFeatures: document.querySelector("input[name=keyFeatures]").value,
                            brand: document.querySelector("input[name=brand]").value,
                            category: document.querySelector("input[name=category]").value,
                            image: document.querySelector("input[name=main-image]").files[0],
                            additionalImage1: document.querySelector("input[name=additional-image-1]").files[0],
                            additionalImage2: document.querySelector("input[name=additional-image-2]").files[0],


                        })
                    }}>Add Product
            </button>
        </form>

    </div>)
}


const EditProduct = () => {
    return (<div>
        <h1>Update Product</h1>
        <form className="flex flex-col w-1/2 mx-auto">
            <label>Product ID</label>
            <input type="text" name="updateproductid" className="border border-gray-400 p-1"></input>
            <label>Product name</label>
            <input type="text" name="name" className="border border-gray-400 p-1"></input>
            <label>Product description</label>
            <input type="textarea" name="description" className="border border-gray-400 p-1"></input>
            <label>Product price</label>
            <input type="number" name="price" className="border border-gray-400 p-1"></input>
            <label>Product mrp</label>
            <input type="number" name="mrp" className="border border-gray-400 p-1"></input>
            <label>Product key features</label>
            <input type="text" name="keyFeatures" className="border border-gray-400 p-1"></input>
            <label>Product brand</label>
            <input type="text" name="brand" className="border border-dgray-400 p-1"></input>
            <label>Product category</label>
            <input type="text" name="category" className="border border-gray-400 p-1"></input>
            <label>Product Main Image</label>
            <input type="file" name="main-image" className="border border-gray-400 p-1"></input>
            <label>Product additional image 1</label>
            <input type="file" name="additional-image-1" className="border border-gray-400 p-1"></input>
            <label>Product additional image 2</label>
            <input type="file" name="additional-image-2" className="border border-gray-400 p-1"></input>
            {/*<label>Product reviews</label>*/}
            {/*<input type="text" name="reviews" className="border border-gray-400 p-1"></input>*/}

            <button type="button" className="bg-green-500 text-white p-2 rounded-lg"
                    onClick={() => {
                        updateProduct(document.querySelector("input[name=updateproductid]").value, {
                            name: document.querySelector("input[name=name]").value,
                            description: document.querySelector("input[name=description]").value,
                            price: document.querySelector("input[name=price]").value,
                            mrp: document.querySelector("input[name=mrp]").value,
                            keyFeatures: document.querySelector("input[name=keyFeatures]").value,
                            brand: document.querySelector("input[name=brand]").value,
                            category: document.querySelector("input[name=category]").value,
                            image: document.querySelector("input[name=main-image]").files[0],
                            additionalImage1: document.querySelector("input[name=additional-image-1]").file,
                            additionalImage2: document.querySelector("input[name=additional-image-2]").file,


                        })
                    }}>Update Product
            </button>
        </form>

    </div>)
}

// const UploadImage = () => {
//     return (
//         <div>
//             <h1>Upload Image</h1>
//             <form className="flex flex-col w-1/2 mx-auto">
//                 <label>Product Name</label>
//                 <input type="text" name="name" className="border border-gray-400 p-1"></input>
//                 <label>Product Image</label>
//                 <input type="file" name="image" className="border border-gray-400 p-1"></input>
//                 <button type="button" className="bg-green-500 text-white p-2 rounded-lg"
//                         onClick={() => {
//                             addImage(document.querySelector("input[name=image]").files[0]
//                             )
//
//                         }}
//
//                 >Upload Image
//                 </button>
//             </form>
//         </div>
//     )
//
// }
// display image from file object
// const DisplayImage = ({file}) => {
//     return (
//         <div>
//             <img src={URL.createObjectURL(file)} alt="image"/>
//         </div>
//     )
// }

const AdminPage = () => {
    return (<div>
        admin
        <AddProduct></AddProduct>

        <EditProduct></EditProduct>

        {/*<showProducts></showProducts>*/}


    </div>)

}
export default AdminPage;
import {Storage, Account, Client, Databases, InputFile} from 'appwrite';
import {v4 as uuidv4} from 'uuid';

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.REACT_APP_PROJECT_ID);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

const insertProduct = async (product) => {

    let pid = uuidv4();
    // make images = addImage(image)
    if (product.image != undefined) product.image = await addImage(product.image); else product.image = "";

    if (product.additionalImage1 != undefined) product.additionalImage1 = await addImage(product.additionalImage1); else product.additionalImage1 = "";

    if (product.additionalImage2 != undefined) product.additionalImage2 = await addImage(product.additionalImage2); else product.additionalImage2 = "";

    try {

        const result = await database.createDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_PRODUCTS_COLLECTION_ID, pid, product);
    } catch (e) {
        console.log(e)
    }
    console.log(pid)
    return pid;

}
const getProducts = async () => {
    const result = await database.listDocuments(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_PRODUCTS_COLLECTION_ID);
    return result.documents;
}
const getProduct = async (product_id) => {
    const result = await database.getDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_PRODUCTS_COLLECTION_ID, product_id);
    // console.log(result);
    return result;

}

const updateProduct = async (product_id, product) => {
    console.log("request to update")

    if (product.image != undefined) product.image = await addImage(product.image); else product.image = "";

    if (product.additionalImage1 != undefined) product.additionalImage1 = await addImage(product.additionalImage1); else product.additionalImage1 = "";

    if (product.additionalImage2 != undefined) product.additionalImage2 = await addImage(product.additionalImage2); else product.additionalImage2 = "";

    // console.log(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_PRODUCTS_COLLECTION_ID, product_id, product);
    const old_product = await database.getDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_PRODUCTS_COLLECTION_ID, product_id);
    for (const key in product) {
        if (product[key] === "") product[key] = old_product[key];
    }

    const result = await database.updateDocument(process.env.REACT_APP_DATABASE_ID, process.env.REACT_APP_PRODUCTS_COLLECTION_ID, product_id, product);
    return result;

}

const addImage = async (image) => {
    // upload image and get link
    let img_id = uuidv4();
    // console.log(process.env.REACT_APP_PRODUCTS_IMAGES_BUCKET_ID, img_id, image)
    // console.log(typeof(image))

    const result = await storage.createFile(process.env.REACT_APP_PRODUCTS_IMAGES_BUCKET_ID, img_id, image);

    return img_id;
}

const getImage = async (image_id) => {
    const result = await storage.getFileView(process.env.REACT_APP_PRODUCTS_IMAGES_BUCKET_ID, image_id);

    return result.href;

}
const removeImage = async (image_id) => {
    const result = await storage.deleteFile(process.env.REACT_APP_PRODUCTS_IMAGES_BUCKET_ID, image_id);
    return result.$id;
}

export {insertProduct, getProducts, getProduct, updateProduct, addImage, getImage, removeImage};
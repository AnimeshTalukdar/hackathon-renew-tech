import {Storage, Account, Client, Databases, InputFile} from 'appwrite';
import {v4 as uuidv4} from 'uuid';

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.REACT_APP_PROJECT_ID);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);


const insertBlog = async (blog) => {

}
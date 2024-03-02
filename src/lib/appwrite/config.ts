import { Client, Account, Databases, Storage, Avatars} from 'appwrite'


export const appwriteConfig ={
    url:"https://cloud.appwrite.io/v1",
    projectId:'65e2e1c8c24cb9cf18f6',
    databaseId:'65e2f76e9aec27272c0c',
    storageId:'65e2f7208d7e4910f016',
    userCollectionId:'65e2f815dd32657b1bdd',
    postCollectionId:'65e2f7b8332d947a3e17',
    savesCollectionId:'65e2f854a40816609f4c',

}

export const client = new Client();

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const database = new Databases(client)
export const storage = new Storage(client)
export const avatars  = new Avatars(client)

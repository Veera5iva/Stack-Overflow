import { questionAttachmentBucket } from "../name";
import { Permission } from "node-appwrite";
import { storage } from "./config";

export default async function getOrCreateStorage() {
   try {
      await storage.getBucket(questionAttachmentBucket);
      console.log("Bucket connected");
      
   } catch (error) {
      console.log(error);
      try {
         await storage.createBucket(questionAttachmentBucket, questionAttachmentBucket, [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("users"),
            Permission.update("users"),
            Permission.delete("users"),

         ],
         false,
         undefined,
         undefined,
         ["jpg", "png", "gif", "jpeg", "webp", "heic"]
      );
      console.log("Bucket created"); 
      } catch (error) {
         console.log(error);
         
      }
      
   }

}

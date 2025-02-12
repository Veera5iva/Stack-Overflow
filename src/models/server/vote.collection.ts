import { db } from "../name";
import { Permission } from "node-appwrite";
import { databases } from "./config";

export default async function createVoteCollection() {

   // creating vote collection
   await databases.createCollection(db, "voteCollection", "voteCollection", [
      Permission.read("any"),
      Permission.read("users"),
      Permission.create("users"),
      Permission.update("users"),
      Permission.delete("users"),
   ]);
   console.log("Vote collection created");
   
   // creating attributes inside the collection
   await Promise.all([
      databases.createEnumAttribute(db, "voteCollection", "type", ["answer", "question"], true),
      databases.createStringAttribute(db, "voteCollection", "typeId", 50, true),
      databases.createEnumAttribute(db, "voteCollection", "voteStatus", ["upvoted", "downvoted"], true),
      databases.createStringAttribute(db, "voteCollection", "votedById", 50, true),
   ]);
   console.log("Vote collection attributes created");
}
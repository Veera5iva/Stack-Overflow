import { db } from "../name";
import createQuestionCollection from "./question.collection";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createVoteCollection from "./vote.collection";
import { databases } from "./config";

export default async function getOrCreateDb() {
   try {
      await databases.get(db);
      console.log("Database connection");

   } catch (error) {
      try {
         await databases.create(db, db);
         console.log("Database created");

         // create collections
         await Promise.all([
            createQuestionCollection(),
            createAnswerCollection(),
            createCommentCollection(),
            createVoteCollection(),
         ])
         console.log("Collections cretaed successfully");

      } catch (error) {
         console.log(error);
      }

      console.log(error);
      
   }
   return databases;
}

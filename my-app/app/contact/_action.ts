"use server";

import { FormType } from "@/types";
import { create } from "domain";
import { db } from "../db";
import { consultationTable } from "../db/schema";
import { json } from "stream/consumers";

export async function createConsultation(data: FormType){
try{
    
     await db.insert(consultationTable).values(data)
     return(
        {success:true,message:"Data inserted Successfully"}
     )
    
}catch(err){
    console.log("No response from server. ",err)
    return err;
}
}
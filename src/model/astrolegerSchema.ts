import mongoose, { Document } from "mongoose";

interface Astrologer extends Document {
  name: string;
  gender: string;
  email: string;
  languages: string[];
  specialties: string[];
}


const astrologerSchema = new mongoose.Schema<Astrologer>({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    email:{type:String,required:true},
    languages:{type:[String],required:true},
    specialties:{type:[String],required:true},
})

export const AstrologerModel = mongoose.model<Astrologer>('Astrologer',astrologerSchema)
import mongoose from 'mongoose'
import {url} from '../config'
/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/


const MONGODB_URI ="mongodb+srv://Lakshay:lakshaymongo2@cluster0.ut2bv.mongodb.net/iLinkedit?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      //bufferMaxEntries: 0,
     // useFindAndModify: true,
     // useCreateIndex: true
    }

    cached.promise = mongoose.connect("mongodb+srv://Lakshay:lakshaymongo2@cluster0.ut2bv.mongodb.net/iLinkedit?retryWrites=true&w=majority", opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect;
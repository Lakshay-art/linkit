const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'
export const url="mongodb+srv://Lakshay:lakshaymongo2@cluster0.ut2bv.mongodb.net/iLinkedit?retryWrites=true&w=majority"
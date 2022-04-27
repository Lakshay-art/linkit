const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://linkiie-git-master-lakshay-art.vercel.app'

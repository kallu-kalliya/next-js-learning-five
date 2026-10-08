import fs from 'fs'

export const ServerComponentTwo = () => {
    fs.readFileSync('src/components/ser-com-two.tsx','utf-8')
    return <h1> Server Component two </h1>
}
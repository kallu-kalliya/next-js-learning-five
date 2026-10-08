import {severSideFunction} from '@/utils/server-utils'


export default function ServerRoute () {
    const result = severSideFunction()
    return <div>server route {result}</div>
} 
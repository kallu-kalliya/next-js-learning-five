export const Product = async() =>{
    await new Promise((res)=>setTimeout(res, 2000))
    return <div>Products</div>
}
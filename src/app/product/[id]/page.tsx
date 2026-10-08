export const dynamicParams = false;
// to not have more dynamic params other than the staic ones 

export async function generateStaticParams() {
    // we can also fetch this ids from an api 
  return [{id:"1"},{id:"2"},{id:"3"},]
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  return (
    <div>
      <h1>
        product id : {id}.. renedered at {new Date().toLocaleTimeString()}
      </h1>
    </div>
  );
}


// tutorial 56  
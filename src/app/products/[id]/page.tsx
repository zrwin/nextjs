
const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  return <h1>Product: {id}</h1>
}

export default Product
import data from './data.json'

export default function GET() {
  const featured = data.products.filter((product) => product.featured)

  return Response.json(featured)
}

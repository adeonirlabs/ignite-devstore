import data from '../data.json'

export default function GET() {
  return Response.json(data.products)
}

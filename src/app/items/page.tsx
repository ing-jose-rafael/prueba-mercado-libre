import Link from 'next/link'
import { api } from '../api'
// https:// api.mercadolibre.com/sites/MCO/search?q=iphone&limit=4
export default async function ItemsPage ({ searchParams }: { searchParams: { search: string } }) {
  const { results } = await api.item.search(searchParams.search)
  // console.log(results)
  return (
    <section>
      <article className="grid gap-4">
        {results.map(item => (
          <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4">
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <p className="font-bold text-xl">
                {Number(item.price).toLocaleString('es-CO', { style: 'currency', currency: item.currency_id })}</p>
              <h2>{item.title}</h2>
            </div>
            <span className="ml-auto text-sm opacity-50 capitalize">{item.seller_address.city.name.toLowerCase()}</span>
          </Link>
        ))}</article>
    </section>
  )
}

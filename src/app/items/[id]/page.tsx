import { api } from '@/app/api'

function Description ({ id }: { id: string }) {
  const description = api.item.description(id)
  return (
    <p>{description}</p>
  )
}

export default async function ItemsPageId ({ params: { id } }: { params: { id: string } }) {
  const { item } = await api.item.fetch(id)

  return (
    <section className="grid gap-2">
      <img src={item.thumbnail} alt={item.title} />
      <p className="font-bold text-xl">
        {Number(item.price).toLocaleString('es-CO', { style: 'currency', currency: item.currency_id })}
      </p>
      <p>{item.title}</p>
      <hr />
      <Description id={item.id} />
    </section>
  )
}

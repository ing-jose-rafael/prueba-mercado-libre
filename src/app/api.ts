export const api = {

  item: {
    description: async (id: string) => {
      const { plain_text: description } = await fetch(`https://api.mercadolibre.com/items/${id}/description`).then(async (res) => await (res.json() as Promise<{
        plain_text: string
      }>))
      return description
    },
    fetch: async (id: string) => {
      const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(async res => await (res.json() as Promise<{
        id: string
        title: string
        price: number
        thumbnail: string
        currency_id: string
        seller_address: {
          city: {
            name: string
          }
        }
      }>))
      const { plain_text: plainText } = await fetch(`https://api.mercadolibre.com/items/${id}/description`).then(async (res) => await (res.json() as Promise<{
        plain_text: string
      }>))
      return {
        item,
        description: plainText
      }
    },
    search: async (query: string) => await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${query}&limit=4`).then(async res => await (res.json() as Promise<{
      results: Array<{
        id: string
        title: string
        price: number
        thumbnail: string
        currency_id: string
        seller_address: {
          city: {
            name: string
          }
        }
      }>
    }>))
  }
}

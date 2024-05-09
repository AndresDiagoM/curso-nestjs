import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductService {
  // properties
  private products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3'
    }
  ]

  // methods

  getProducts(limit: number, offset: number, filter: string): any {
    let products = this.products

    if (filter)
      products = products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      )

    return products.slice(offset, offset + limit)
  }

  getProduct(id: number): any {
    return this.products.find((product) => product.id === id)
  }

  createProduct(product: any): any {
    this.products.push(product)
    return product
  }
}

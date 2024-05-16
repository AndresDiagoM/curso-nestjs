import { Injectable } from '@nestjs/common'
import { Product } from '../../models/product.model'

@Injectable()
export class ProductService {
  // properties
  private products: Product[] = [
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

  getProducts(limit: number, offset: number, filter: string): Product[] {
    let products = this.products

    if (filter)
      products = products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      )

    return products.slice(offset, offset + limit)
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id)
  }

  createProduct(product: Product): Product {
    this.products.push(product)
    return product
  }

  updateProduct(id: number, product: Product): Product {
    const index = this.products.findIndex((product) => product.id === id)
    this.products[index] = product
    return product
  }

  deleteProduct(id: number): Product[] {
    const index = this.products.findIndex((product) => product.id === id)
    this.products.splice(index, 1)
    return this.products
  }
}

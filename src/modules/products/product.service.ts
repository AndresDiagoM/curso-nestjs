import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from '../../models/product.model'
import { createProductDto, updateProductDto } from 'src/dtos/products.dto'

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
    const product = this.products.find((product) => product.id === id)
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`)
    }
    return product
  }

  createProduct(product: createProductDto): createProductDto {
    const newProduct: Product = { id: this.products.length + 1, ...product }
    this.products.push(newProduct)
    return product
  }

  updateProduct(id: number, product: updateProductDto): updateProductDto {
    const productOld = this.products.find((product) => product.id === id)
    if (!productOld) throw new NotFoundException(`Product with id ${id} not found`)

    const index = this.products.findIndex((product) => product.id === id)
    this.products[index] = { ...productOld, ...product }

    return this.products[index]
  }

  deleteProduct(id: number): Product[] {
    const index = this.products.findIndex((product) => product.id === id)
    if (index === -1) throw new NotFoundException(`Product with id ${id} not found`)
    this.products.splice(index, 1)
    return this.products
  }
}

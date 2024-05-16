export class createProductDto {
  readonly name: string
  readonly description: string
  readonly price: number
  readonly stock: number
  readonly image: string
}

export class updateProductDto {
  name?: string
  description?: string
  price?: number
  stock?: number
  image?: string
}

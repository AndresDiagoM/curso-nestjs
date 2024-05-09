import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`
  }

  // get with params
  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return this.productService.getProduct(Number(id))
  }

  // using @query
  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('filter') filter: string
  ) {
    return this.productService.getProducts(limit, offset, filter)
  }

  // POST create a new product with body
  @Post()
  createProduct(@Body() body: any) {
    console.log(body)
    return this.productService.createProduct(body)
  }
}

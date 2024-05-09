import { Body, Controller, Get, Param, Post, Put, Query, Delete } from '@nestjs/common'
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
    // console.log(body)
    return this.productService.createProduct(body)
  }

  // PUT update a product
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return this.productService.updateProduct(Number(id), body)
  }

  // DELETE delete a product
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(Number(id))
  }
}

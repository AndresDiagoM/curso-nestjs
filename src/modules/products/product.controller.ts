import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Delete,
  HttpCode,
  HttpStatus
} from '@nestjs/common'
import { ProductService } from './product.service'
import { Product } from 'src/models/product.model'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`
  }

  // get with params
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: string): Product {
    return this.productService.getProduct(Number(id))
  }

  // using @query
  @Get('')
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('filter') filter: string
  ) {
    const products = this.productService.getProducts(limit, offset, filter)
    return { data: products, total: products.length }
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

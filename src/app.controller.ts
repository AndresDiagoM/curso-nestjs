import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/home') // the controller returns the route /home
  getHome(): string {
    return 'Welcome to my home'
  }

  @Get('about') // not need to add the / because it is already in the route
  getAbout(): string {
    return 'This is an about page'
  }

  // get with params
  @Get('products/:id')
  getProduct(@Param('id') id: string): string {
    return `Product with id ${id}`
  }
}

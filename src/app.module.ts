import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

// module imports
import { ProductModule } from './modules/products/product.module'
import { CategoriesModule } from './modules/categories/categories.module'
import { OrdersModule } from './modules/orders/orders.module'
import { UsersModule } from './modules/users/users.module'
import { BrandsModule } from './modules/brands/brands.module'
import { CustomersModule } from './modules/customers/customers.module'

@Module({
  imports: [
    ProductModule,
    CategoriesModule,
    OrdersModule,
    UsersModule,
    BrandsModule,
    CustomersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

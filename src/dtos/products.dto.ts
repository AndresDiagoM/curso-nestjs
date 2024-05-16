import { IsNotEmpty, IsString, IsNumber, IsUrl, IsPositive } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class createProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsString()
  @IsNotEmpty()
  readonly description: string

  @IsNumber()
  @IsPositive()
  readonly price: number

  @IsNumber()
  readonly stock: number

  @IsUrl()
  readonly image: string
}

// export class updateProductDto {
//   name?: string
//   description?: string
//   price?: number
//   stock?: number
//   image?: string
// }

export class updateProductDto extends PartialType(createProductDto) {}

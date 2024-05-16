import { IsNotEmpty, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class createCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsString()
  @IsNotEmpty()
  readonly description: string
}

// export class updateCategoryDto {
//   name?: string
//   description?: string
//   price?: number
//   stock?: number
//   image?: string
// }

export class updateCategoryDto extends PartialType(createCategoryDto) {}

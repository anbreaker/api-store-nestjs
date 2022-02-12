import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { ProductsService } from '../../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAllProducts();
  }

  // Rutas estaticas 1º
  @Get('filter')
  getFilter() {
    return { mgs: 'I am static filter' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: number) {
    return this.productsService.findOneById(productId);
  }

  @Post()
  createProduct(@Body() payload: any) {
    return this.productsService.createProduct(payload);
  }

  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.updateProduct(+id, payload);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(+id);
  }
}

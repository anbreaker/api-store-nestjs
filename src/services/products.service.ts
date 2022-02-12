import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entities';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 123,
      stock: 3,
      image: 'url',
    },
  ];

  findAllProducts() {
    return this.products;
  }

  findOneById(id: number) {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException(`Product id #${id} not found`);
    }
    return product;
  }

  createProduct(payload: any) {
    const newProduct = {
      id: (this.counterId += 1),
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  updateProduct(id: number, payload: any) {
    const product = this.findOneById(id);

    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}

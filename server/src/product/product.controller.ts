import {
  Controller,
  HttpCode,
  Post,
  Get,
  Body,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @HttpCode(HttpStatus.OK)
  @Post("create-product")
  createCategory(
    @Body()
    prodObj: {
      title: string;
      price: number;
      quantity: string;
      imageUrl: string;
      description: string;
      slug: string;
      category: {
        connect: { id: number };
      };
    }
  ) {
    return this.productService.createProduct(prodObj);
  }

  @HttpCode(HttpStatus.OK)
  @Get("get-products")
  getProducts() {
    return this.productService.products();
  }

  @HttpCode(HttpStatus.OK)
  @Get("get-cats-products/:id")
  getProductsByCategory(@Param("id") id: string) {
    return this.productService.productsByCategory(Number(id));
  }

  @HttpCode(HttpStatus.OK)
  @Get("get-product/:id")
  getProduct(@Param("id") id: string) {
    return this.productService.product({ id: Number(id) });
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, Product } from "@prisma/client";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // create product
  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  // get product
  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  // get products by id
  async products(): Promise<Product[]> {
    return this.prisma.product.findMany({});
  }

  // get products by category
  async productsByCategory(id: number): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: { categoryId: id },
    });
  }

  // create product
  async createproduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }
}

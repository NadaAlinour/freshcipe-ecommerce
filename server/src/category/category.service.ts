import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, Category } from "@prisma/client";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // get category
  async category(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput
  ): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
    });
  }

  // get categories
  async categories(): Promise<Category[]> {
    return this.prisma.category.findMany({});
  }

  // create category
  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({ data });
  }
}

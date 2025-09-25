import {
  Controller,
  HttpCode,
  Post,
  Get,
  Body,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { CategoryService } from "./category.service";

@Controller("category")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @HttpCode(HttpStatus.OK)
  @Post("create-category")
  createCategory(
    @Body() catObj: { title: string; imageUrl: string; slug: string }
  ) {
    return this.categoryService.createCategory(catObj);
  }

  @HttpCode(HttpStatus.OK)
  @Get("get-categories")
  getCategories() {
    return this.categoryService.categories();
  }

  @HttpCode(HttpStatus.OK)
  @Get("get-category/:id")
  getCategory(@Param("id") id: string) {
    return this.categoryService.category({ id: Number(id) });
  }
}

import { Controller, HttpCode, Post, Body, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Post("signup")
  signIn(
    @Body()
    signupDto: {
      username: string;
      email: string;
      password: string;
      phone: string;
    }
  ) {
    return this.userService.createUser(signupDto);
  }
}

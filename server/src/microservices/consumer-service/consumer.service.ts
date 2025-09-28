import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ConsumerController {

  @EventPattern('my_pattern')
  async handleMessage(data: Record<string, any>) {
    console.log('Received message:', data);
    // Add your message processing logic here
  }
}
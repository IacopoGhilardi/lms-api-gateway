import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getStronzo(): string {
    return 'Hello stronzo!';
  }
}

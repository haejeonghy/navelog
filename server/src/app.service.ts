import { Injectable } from '@nestjs/common';

//function을 놓는 곳! 비지니스 로직 실행
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

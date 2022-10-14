import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//url가져오고 function을 return, 모든 url 다 넣어놓고 필요하다면 db에 연락!
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
@ApiTags('默认根路径')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

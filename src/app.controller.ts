import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateLocationDto } from './create-location.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
async create(@Body() dto: CreateLocationDto) {
  console.log(dto);
    return 'This action adds a new cat';
}

}

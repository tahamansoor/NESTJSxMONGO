import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body()createCatDto: CreateCatDto){
    this.appService.create(createCatDto)
    
  }

  @Get()
  async findall() {
    return this.appService.findAll();
    
  }
  
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { FindPageDto } from './dto/find-page.dto';
@Controller('page')
export class PageController {
  @Post('create')
  async create(@Body() dto: CreatePageDto) {
    console.log(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    console.log(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreatePageDto) {
    console.log(id, dto);
  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindPageDto) {
    console.log(dto);
  }
}

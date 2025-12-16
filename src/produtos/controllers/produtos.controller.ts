import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutosService } from "../services/produtos.service";
import { Produtos } from "../entities/produtos.entity";


@Controller("/produtos")
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produtos[]> {
    return this.produtosService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produtos> {
    return this.produtosService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findAllBydescricao(@Param('descricao') descricao: string): Promise<Produtos[]> {
    return this.produtosService.findAllByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tema: Produtos): Promise<Produtos> {
    return this.produtosService.create(tema);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() tema: Produtos): Promise<Produtos> {
    return this.produtosService.update(tema);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.produtosService.delete(id);
  }

}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produtos } from "./entities/produtos.entity";
import { ProdutosService } from "./services/produtos.service";
import { ProdutosController } from "./controllers/produtos.controller";
import { CategoriaModule } from "../categoria/categoria.module";

@Module({
    imports: [TypeOrmModule.forFeature([Produtos]), CategoriaModule],
    providers: [ProdutosService],
    controllers: [ProdutosController],
    exports: []
})
export class ProdutosModule {}
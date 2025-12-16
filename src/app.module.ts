import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produtos } from './produtos/entities/produtos.entity';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'db_farmaciafinal',
      entities: [Categoria, Produtos],
      synchronize: true,
      logging: true,
    }),

    CategoriaModule,
    ProdutosModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produtos } from "../entities/produtos.entity";
import { CategoriaService } from "../../categoria/services/categoria.service";



@Injectable()
export class ProdutosService {
    constructor(
        @InjectRepository(Produtos)
        private produtosRepository: Repository<Produtos>,
        private categoriaService: CategoriaService
    ) { }

    async findAll(): Promise<Produtos[]> {
        return await this.produtosRepository.find({
            relations: {
                categoria: true
            }
        });
    }

    async findById(id: number): Promise<Produtos> {

        let produtos = await this.produtosRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        });

        if (!produtos)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produtos;
    }

    async findAllByDescricao(descricao: string): Promise<Produtos[]> {
        return await this.produtosRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    async create(produtos: Produtos): Promise<Produtos> {

        await this.categoriaService.findById(produtos.categoria.id)

        return await this.produtosRepository.save(produtos);

        
    }

    async update(produtos: Produtos): Promise<Produtos> {

        await this.findById(produtos.id);

        await this.categoriaService.findById(produtos.categoria.id)

        return await this.produtosRepository.save(produtos);
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.produtosRepository.delete(id);

    }

}
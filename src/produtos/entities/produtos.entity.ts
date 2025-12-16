import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaController } from "../../categoria/controllers/categoria.controller";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produtos"})
export class Produtos {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 500, nullable: false})
    descricao: string

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
    preco: number;
    

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete: "CASCADE"
    })
categoria: Categoria

}
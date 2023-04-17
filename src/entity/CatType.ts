
import { ArgsType, Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// import { Basic, GeneralResource } from "../../resource/generalType";

@Entity()
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field(() => Int)
  age!: number;

  @Column()
  @Field()
  breed!: string;

  @Column()
  @Field()
  color!: string;

  @Column()
  @Field(() => Int)
  energyLevel!: number;

  @Column()
  @Field()
  createdAt!: Date;

  @Column("text", { array: true })
  @Field(() => [String])
  temperament!: string[];
}

@ObjectType()
export class Cats {
  @Field(() => [Cat])
  cats!: Cat[];
}

@ArgsType()
// export class CatArgs implements Partial<GeneralResource>  {
export class CatArgs {
  @Field()
  name!: string;

  @Field(() => Int)
  age: number;

  @Field()
  breed: string;

  @Field()
  color: string;

  @Field(() => Int)
  energyLevel: number;

  @Field(() => [String])
  temperament: string[];
}

@ArgsType()
export class GetAllCats {
  @Field(() => Int)
  skip: number = 0;

  @Field(() => Int)
  take: number = 10;
}
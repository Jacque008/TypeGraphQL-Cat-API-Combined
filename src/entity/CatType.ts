
import { ArgsType, InputType, Field, Int, ObjectType, UseMiddleware } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { LogAccessMiddleware } from "../../middlewares/log-access"
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
  @UseMiddleware(LogAccessMiddleware)
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

// @ObjectType()
// export class Cats {
//   @Field(() => [Cat])
//   cats!: Cat[];
// }

@InputType()
// export class CatArgs implements Partial<GeneralResource>  {
export class AddCatInput {
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
export class GetCatsArgs {
  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}
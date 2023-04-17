import { Resolver, Query, Arg, Args, Mutation, Int, Authorized, ArgsType } from "type-graphql";
import { AddCatInput, Cat, GetCatsArgs } from "../entity/CatType";
import { AppDataSource } from "../data-source";
import { Service } from "typedi"

@Service()
@Resolver()
export class CatResolver {
  @Query(() => Cat)
  async getCat(@Arg("id", () => Int) id: number): Promise<Cat | undefined> { 
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return undefined;
    }
    return cat;
  }

  @Query(() => [Cat])
  async getCats(
    @Arg("skip", () => Int) skip: number, 
    @Arg("take", () => Int) take: number): Promise<Cat[]> {
    const catRepository = AppDataSource.getRepository(Cat);
    return await catRepository.find({ skip:skip, take: take });
  }

  @Mutation(() => Cat)
  async addCat(
  @Arg("name") name: string,
  @Arg("age", () => Int) age: number,
  @Arg("breed") breed: string,
  @Arg("color") color: string,
  @Arg("energyLevel", () => Int) energyLevel: number,
  @Arg("temperament", () => [String]) temperament: string[]): Promise<Cat> {  
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = new Cat();
    cat.name = name;
    cat.age = age;
    cat.breed = breed;
    cat.color = color;
    cat.energyLevel  = energyLevel;
    cat.temperament = temperament;
    cat.createdAt = new Date();
    return await catRepository.save(cat);
  }

  @Mutation(() => Cat)
  async addCat2(
    @Arg("addCatInput", () => AddCatInput) addCatInput: AddCatInput
    ): Promise<Cat> {    
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = new Cat();
    cat.name = addCatInput.name;
    cat.age = addCatInput.age;
    cat.breed = addCatInput.breed;
    cat.color = addCatInput.color;
    cat.energyLevel  = addCatInput.energyLevel;
    cat.temperament = addCatInput.temperament;
    cat.createdAt = new Date();
    return await catRepository.save(cat);
  }

  @Authorized("ADMIN")
  @Mutation(() => Boolean)
  async removeCat(@Arg("id", () => Int) id: number): Promise<boolean> {
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return false;
    }
    await catRepository.remove(cat);
    return true;
  }

  @Authorized()
  @Mutation(() => Cat)
  async feedCat(@Arg("id", () => Int) id: number): Promise<Cat | undefined> {
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return undefined;
    }
    cat.energyLevel += 1;
    return await catRepository.save(cat);
  }
}

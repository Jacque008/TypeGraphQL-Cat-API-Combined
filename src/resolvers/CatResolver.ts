import { Resolver, Query, Arg, Args, Mutation, Authorized, ArgsType } from "type-graphql";
import { Cat, CatArgs, GetAllCats } from "../entity/CatType";
import { AppDataSource } from "../data-source";
import { Service } from "typedi"

@Service()
@Resolver()
export class CatResolver {
  @Query(() => Cat)
  async getCat(@Arg("id") id: number): Promise<Cat | undefined> { 
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return undefined;
    }
    return cat;
  }

  @Query(() => [Cat])
  async getCats(@Args() {skip, take}: GetAllCats): Promise<Cat[]> {
    const catRepository = AppDataSource.getRepository(Cat);
    return await catRepository.find({ skip: skip, take: take });
  }

  @Mutation(() => Cat)
  async addCat(@Args() { name, age, breed, color, energyLevel, temperament }: CatArgs
  ): Promise<Cat> {
    const catRepository = AppDataSource.getRepository(Cat);
    const catCount = await catRepository.count();
    const cat = new Cat();
    cat.id = catCount + 1;
    cat.name = name;
    cat.age = age;
    cat.breed = breed;
    cat.color = color;
    cat.energyLevel  = energyLevel;
    cat.temperament = temperament;
    cat.createdAt = new Date();
    return await catRepository.save(cat);
  }

  // @Authorized()
  @Mutation(() => Boolean)
  async removeCat(@Arg("id") id: number): Promise<boolean> {
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return false;
    }
    await catRepository.remove(cat);
    return true;
  }

  @Mutation(() => Cat)
  async feedCat(@Arg("id") id: number): Promise<Cat | undefined> {
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return undefined;
    }
    cat.energyLevel += 1;
    return await catRepository.save(cat);
  }
}

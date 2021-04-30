import { AppError } from "../../../../errors/AppError";
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase"

let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;

describe("Create User", () => {

 beforeEach(() => {
  inMemoryUsersRepository = new InMemoryUsersRepository();
  createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
 })

 it("Should be able create new user", async () => {

  const user = await createUserUseCase.execute({
   name: "New User",
   email: "test@test.com",
   password: "12345"
  });

  expect(user).toHaveProperty("id")
 });

 it("Should not be possible to create a new user with an existing email", () => {
  expect(async () => {
   await createUserUseCase.execute({
    name: "New User",
    email: "test@test.com",
    password: "12345"
   });
   await createUserUseCase.execute({
    name: "New User",
    email: "test@test.com",
    password: "12345"
   });
  }).rejects.toBeInstanceOf(AppError)
 });


})
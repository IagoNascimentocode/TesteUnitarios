import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let iInMemoryUsersRepository: InMemoryUsersRepository;

describe("List User", () => {

 beforeEach(() => {
  iInMemoryUsersRepository = new InMemoryUsersRepository();
  authenticateUserUseCase = new AuthenticateUserUseCase(iInMemoryUsersRepository);

 });

 it("Should be able it should be possible to list a user's data", () => {

 })
})
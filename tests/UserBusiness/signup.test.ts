import { UserBusiness } from "../../src/business/UserBusiness";
import { SignupInputDTO } from "../../src/dtos/user/signup.dto";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

describe("Testing signup in UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve retornar token ao se cadastrar corretamente", async () => {
    const input: SignupInputDTO = {
      name: "Ciclana",
      email: "ciclana@email.com",
      password: "ciclana00",
    };

    const output = await userBusiness.signup(input);

    expect(output.message).toBe("Cadastro realizado com sucesso");
    expect(output.token).toBe("token-mock");
  });
});

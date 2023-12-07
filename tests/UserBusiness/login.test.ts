import { UserBusiness } from "../../src/business/UserBusiness";
import { LoginInputDTO } from "../../src/dtos/user/login.dto";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

describe("Testing login in UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve retornar token ao se logar corretamente", async () => {
    const input: LoginInputDTO = {
      email: "fulano@email.com",
      password: "fulano123",
    };

    const output = await userBusiness.login(input);

    expect(output.message).toBe("Login realizado com sucesso");
    expect(output.token).toBe("token-mock-fulano");
  });
});

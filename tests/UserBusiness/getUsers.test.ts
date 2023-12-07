import { UserBusiness } from "../../src/business/UserBusiness";
import { GetUsersInputDTO } from "../../src/dtos/user/getUsers.dto";
import { USER_ROLES, UserModel } from "../../src/models/User";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

describe("Testing getUsers in UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve retornar lista mockada", async () => {
    const input: GetUsersInputDTO = {
      q: "",
      token: "token-mock-astrodev",
    };

    const output = await userBusiness.getUsers(input);
    const astrodev: UserModel = {
      id: "id-mock-astrodev",
      name: "Astrodev",
      email: "astrodev@email.com",
      role: USER_ROLES.ADMIN,
      createdAt: expect.any(String),
    };

    expect(output).toHaveLength(2);
    expect(output).toContainEqual(astrodev);
  });
});

import { SignInData } from "./signInData";

export class MockedUsers {
    public readonly mockedUser1 = new SignInData('user1@gmail.com', '1234','Maksym','Kotsupyr');
    public readonly mockedUser2 = new SignInData('user2@gmail.com', '4321','John','Doe');
}
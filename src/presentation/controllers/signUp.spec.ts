import { SignUpController } from './signUp'

describe('SignUp controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut: any = new SignUpController()
    const httpRequest = {
      body: {
        email: 'anyEmail@mail.com',
        password: 'any',
        passwordConfirmation: 'any'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.name).toBe(400)
  })
})

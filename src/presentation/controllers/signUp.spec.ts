import { MissingParamError } from '../errors/missingParamError'
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
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
  test('should return 400 if no email is provided', () => {
    const sut: any = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any',
        passwordConfirmation: 'any'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})

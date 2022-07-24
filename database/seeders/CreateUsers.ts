import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'mod64bits',
        email: 'mod64bits@gmail.com',
        password: 'root',
        role: 'admin',
      },
      {
        name: 'marcio',
        email: 'normal@gmail.com',
        password: 'root',
        role: 'normal',
      },
    ])
  }
}

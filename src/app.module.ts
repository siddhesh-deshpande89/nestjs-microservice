import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    UserModule,
    RouterModule.register([
      {
        path: 'users',
        module: UserModule,
      },
    ]),
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
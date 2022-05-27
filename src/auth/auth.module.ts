import { AuthJwtStrategy } from './auth.jwtStrategy';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth, AuthSchema } from './schema/auth.schema';
import { AuthStrategy } from './auth.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[PassportModule,JwtModule.register({
    secret:'secretkey',
    signOptions:{
      expiresIn:'1 hour'
    }
  }),MongooseModule.forFeature([{name:Auth.name,schema:AuthSchema}])],
  controllers: [AuthController],
  providers: [AuthService,AuthStrategy,AuthJwtStrategy]
})
export class AuthModule {}

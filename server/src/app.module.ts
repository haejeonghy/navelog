import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs//common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { HashtagsController } from './hashtags/hashtags.controller';
import { HashtagsService } from './hashtags/hashtags.service';
import { HashtagsModule } from './hashtags/hashtags.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASS,
      database: 'navelog',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    PostsModule,
    HashtagsModule,
  ],
  controllers: [HashtagsController],
  providers: [HashtagsService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashtagsController } from './hashtags/hashtags.controller';

@Module({
  imports: [],
  controllers: [AppController, HashtagsController],
  providers: [AppService],
})
export class AppModule {}

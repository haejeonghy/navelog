import { Controller, Get, Param } from '@nestjs/common';
import { Hashtag } from './entities/hashtags.entity';
import { HashtagsService } from './hashtags.service';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtag(): string {
    return 'All top hashtag';
  }

  @Get('/:tag/posts')
  getPostsForHashtag(@Param() param): string {
    return `all hashtags ${param.tag}`;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsService } from 'src/posts/posts.service';
import { Repository } from 'typeorm';
import { CreateHashtagDto } from './dto/create-hashtag.dto';
import { UpdateHashtagDto } from './dto/update-hashtag.dto';
import { Hashtag } from './entities/hashtags.entity';

@Injectable()
export class HashtagsService {
  constructor(
    @InjectRepository(Hashtag)
    private hashtagsRepository: Repository<Hashtag>,
    private postsService: PostsService,
  ) {}

  async create(createHashtagDto: CreateHashtagDto, id: number) {
    const post = await this.postsService.findOne(id);
    return this.hashtagsRepository.save({
      ...createHashtagDto,
      post: post,
    });
  }

  async getAll(): Promise<Hashtag[]> {
    return this.hashtagsRepository.find(); //해시태그에 들어있는 모든 값 받기->컨트롤러에서 사용
  }

  async getOne(id: number): Promise<Hashtag> {
    const hashtag: Hashtag = await this.hashtagsRepository.findOne({
      where: { id },
    });
    if (!hashtag) {
      throw new NotFoundException(`Hashtag with ID ${id} not found.`);
    }
    return hashtag;
  }

  async delete(id: number) {
    await this.hashtagsRepository.delete(id);
  }

  async update(id: number, UpdateHashtagDto: UpdateHashtagDto) {
    return await this.hashtagsRepository.update(id, UpdateHashtagDto);
  }
}

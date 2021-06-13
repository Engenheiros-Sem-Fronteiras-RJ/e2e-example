import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'front-end', 'dist'),
      exclude: ['/api*'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

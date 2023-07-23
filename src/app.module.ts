import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VetModule } from './vetaCloud/vetaCloud.module';

@Module({
  imports: [VetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

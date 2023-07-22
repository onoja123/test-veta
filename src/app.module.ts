import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VetModule } from './vet/vet.module';

@Module({
  imports: [VetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

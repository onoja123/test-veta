import { Module } from '@nestjs/common';
import { VetaController } from './vetaCloud.controller';
import { VetaService } from './vetaCloud.service';

@Module({
  controllers: [VetaController],
  providers: [VetaService],
})
export class VetModule {}

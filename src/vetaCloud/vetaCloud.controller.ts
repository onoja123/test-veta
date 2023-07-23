import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpStatus,
} from '@nestjs/common';
import { VetaService } from './vetaCloud.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('vet')
export class VetaController {
  constructor(private vetService: VetaService) {}

  @Post('/test')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file): Promise<any> {
    try {
      const data = await this.vetService.postFile(file);

      if (!data) {
        throw new Error('Could not upload');
      }
      return {
        status: HttpStatus.CREATED,
        success: true,
        message: data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        success: false,
        message: 'Something went wrong',
      };
    }
  }
}

import {
  Controller,
  Post,
  Req,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { VetService } from './vet.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
@Controller('vet')
export class VetController {
  constructor(private vetService: VetService) {}

  @Post('/test')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Req() request: Request,
    @Res() res: Response,
    @UploadedFile() file,
  ): Promise<any> {
    try {
      const data = await this.vetService.postFile(file);

      if (!data) {
        throw new Error(`Could not upload`);
      }

      return res.status(201).json({
        status: 201,
        success: true,
        message: data,
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        success: false,
        message: 'Something went wrong',
      });
    }
  }
}

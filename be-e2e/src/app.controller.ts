import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEsfE2E(@Res() res: Response) {
    res.status(HttpStatus.OK).json({ message: 'esf-e2e' });
  }

}

import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello() {
    return 'hello';
  }
}

import { Injectable } from '@nestjs/common';
import {v1 as uuid} from 'uuid';

/**
 * @export
 * @class GeneratorService
 */
@Injectable()
export class GeneratorService {
    public uuid(): string {
        return uuid();
    }

    public fileName(ext: string) {
        return this.uuid() + '.' + ext;
    }
}

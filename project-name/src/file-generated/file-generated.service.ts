import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { DataShaper } from './domain/data-shaper';

@Injectable()
export class FileGeneratedService {
  async getShapedProducts(view?: string): Promise<any[]> {
    const response = await fetch(
      'http://otherview.org/3D4M/data/products.json',
    );

    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }

    const rawData = await response.json();

    const shaper = new DataShaper();

    return shaper.shape(rawData, view);
  }
}

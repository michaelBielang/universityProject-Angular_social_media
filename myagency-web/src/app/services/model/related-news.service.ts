import {Injectable} from '@angular/core';

export interface RelatedNews {
  title: string;
  imageSrc?: string;
  content?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RelatedNewsService {

  constructor() {
  }

  public items(): RelatedNews[] {
    const items = [
      {
        title: 'Fashion',
        imageSrc: 'https://mosaic04.ztat.net/vgs/media/articles/catalog-lg/1a16e8b6a1424deb9d156b11ec3d667d/592d82c7f6ec4b93bcfddfccd9e98f8d.jpeg',
        content: 'summer styles!'
      },
      {
        title: 'Fashion',
        content: 'Top 10 fashion trends 2019.'
      },
      {
        title: 'Training',
        content: 'Acting class for models. To perform at your best you can always learn and practice.'
      },
      {
        title: 'interesting',
        content: ':)'
      },
      {
        title: 'some stuff',
        content: 'You can see some new things'
      },
      {
        title: 'super interesting',
        content: 'wow thats amazing'
      },
      {
        title: 'tripple rainbow',
        content: 'across the sky'
      }
    ];
    return items.concat(items).concat(items);
  }
}

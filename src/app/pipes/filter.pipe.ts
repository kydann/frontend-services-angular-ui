import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if (arg === '' || arg.length < 3) { return value; }

    const resultPosts = [];

    for (const produc of value) {

      if (produc.cliente.indexOf(arg) > -1) {

        resultPosts.push(produc);

      }

    }

    return resultPosts;

  }

  transform(value: any, args: any): any {

    if (args === '' || args.length < 3) { return value; }

    const resultPostsI = [];

    for (const inspeccion of value) {

      if (inspeccion.supturno.indexOf(args) > -1) {

        resultPostsI.push(inspeccion);

      }

    }

    return resultPostsI;

  }

}

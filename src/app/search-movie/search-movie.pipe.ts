//custom pipe for getting the movie list which is matching to the input

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {

    transform(movieList: any[], searchText: string): any[] {
        if(!movieList) {
            return [];
        }
        if(!searchText) {
            return movieList;
        }

        searchText = searchText.toLowerCase();
        //using filter for getting the matched movie list
        return movieList.filter( it => {
            return it.toLowerCase().includes(searchText);
        });
    }

}

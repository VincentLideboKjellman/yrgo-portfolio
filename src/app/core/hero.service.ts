import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  fetch(){
    // return {
    //   title: 'My portfolio',
    //   body: `Chuck sausage spare ribs jerky brisket shank prosciutto salami.
    //   Landjaeger chuck prosciutto leberkas ham kielbasa turkey pork loin
    //   andouille corned beef. Shoulder swine kevin flank jerky kielbasa.`,
    //   image:'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
  
    // };
    return this.http.get('assets/mock-api/hero.json');
  }
}


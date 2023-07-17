import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private url: string = "https://v3.football.api-sports.io";
  private key: string = "e58c7f4dd52dd5d27c3e7ea6ccd152fb";

  constructor(public http: HttpClient) {}

  getTimesDaLiga(leagueId: number, season: number): Observable<any> {
    const headers = new HttpHeaders({
      "x-rapidapi-key": this.key,
    });

    const params = new HttpParams()
      .set("league", leagueId.toString())
      .set("season", season.toString());

    return this.http.get(`${this.url}/teams`, { headers, params });
  }

  getJogadoresDoTime(teamId: number, season: number): Observable<any> {
    const headers = new HttpHeaders({
      "x-rapidapi-key": this.key,
    });

    const params = new HttpParams()
      .set("team", teamId.toString())
      .set("season", season.toString());

    return this.http.get(`${this.url}/players`, { headers, params });
  }

  getClassificacaoLiga(leagueId: number, season: number): Observable<any> {
    const headers = new HttpHeaders({
      "x-rapidapi-key": this.key,
    });

    const params = new HttpParams()
      .set("league", leagueId.toString())
      .set("season", season.toString());

    return this.http.get(`${this.url}/standings`, { headers, params });
  }

  getJogosUltimos(leagueId: number, season: number): Observable<any> {
    const headers = new HttpHeaders({
      "x-rapidapi-key": this.key,
    });

    const params = new HttpParams()
      .set("league", leagueId.toString())
      .set("season", season.toString());

    return this.http.get(`${this.url}/fixtures`, { headers, params });
  }

  getJogosAoVivo(leagueId: number, season: number): Observable<any> {
    const headers = new HttpHeaders({
      "x-rapidapi-key": this.key,
    });

    const params = new HttpParams()
      .set("league", leagueId.toString())
      .set("season", season.toString());

    return this.http.get(`${this.url}/fixtures`, { headers, params });
  }

  getTime(timeId: number): Observable<any> {
    const headers = new HttpHeaders({
      "x-rapidapi-key": this.key,
    });

    const params = new HttpParams().set("id", timeId.toString());

    return this.http.get(`${this.url}/teams`, { headers, params });
  }

  getDetalhesJogo(gameId: number): Observable<any> {
    const headers = new HttpHeaders({
      "x-rapidapi-key": this.key,
    });

    const params = new HttpParams().set("id", gameId.toString());

    return this.http.get(`${this.url}/fixtures`, { headers, params });
  }
}

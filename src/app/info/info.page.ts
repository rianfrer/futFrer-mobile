import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  time: any;
  jogadores: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const timeId = JSON.parse(params['timeId']);
      if (timeId && timeId.team && timeId.team.id && timeId.season) {
        this.getTimeDetalhes(timeId.team.id, timeId.season);
        this.getJogadores(timeId.team.id, timeId.season);
      }
    });
  }

  getTimeDetalhes(teamId: number, season: number) {
    this.apiService.getTime(teamId).subscribe(
      (response) => {
        this.time = response.response[0];
        console.log('Dados do time:', this.time);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getJogadores(teamId: number, season: number) {
    this.apiService.getJogadoresDoTime(teamId, season).subscribe(
      (response) => {
        this.jogadores = response.response;
        console.log('Jogadores:', this.jogadores);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

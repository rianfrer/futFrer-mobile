import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  [x: string]: any;
  times: any[] = [];
  leagueId: number = 357; // ID da liga desejada (exemplo: Premier League)
  season: number = 2023; // Ano da temporada

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private apiService: ApiService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getTimesDaLiga();
  }

  getTimesDaLiga() {
    this.apiService.getTimesDaLiga(this.leagueId, this.season).subscribe(
      (response) => {
        this.times = response.response;
        console.log(this.times);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  verDetalhesTime(timeId: number) {
    const leagueId = 357; // ID da liga desejada (exemplo: Premier League)
    const season = 2023; // Ano da temporada

    const timeDetails = {
      league: { id: leagueId },
      season: season,
      team: { id: timeId },
    };

    this.navCtrl.navigateForward(["/info", JSON.stringify(timeDetails)]);
  }

  async confirmExit() {
    const alert = await this.alertController.create({
      header: "Confirmar saída",
      message: "Deseja realmente sair do aplicativo?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Sair",
          handler: () => {
            this.navCtrl.navigateRoot("/login");
          },
        },
      ],
    });

    await alert.present();
  }
}

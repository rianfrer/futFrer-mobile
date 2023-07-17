import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { AlertController } from "@ionic/angular";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  [x: string]: any;
  leagueId: number = 357; // ID da liga desejada (exemplo: Premier League)
  season: number = 2023; // Temporada desejada
  standings: any[] = [];

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getClassificacaoLiga();
  }

  getClassificacaoLiga() {
    this.apiService.getClassificacaoLiga(this.leagueId, this.season).subscribe(
      (response) => {
        this.standings = response.response[0].league.standings[0];
        console.log(this.standings);
      },
      (error) => {
        console.error(error);
      }
    );
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

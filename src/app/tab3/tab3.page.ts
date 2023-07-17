import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { AlertController } from "@ionic/angular";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  lastGames: any[] = [];
  liveGames: any[] = [];
  leagueId: number = 357; // ID da liga desejada
  season: number = 2023; // Ano da temporada

  constructor(
    private apiService: ApiService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadLastGames();
    this.loadLiveGames();
  }

  loadLastGames() {
    this.apiService.getJogosUltimos(this.leagueId, this.season).subscribe(
      (response: any) => {
        this.lastGames = response.response;
        console.log("Últimos jogos:", this.lastGames);
      },
      (error) => {
        console.error("Erro ao obter os últimos jogos:", error);
      }
    );
  }

  loadLiveGames() {
    this.apiService.getJogosAoVivo(this.leagueId, this.season).subscribe(
      (response: any) => {
        this.liveGames = response.response;
        console.log("Jogos ao vivo:", this.liveGames);
      },
      (error) => {
        console.error("Erro ao obter os jogos ao vivo:", error);
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

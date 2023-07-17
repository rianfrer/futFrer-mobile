import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string | any;
  password: string | any;
  errorMessage: string | any;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async login() {
    if (this.email === 'admin@admin.com' && this.password === '123') {
      this.router.navigate(['/tabs/tab1']);
      const toast = await this.toastController.create({
        message: 'Login realizado com sucesso',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Email ou senha incorretos',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
    }
  }
}

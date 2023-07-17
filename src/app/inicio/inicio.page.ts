import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.mudarTela(), 5000);
  }

  mudarTela() {
    this.router.navigate(["/login"]);
  }
}

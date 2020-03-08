import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  email;
  sal1;
  sal2;
  kid;
  result;
  r;
  constructor() {}
  calc() {
    if (this.sal1 == null || this.sal2 == null || this.kid == null) {
      this.r = "Preencha todos os campos para calcular a pensão";
    } else if (this.sal1 == this.sal2) {
      this.result = this.kid / 2;
      console.log(this.result);
      this.r = this.result;
    }
  }
}

import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ws-lang-select',
  templateUrl: './lang-select.component.html'
})
export class LangSelectComponent implements OnInit {

  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['en', 'de']);
  //   translate.setDefaultLang('en');

  //   const browserLang = translate.getBrowserLang();
  //   translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  // }


  ngOnInit() {
  }

}

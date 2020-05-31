import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public sanitizer: DomSanitizer;
  sanitizedUrl1;
  sanitizedUrl2;

  constructor() { }

  ngOnInit(): void {
    this.sanitizedUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl('https://env-215346.ma.cloud.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/0D0CDC8F11E97E8F00000080AFB3A407/W100--KB708DC9B11EA0BBD00000080EF6E7815');
    this.sanitizedUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl('https://env-215346.ma.cloud.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/43883BAB11E978D61F220080AFB38619/K92A279AB11EA0BC300000080EFAE4007--K92A276F911EA0BC300000080EFAE4007');
  }
}

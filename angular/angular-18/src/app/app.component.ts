import { RouterOutlet } from '@angular/router';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { render } from '@engagespot/client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('engagespotBellIcon') engagespotBellIcon!: ElementRef;

  ngAfterViewInit() {
    render(this.engagespotBellIcon.nativeElement, {
      apiKey: 'API_KEY',
      userId: 'USER_ID',
    });
  }
}

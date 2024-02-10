import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-about-banner',
    standalone: true,
    templateUrl: './about-banner.component.html',
    styleUrl: './about-banner.component.css',
    imports: [NavbarComponent]
})
export class AboutBannerComponent {

}

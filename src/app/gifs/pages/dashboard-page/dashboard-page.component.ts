import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifSideMenuComponent } from "../../components/gif-side-menu/gif-side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }

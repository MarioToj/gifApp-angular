import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifSideMenuHeaderComponent } from "./gif-side-menu-header/gif-side-menu-header.component";
import { GifSideMenuOptionsComponent } from "./gif-side-menu-options/gif-side-menu-options.component";

@Component({
  selector: 'gif-side-menu',
  imports: [GifSideMenuHeaderComponent, GifSideMenuOptionsComponent],
  templateUrl: './gif-side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifSideMenuComponent { }

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'gif-side-menu-header',
  imports: [],
  templateUrl: './gif-side-menu-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifSideMenuHeaderComponent { 

  envs = environment

}

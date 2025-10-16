import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '../../../services/gifs.service';
import { Gif } from '../../../interfaces/gif.interface';

interface MenuOptions {
  icon: string,
  label: string,
  route: string,
  subLabel: string
}

@Component({
  selector: 'gif-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gif-side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifSideMenuOptionsComponent { 

  gifService = inject(GifsService);

  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'Gifs Populares',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      route: '/dashboard/search',
      subLabel: 'Buscador de Gifs',
    }
  ]

}

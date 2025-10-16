import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent { 

  gifService = inject(GifsService);

  activatedRoute = inject(ActivatedRoute);

  query = toSignal(this.activatedRoute.params.pipe(map(param => param['key'])))

  gifsHistoryByKey = computed(() => this.gifService.getHistoryGifs(this.query()));

}

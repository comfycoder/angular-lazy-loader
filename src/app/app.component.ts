import { Component } from '@angular/core';
import { LazyLoaderService } from './lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-lazy-loader';

  constructor(private lazyLoaderService: LazyLoaderService) { }

  onLazyLoad() {
    this.lazyLoaderService.loadModule(() =>
      import('./lazy/lazy.module').then(m => m.LazyModule)
    );
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, NgReduxModule } from 'ng2-redux';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

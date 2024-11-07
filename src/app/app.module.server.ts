import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';  // Ensure this path is correct
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,  // This is importing the AppModule defined in app.module.ts
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

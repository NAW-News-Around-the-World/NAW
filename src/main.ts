import { App } from './app/app';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { appRoutingProviders } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig,
  providers: [...(appConfig.providers || []), ...appRoutingProviders],
}).catch((err) => console.error(err));

import { Component, Injector } from '@angular/core';
import { AppInsightsService } from './appinsights.service';

export class BaseComponent {

    private appInsightsService: AppInsightsService;

    constructor() {
        // Manually retrieve the monitoring service from the injector
        // so that constructor has no dependencies that must be passed in from child
        const injector = Injector.create({providers: [{provide: AppInsightsService, deps: []}]});
        this.appInsightsService = injector.get(AppInsightsService);
        this.logNavigation();
    }

    private logNavigation() {
        this.appInsightsService.logPageView();
    }
}
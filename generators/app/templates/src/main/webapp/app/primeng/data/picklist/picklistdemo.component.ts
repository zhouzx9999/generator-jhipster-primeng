import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MessageService} from 'primeng/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'jhi-picklist',
    templateUrl: './picklistdemo.component.html',
    styles: []
})
export class PicklistDemoComponent implements OnInit {
    activeIndex = 0;

    sourceCountries: Country[];

    targetCountries: Country[];

    constructor(private countryService: CountryService, private messageService: MessageService) { }

    ngOnInit() {
        this.countryService.getCountries().subscribe((countries: any) => {
            this.sourceCountries = countries.data;
        });
        this.targetCountries = [];
    }

    onMoveToTarget(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'onMoveToTarget Event', detail: event.items});
    }

    onMoveToSource(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'onMoveToSource Event', detail: event.items});
    }

    onSourceReorder(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'onSourceReorder Event', detail: event.items});
    }

    onTargetReorder(event: any) {
        this.messageService.add(
            {severity: 'info', summary: 'onTargetReorder Event', detail: event.items});
    }

    onChangeStep(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }
}

import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StartComponent implements OnChanges{
    
    @Input() rating: number=4;
    cropwidth: number = 75;

    ngOnChanges(changes: SimpleChanges): void {
        this.cropwidth = this.rating * (this.cropwidth/5)
    }
}
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StartComponent implements OnChanges{
    
    @Input() rating: number=4;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    cropwidth: number = 75;

    ngOnChanges(changes: SimpleChanges): void {
        this.cropwidth = this.rating * (this.cropwidth/5)
    }

    onClick():void
    {
        // console.log(this.rating)
        this.notify.emit('rating is ' + this.rating);
    }
}
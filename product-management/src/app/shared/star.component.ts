import { Component, OnChanges, SimpleChanges,Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';



@Component({
    selector:'pm-star',
    templateUrl :'./star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges{
    faStar = faStar;
    
    @Input() rating:number = 0;
    cropWidth:number =100;
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    

    ngOnChanges(changes: SimpleChanges): void {
     this.cropWidth = this.rating * 100/5
    }

    onClick():void
    {
       this.ratingClicked.emit(` ${this.rating}` );
    }


}
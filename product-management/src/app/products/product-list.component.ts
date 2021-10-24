import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {IProduct} from './iproduct'
import { ProductService } from './product.service';


@Component({
 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent implements OnInit,OnDestroy {

  pageTitle: string = 'Product List'
  imageWidth:number =50;
  imageMargin:number =2;
  showImage: boolean=false;
  errorMessage: string = '';

  sub: Subscription | undefined;

  private _listFilter: string ='';
  private _productService:ProductService;

  constructor(private productService:ProductService) { 
    this._productService = productService;
  }

  get listFilter(): string{
    return this._listFilter;
  }
  
  set listFilter(value: string ){
     this._listFilter = value;
     this.filteredProducts =  this.performFilter(value);
   
  }  

  filteredProducts:IProduct[]=[];
  products:IProduct[]=[];
  
  ngOnInit(): void {

    //
    this.sub = this.productService.getProducts().subscribe({
        next:products=>{
          this.products = products;
          this.filteredProducts = this.products;        
        },
        error:(err: any)=>this.errorMessage = err
    })

    //this.products = this.productService.getProducts();
    //this.filteredProducts =  this.performFilter(this.listFilter);
    

  }

  ngOnDestroy():void{
    this.sub?.unsubscribe;
  }

  performFilter(filterBy:string):IProduct[] {
    filterBy = filterBy.toLocaleLowerCase()    
    
    return this.products.filter((product:IProduct) =>
     product.productName.toLocaleLowerCase().includes(filterBy));
  }


  toggleImage():void
  {
    this.showImage = !this.showImage;    
  }

  onRatingClicked(message:string):void {
    //console.log(`Star component clicked and send the following message ${message}`);
    this.pageTitle = 'Product List: ' + message;

  }


}

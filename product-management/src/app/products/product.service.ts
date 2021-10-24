import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "./iproduct";
import{catchError,tap} from 'rxjs/operators'
import { Observable,EMPTY, throwError } from "rxjs";

///Injectable meaning this class can be injected into another class. 
//Setting the injectable provided in property to root allows this class
//to be injected into any class with in the application
@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductService{
  private productUrl = 'api/products/products.json'

  constructor(private http:HttpClient){}

  public getProducts() : Observable<IProduct[]>
    {
       return this.http.get<IProduct[]>(
         this.productUrl).pipe(
              tap(data=>console.log('ALL: ',JSON.stringify(data))),
            catchError(this.handleError)            
            ); //.pipe(tap(data=>console.log('ALL: ',JSON.stringify(data))))
      
      
    }

 

   private handleError(err:HttpErrorResponse):Observable<never>
    {
       let errorMessage ='';

       if (err.error instanceof ErrorEvent)
       {
         errorMessage = 'Am Error Occured : {err.error.maesage}';
       }
       else
       {
         errorMessage ='server return code : ${err.error.message}';         
       }

       console.error(errorMessage);
       return throwError (errorMessage);       
    }
  
}
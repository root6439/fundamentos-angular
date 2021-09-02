import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  public success(message: string, title?: string): void {
    toastr.success(message, title);
  }

  public info(message: string, title?: string): void {
    toastr.info(message, title);
  }

  public warning(message: string, title?: string): void {
    toastr.warning(message, title);
  }

  public error(message: string, title?: string): void {
    toastr.error(message, title);
  }
  
}

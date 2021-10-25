import { Categories } from './../interface/categories';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devices } from '../interface/devices';
import { Observable } from 'rxjs';
import { Device } from '../interface/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public static readonly API_URL = environment.backEndUrl;

  constructor(
    private http: HttpClient,
  ){ }

  listAllDevice(): Observable<Devices>{
    return this.http.get<Devices>(DeviceService.API_URL+ '/device')
  }

  listAllCategories(): Observable<Categories>{
    return this.http.get<Categories>(DeviceService.API_URL+ '/categories')
  }

  createDevice(device: Device): Observable<Device>{
    const body = {
      'color': device.color,
      'partNumber': device.partNumber,
      'category': {
        'id': device.category.id,
        'name': device.category.name
      }
    }
    return this.http.post<Device>(DeviceService.API_URL+ '/device', body)
  }

  deleteDevice(id: number): Observable<any> {
    return this.http.delete(DeviceService.API_URL+ '/device/'+id)
  }
}

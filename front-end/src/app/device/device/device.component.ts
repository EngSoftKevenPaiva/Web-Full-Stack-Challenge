import { Categories } from './../../interface/categories';
import { catchError, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interface/device';
import { Devices } from 'src/app/interface/devices';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  displayedColumns: string[] = ['id','color','partNumber','category','delete'];
  listAllDevices$: Observable<any>;
  listAllCategories$: Observable<any>;
  dataSource: MatTableDataSource<Device>;
  deviceForm: FormGroup;
  category: any;

  constructor(
    private deviceService: DeviceService,
    private formBuilder: FormBuilder
  ) {
    this.deviceForm = this.formBuilder.group({
    color: ['',Validators.required,Validators.maxLength(16)],
    partNumber: ['',Validators.required],
    category: ['',Validators.required]
  })}

  ngOnInit(): void {
    this.listAllDevices()
    this.listAllCategories()
  }

  listAllDevices(){
    this.listAllDevices$ = this.deviceService.listAllDevice().pipe(
      map((devices: Devices) => {
        this.dataSource = new MatTableDataSource(devices.data);
        console.log(devices.data)
        return devices.data;
      }), catchError((error: any,caught: Observable<any>) => {
        return caught
      })
    );
  }

  listAllCategories() {
    this.listAllCategories$ = this.deviceService.listAllCategories().pipe(
      map((categories: Categories) => {
        console.log(categories.data)
        return categories.data;
      }), catchError((error: any,caught: Observable<any>) => {
        return caught
      })
    );
  }

  createDevice(){
    const device = this.deviceForm.getRawValue()
    console.log(device)
    this.deviceService.createDevice(device).subscribe(
      response => {
        console.log(response);
        this.listAllDevices();
      },
      error => {
        console.log(error)
      }
    );
  }

  deleteDevice(id: number) {
    this.deviceService.deleteDevice(id).subscribe(
      response => {
        console.log(response);
        this.listAllDevices();
      },
      error => {
        console.log(error)
      }
    );
  }

}

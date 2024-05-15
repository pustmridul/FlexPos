import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-system-setting',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgbModule],
  templateUrl: './system-setting.component.html',
  styleUrl: './system-setting.component.scss',
})
export class SystemSettingComponent {}

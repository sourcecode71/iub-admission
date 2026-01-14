import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../shared/layout.component';
import { UndergraduateSectionComponent } from '../../components/undergraduate-section.component';
import { PostgraduateSectionComponent } from '../../components/postgraduate-section.component';
import { AppStore } from '../../core/store/app.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LayoutComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  store = inject(AppStore);

  async ngOnInit() {
    await this.store.loadAcademicInfo();
    console.log('Available Programs:', this.availablePrograms);
  }

  get availablePrograms() {
    return this.store.academicSettings()?.masterSetting || [];
  }

  showLoginPage() {
    // For now, we'll just log this. Later we'll implement proper routing.
    console.log('Show login page');
  }
}
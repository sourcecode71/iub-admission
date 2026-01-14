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
    LayoutComponent,
    UndergraduateSectionComponent,
    PostgraduateSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  store = inject(AppStore);

  ngOnInit() {
  }

  showLoginPage() {
    // For now, we'll just log this. Later we'll implement proper routing.
    console.log('Show login page');
  }
}
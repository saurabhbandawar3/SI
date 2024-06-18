import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  @Input() albumId: number | undefined;
  @Input() id: number | undefined;
  @Input() title: string | undefined;
  @Input() url: string | undefined;
  @Input() thumbnailUrl: string | undefined;
}

import { Component } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album-service.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
  providers: [AlbumService,],
})
export class AlbumComponent {
  public albumList: Album[] = [];

  constructor(private albumsService: AlbumService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe((albums) => {
        console.log(albums)
        this.albumList = albums;
      });
  }
}

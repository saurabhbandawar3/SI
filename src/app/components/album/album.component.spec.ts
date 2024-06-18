import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumService } from '../../services/album-service.service';
import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {    await TestBed.configureTestingModule({
      imports: [AlbumComponent],
      providers : [AlbumService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

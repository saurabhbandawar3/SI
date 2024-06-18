import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AlbumService } from './album-service.service';

describe('AlbumServiceService', () => {
  let service: AlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService],
    });
    service = TestBed.inject(AlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET call to the API', () => {
    const spy = spyOn(service, 'getAlbums').and.callThrough();
    service.getAlbums();
    expect(spy).toHaveBeenCalled();
  });
});


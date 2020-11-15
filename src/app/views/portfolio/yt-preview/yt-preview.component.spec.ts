import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtPreviewComponent } from './yt-preview.component';

describe('YtPreviewComponent', () => {
  let component: YtPreviewComponent;
  let fixture: ComponentFixture<YtPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

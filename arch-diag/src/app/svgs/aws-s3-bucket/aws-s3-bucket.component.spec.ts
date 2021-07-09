import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsS3BucketComponent } from './aws-s3-bucket.component';

describe('AwsS3BucketComponent', () => {
  let component: AwsS3BucketComponent;
  let fixture: ComponentFixture<AwsS3BucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsS3BucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsS3BucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

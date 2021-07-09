import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsS3LogbucketComponent } from './aws-s3-logbucket.component';

describe('AwsS3LogbucketComponent', () => {
  let component: AwsS3LogbucketComponent;
  let fixture: ComponentFixture<AwsS3LogbucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsS3LogbucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsS3LogbucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

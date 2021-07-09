import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCloudtrailComponent } from './aws-cloudtrail.component';

describe('AwsCloudtrailComponent', () => {
  let component: AwsCloudtrailComponent;
  let fixture: ComponentFixture<AwsCloudtrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsCloudtrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsCloudtrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

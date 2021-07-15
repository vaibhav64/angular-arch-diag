import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCloudwatchComponent } from './aws-cloudwatch.component';

describe('AwsCloudwatchComponent', () => {
  let component: AwsCloudwatchComponent;
  let fixture: ComponentFixture<AwsCloudwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsCloudwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsCloudwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

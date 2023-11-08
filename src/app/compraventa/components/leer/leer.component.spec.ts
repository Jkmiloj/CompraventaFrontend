import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerComponent } from './leer.component';

describe('LeerComponent', () => {
  let component: LeerComponent;
  let fixture: ComponentFixture<LeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeerComponent]
    });
    fixture = TestBed.createComponent(LeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHolderProfileComponent } from './account-holder-profile.component';

describe('AccountHolderProfileComponent', () => {
  let component: AccountHolderProfileComponent;
  let fixture: ComponentFixture<AccountHolderProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountHolderProfileComponent]
    });
    fixture = TestBed.createComponent(AccountHolderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

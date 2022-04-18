import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRepoDetailsComponent } from './account-repo-details.component';

describe('AccountRepoDetailsComponent', () => {
  let component: AccountRepoDetailsComponent;
  let fixture: ComponentFixture<AccountRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRepoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

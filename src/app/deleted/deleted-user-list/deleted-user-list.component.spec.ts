import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedUserListComponent } from './deleted-user-list.component';

describe('DeletedUserListComponent', () => {
  let component: DeletedUserListComponent;
  let fixture: ComponentFixture<DeletedUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

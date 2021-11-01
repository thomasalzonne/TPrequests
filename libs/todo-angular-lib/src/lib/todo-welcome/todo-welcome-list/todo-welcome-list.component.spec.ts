import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWelcomeListComponent } from './todo-welcome-list.component';

describe('TodoWelcomeListComponent', () => {
  let component: TodoWelcomeListComponent;
  let fixture: ComponentFixture<TodoWelcomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWelcomeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWelcomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

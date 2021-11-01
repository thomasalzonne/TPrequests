import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWelcomeComponent } from './todo-welcome.component';

describe('TodoWelcomeComponent', () => {
  let component: TodoWelcomeComponent;
  let fixture: ComponentFixture<TodoWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
